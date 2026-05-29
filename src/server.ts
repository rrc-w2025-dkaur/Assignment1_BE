import express from "express";
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

const app = express();

app.use(express.json());

//health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});

//Portfolio endpoint
app.post("/portfolio/performance", (req, res) => {
    const { initialInvestment, currentValue } = req.body;

    const result = calculatePortfolioPerformance(
        initialInvestment,
        currentValue
    );

    res.status(200).json(result);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});