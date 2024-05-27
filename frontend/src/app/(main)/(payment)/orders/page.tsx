import Link from 'next/link';
import React from 'react';
import { Button } from '../../../../components/ui/button';

const SuccessPayment = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className='shadow-xl bg-white flex flex-col gap-2 justify-center items-center p-8 rounded-lg'>
        <div className="">
          <svg width="200" height="200" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="#2ECC71" />
            <path
              d="M37.25 56.25 L50 71.25 L62.75 56.25 L62.75 23.75 L37.25 56.25 Z"
              fill="none"
              stroke="#fff"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="62.83, 62.83"
              strokeDashoffset="100"
            />
          </svg>
        </div>
        <h1 className='text-xl font-semibold'>Payment Successful!</h1>
        <p>Thank you for your order. Your payment has been processed successfully.</p>
        {/* Order details and button logic remains the same */}
        <Button className='mt-6'>
          <Link href="/" className='font-semibold text-lg px-4'>Find more products</Link>
        </Button>      </div>
    </div>
  );
};

export default SuccessPayment;
