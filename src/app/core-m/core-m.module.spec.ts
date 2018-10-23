import { CoreMModule } from './core-m.module';

describe('CoreMModule', () => {
  let coreMModule: CoreMModule;

  beforeEach(() => {
    coreMModule = new CoreMModule();
  });

  it('should create an instance', () => {
    expect(coreMModule).toBeTruthy();
  });
});
