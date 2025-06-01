const db = require("../config/db");

const createOrder = async (user_id, items) => {
  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    // Insert into orders table
    const [orderResult] = await connection.execute(
        "INSERT INTO orders (user_id, status) VALUES (?, ?)",
        [user_id, "Pending"],
    );
    const orderId = orderResult.insertId;

    // Insert order items
    for (const item of items) {
      const [product] = await connection.execute(
          "SELECT price FROM products WHERE id = ?",
          [item.product_id],
      );
      const price = product[0].price;
      await connection.execute(
          `INSERT INTO order_items (order_id, product_id, quantity, price)
                VALUES (?, ?, ?, ?)`,
          [orderId, item.product_id, item.quantity, price],
      );
    }

    await connection.commit();
    return orderId;
  } catch (error) {
    await connection.rollback();
    console.error("Error creating order:", error);
    throw error;
  } finally {
    connection.release();
  }
};

const getOrdersByUser = async (userId) => {
  const [orders] = await db.execute(
      `SELECT * FROM orders WHERE user_id = ?`,
      [userId],
  );
  return orders;
};

const getOrderById = async (orderId) => {
  const [order] = await db.execute(
      `SELECT * FROM orders WHERE id = ?`,
      [orderId],
  );
  const [items] = await db.execute(
      `SELECT * FROM order_items WHERE order_id = ?`,
      [orderId],
  );
  return {
    ...order[0],
    items,
  };
};

const updateOrderStatus = async (orderId, status) => {
  const [result] = await db.execute(
      `UPDATE orders SET status = ? WHERE id = ?`,
      [status, orderId],
  );
  return result.affectedRows > 0;
};

module.exports = {
  createOrder,
  getOrdersByUser,
  getOrderById,
  updateOrderStatus,
};
