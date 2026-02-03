import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const { method } = req;
  const USERS_KEY = "gents_garage_users";
  const PRODUCTS_KEY = "gents_garage_products";

  try {
    // GET Requests: Fetching Data
    if (method === "GET") {
      const { type } = req.query;
      if (type === "products") {
        const products = (await kv.get(PRODUCTS_KEY)) || [];
        return res.status(200).json(products);
      }
      // Default to users for backward compatibility
      const users = (await kv.get(USERS_KEY)) || [];
      return res.status(200).json(users);
    }

    // POST Requests: Mutations
    if (method === "POST") {
      const { action, payload, type } = req.body;

      // --- Product Actions ---
      if (type === "products") {
        let products = (await kv.get(PRODUCTS_KEY)) || [];

        if (action === "add") {
          const newProduct = { ...payload, id: Date.now().toString() };
          products.push(newProduct);
          await kv.set(PRODUCTS_KEY, products);
          return res.status(200).json({ success: true, product: newProduct });
        }

        if (action === "delete") {
          products = products.filter((p) => p.id !== payload.id);
          await kv.set(PRODUCTS_KEY, products);
          return res.status(200).json({ success: true });
        }
      }

      // --- User Actions (Existing Logic) ---
      let users = (await kv.get(USERS_KEY)) || [];

      if (action === "signup") {
        if (
          users.some(
            (u) =>
              u.mobile === payload.mobile || u.username === payload.username,
          )
        ) {
          return res.status(400).json({ error: "User already exists" });
        }
        users.push(payload);
        await kv.set(USERS_KEY, users);
        return res.status(200).json({ success: true });
      }

      if (action === "update") {
        const index = users.findIndex(
          (u) => u.mobile === payload.originalMobile,
        );
        if (index !== -1) {
          users[index] = { ...users[index], ...payload };
          if (payload.password === "") delete users[index].password; // Keep old if empty
          await kv.set(USERS_KEY, users);
          return res.status(200).json({ success: true });
        }
        return res.status(404).json({ error: "User not found" });
      }

      if (action === "delete") {
        users = users.filter((u) => u.mobile !== payload.mobile);
        await kv.set(USERS_KEY, users);
        return res.status(200).json({ success: true });
      }
    }

    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ errorCode: "DB_ERROR", message: error.message });
  }
}
