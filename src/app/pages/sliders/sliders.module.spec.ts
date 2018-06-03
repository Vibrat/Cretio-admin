import { SlidersModule } from './sliders.module';

describe('PortfolioModule', () => {
  let portfolioModule: SlidersModule;

  beforeEach(() => {
    portfolioModule = new SlidersModule();
  });

  it('should create an instance', () => {
    expect(portfolioModule).toBeTruthy();
  });
});
