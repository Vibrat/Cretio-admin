import { PorfolioModule } from './porfolio.module';

describe('PortfolioModule', () => {
  let portfolioModule: PorfolioModule;

  beforeEach(() => {
    portfolioModule = new PorfolioModule();
  });

  it('should create an instance', () => {
    expect(portfolioModule).toBeTruthy();
  });
});
