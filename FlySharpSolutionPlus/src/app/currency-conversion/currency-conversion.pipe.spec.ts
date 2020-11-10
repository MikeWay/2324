import { CurrencyConversionPipe } from './currency-conversion.pipe';

describe('CurrencyConversionPipe', () => {

  // The pipe is stateless so can use the same one for all tests

  const pipe = new CurrencyConversionPipe();

  it('should create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('transforms 100 to 80.00 USD as default', () => {
    expect(pipe.transform(100)).toBe('USD 80.00');

  } )

  it('transforms 100 to 60.00 USD with a rate set', () => {
    expect(pipe.transform(100, 0.6)).toBe('USD 60.00');

  } )

});
