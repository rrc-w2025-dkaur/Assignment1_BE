export interface PortfolioResult {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioResult {

  const profitOrLoss = currentValue - initialInvestment;

  const percentageChange = (profitOrLoss / initialInvestment) * 100;

  const performanceSummary =
    percentageChange >= 30
      ? "Excellent performance"
      : percentageChange >= 10
      ? "Solid gain"
      : percentageChange >= 0
      ? "Minor gain"
      : percentageChange >= -10
      ? "Minor loss"
      : "Significant loss";

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
}
