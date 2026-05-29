import { calculatePortfolioPerformance } from '../src/portfolio/portfolioPerformance';

describe('Portfolio Performance', () => {

  it('should calculate profit correctly', () => {
    const initial = 10000;
    const current = 12000;

    const result = calculatePortfolioPerformance(initial, current);

    expect(result.profitOrLoss).toBe(2000);
  });

  it('should calculate percentage correctly', () => {
    const result = calculatePortfolioPerformance(10000, 12000);
    expect(result.percentageChange).toBe(20);
  });

  it('should handle loss correctly', () => {
    const result = calculatePortfolioPerformance(10000, 8000);
    expect(result.profitOrLoss).toBe(-2000);
  });

});