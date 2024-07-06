import React from 'react';
import { CurrencyRate } from '../types/types';
import { CardDescriptionProps } from '../types/types';

const CardDescription: React.FC<CardDescriptionProps> = ({ currency }) => {

  const { price, dayGain, dayGainPercent, fromCurrency } = currency;

  const trimValue = (value: number) => value.toFixed(4);

  return (
    <>
      <p className="text-1xl font-bold">{fromCurrency}</p>
      <p className="text-2xl font-bold">{trimValue(price)} ₽</p>
      <p style={{ color: dayGain >= 0 ? '#006400' : '#8B0000' }}>
        {trimValue(dayGain)} ({trimValue(dayGainPercent)}%)
      </p>
    </>
  );
};

export default CardDescription;
