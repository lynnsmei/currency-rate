'use client';
import React, { useMemo } from 'react';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';
import { Select, Skeleton } from 'antd';
import { Currency } from '../types/types';
import CardContainer from './CardContainer';
import { removeObjectByName } from '../util/util';
import { defaultCurrencies, apiCashListUrl, localStorageKey } from '../util/constants';

const { Option } = Select;

const MainPage: React.FC = () => {
  const { data, loading, error } = useFetch<Currency[]>(apiCashListUrl);
  const [selectedCurrencies, setSelectedCurrencies] = useLocalStorage<string[]>(localStorageKey, defaultCurrencies);

  const filteredData = useMemo<Currency[] | undefined>(() => {
    return data ? removeObjectByName(data, 'RUB') : undefined;
  }, [data]);

  if (loading) return <Skeleton.Input active={true} size={'default'} block={false} />;
  if (error) return <Skeleton.Input active={true} size={'default'} block={false} />;

  const handleChange = (value: string[]) => {
    setSelectedCurrencies(value);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Today's Exchange Rates</h1>
      <Select
        mode="multiple"
        id="currency-select"
        className="w-full"
        placeholder="Select currencies"
        value={selectedCurrencies}
        onChange={handleChange}
        aria-label="Select currencies"
      >
        {filteredData && filteredData.map((currency) => (
          <Option key={currency.ticker} value={currency.ticker}>
            {currency.description}
          </Option>
        ))}
      </Select>
      <CardContainer selectedCurrencies={selectedCurrencies} />
    </>
  );
};

export default MainPage;
