import { CustomerAccountsModule } from './customer-accounts.module';

describe('CustomerAccountsModule', () => {
  let customerAccountsModule: CustomerAccountsModule;

  beforeEach(() => {
    customerAccountsModule = new CustomerAccountsModule();
  });

  it('should create an instance', () => {
    expect(customerAccountsModule).toBeTruthy();
  });
});
