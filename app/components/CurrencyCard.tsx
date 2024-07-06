import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';
import CardDescription from './CardDescription';
import { CurrencyCardProps } from '../types/types';


const CurrencyCard: React.FC<CurrencyCardProps> = ({ currency }) => {
  return (
    <Card
      className="w-72 mt-4"
      cover={
        <div className="flex justify-center pt-6 pr-4 pl-6">
          <Image
            alt={`${currency.fromCurrency} logo`}
            src={currency.fromLogo}
            width={50}
            height={50}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
            priority
          />
        </div>
      }
    >
      <CardDescription currency={currency}/>
    </Card>
  );
};

export default CurrencyCard;
