import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    const { method } = req;
    const DB_KEY = 'gents_garage_users';

    try {
        if (method === 'GET') {
            // Fetch all users
            const users = await kv.get(DB_KEY) || [];
            return res.status(200).json(users);
        }

        if (method === 'POST') {
            const { action, payload } = req.body;

            // 1. SIGNUP / CREATE
            if (action === 'signup') {
                let users = await kv.get(DB_KEY) || [];
                // Check if already exists (server-side safety)
                if (users.some(u => u.mobile === payload.mobile || u.username === payload.username)) {
                    return res.status(400).json({ error: 'User already exists' });
                }
                users.push(payload);
                await kv.set(DB_KEY, users);
                return res.status(200).json({ success: true });
            }

            // 2. UPDATE USER
            if (action === 'update') {
                let users = await kv.get(DB_KEY) || [];
                const index = users.findIndex(u => u.mobile === payload.originalMobile);
                if (index !== -1) {
                    // Update fields
                    users[index].username = payload.username;
                    users[index].mobile = payload.mobile;
                    users[index].role = payload.role;
                    if (payload.password) users[index].password = payload.password;

                    await kv.set(DB_KEY, users);
                    return res.status(200).json({ success: true });
                }
                return res.status(404).json({ error: 'User not found' });
            }

            // 3. DELETE USER
            if (action === 'delete') {
                let users = await kv.get(DB_KEY) || [];
                users = users.filter(u => u.mobile !== payload.mobile);
                await kv.set(DB_KEY, users);
                return res.status(200).json({ success: true });
            }
        }

        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ errorCode: 'DB_ERROR', message: error.message });
    }
}
