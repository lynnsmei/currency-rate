export interface Currency {
    name: string;
    ticker: string;
    exchange: string;
    isin: string | null;
    value: string;
    description: string;
    lotCount: number;
    currency: string;
    secondCurrency: string | null;
    logoURL: string;
    primaryLogoURL: string | null;
    currentPrice: number;
    prevClosePrice: number;
    divGrowth: string | null;
    type: number;
    asseType: string | null;
    sector: string | null;
    countryISO: string;
    fromDb: boolean;
    assetInfoId: string;
    getEtfDataFrom: string | null;
    nextDividends: string | null;
    prevDividends: string | null;
    futureDivsCalculated: boolean;
    inPortfolioAmount: number | null;
    customPeriodType: string | null;
    customPaymentInTheLastDayOfMonth: boolean;
    customPeriod: string | null;
    nkd: number | null;
    nominal: number | null;
    baseNominal: number | null;
    realNominal: number | null;
    currentPriceOriginal: number;
    prevClosePriceOriginal: number;
    ignoreCurrency: boolean;
    otherVersions: string | null;
    anotherName: string | null;
    modelType: number;
    customHoldingType: string | null;
    isDelisted: boolean;
    dividendPerShare: number;
    dividendFrequency: number;
    nextDividendDate: string | null;
    matDate: string | null;
    offerDate: string | null;
    effectiveYield: number | null;
    bondCouponPercent: number | null;
    duration: number | null;
    exDividendDate: string | null;
    declareDate: string | null;
    lastPurchaseDate: string | null;
    divCurrency: string | null;
    dividendPerShareOriginal: number;
    bondPaymentType: string | null;
    reinvestAmount: number | null;
    reinvestAmountOriginal: number | null;
    amortizationPerShare: number | null;
    amortizationPerShareOriginal: number | null;
    fromDate: string | null;
    yeildPerDay: number | null;
    yeildPerDayOriginal: number | null;
    dividendIsRecommended: boolean;
    dividendReportPeriod: string | null;
  }

export interface CurrencyRate {
    ticker: string;
    fromCurrency: string;
    toCurrency: string;
    fromLogo: string;
    toLogo: string;
    price: number;
    previousClose: number;
    dayGain: number;
    dayGainPercent: number;
  }

export interface CardContainerProps {
    selectedCurrencies: string[];
  }
export interface CurrencyCardProps {
    currency: CurrencyRate;
  }

export interface CardDescriptionProps {
  currency: CurrencyRate;
}
  