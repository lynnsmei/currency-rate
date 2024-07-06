import React from 'react';
import useFetch from '../hooks/useFetch';
import CurrencyCard from './CurrencyCard';
import { Alert, Skeleton } from 'antd';
import { CurrencyRate, CardContainerProps } from '../types/types';
import { apiCurrencyRatesUrl } from '../util/constants';


const CardContainer: React.FC<CardContainerProps> = ({ selectedCurrencies }) => {
  const { data, loading, error } = useFetch<CurrencyRate[]>(apiCurrencyRatesUrl);

  if (loading) return <Skeleton.Image active={true} className='mt-4' />;

  if (error) return <Alert message="Error" description="There was an error fetching the currency rates." type="error" className='mt-4' />;

  if (selectedCurrencies.length === 0) return <Alert message="" description="No currency selected." type="info" className='mt-4' />;

  const filteredData = data?.filter(rate => selectedCurrencies.includes(rate.fromCurrency)) || [];

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {filteredData.map((rate) => (
        <CurrencyCard key={rate.ticker} currency={rate}/>
      ))}
    </div>
  );
};

export default CardContainer;
