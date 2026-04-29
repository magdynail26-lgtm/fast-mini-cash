export default function handler(req, res) {
    const { userId } = req.query;
    res.status(200).json({
        user_id: userId || "7421085",
        balance: 0.0002,
        status: "active"
    });
}
