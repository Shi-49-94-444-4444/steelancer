'use client'

import { LuFolderClock } from 'react-icons/lu'
import { RiFolderShield2Line } from 'react-icons/ri'

interface JobPaymentProps {
  title?: string;
  paymentType: string;
  onChange: (paymentType: string) => void;
}

const JobPayment: React.FC<JobPaymentProps> = ({ 
  title, 
  paymentType, 
  onChange 
}) => {
  return (
    <>
      <label>{title}</label>
      <div className="
          flex 
          flex-row 
          justify-between 
          gap-3
        "
      >
        <div
          className={`
              flex 
              flex-row 
              w-1/2 
              border-[1px] 
              gap-8 
              p-20 
              items-center 
              rounded-15 
              ${paymentType === 'hour' ? 'border-pink-cus-tx' : 'border-black'} 
              ${paymentType === 'hour' ? 'selected' : ''} 
              ${paymentType ? 'cursor-pointer' : ''}
            `
          }
          onClick={() => onChange('hour')}
        >
          <div>
            <LuFolderClock size={100} />
          </div>
          <section className="space-y-2">
            <h1 className="text-xl font-semibold">
              Pay by the hour
            </h1>
            <h2 className="text-sm">
              Rent at hourly rates and pay for billed hours. Best suited for extended jobs.
            </h2>
          </section>
        </div>
        <div
          className={`
              flex 
              flex-row 
              w-1/2 
              border-[1px] 
              gap-8 
              px-20 
              py-10 
              items-center 
              rounded-15 
              ${paymentType === 'fixed' ? 'border-pink-cus-tx' : 'border-black'} 
              ${paymentType === 'fixed' ? 'selected' : ''} 
              ${paymentType ? 'cursor-pointer' : ''}
            `
          }
          onClick={() => onChange('fixed')}
        >
          <div>
            <RiFolderShield2Line size={100} />
          </div>
          <section className="space-y-2">
            <h1 className="text-xl font-semibold">
              Pay a fixed price
            </h1>
            <h2 className="text-sm">
              Negotiate the price and disburse payment when the job is completed. Best suited for one-time jobs.
            </h2>
          </section>
        </div>
      </div>
    </>
  );
};

export default JobPayment
