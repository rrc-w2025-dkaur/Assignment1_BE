import express, { Request, Response } from "express";
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

const app = express();

app.use(express.json());

//health check endpoint
app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({
        status: "ok"
    });
});

//Portfolio endpoint
app.post("/portfolio/performance", (req: Request, res: Response) => {
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