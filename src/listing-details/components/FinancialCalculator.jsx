import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function FinancialCalculator({ carDetail }) {
  // declaring constant using useState(0) and default value is 0;
  const [carPrice, setCarPrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);

  const CalculateMonthlyPayment = () => {
    const Principal = carPrice - downPayment;
    const MonthlyInterestRate = interestRate / 1200;
    const MonthlyPayment =
      (Principal *
        MonthlyInterestRate *
        Math.pow(1 + MonthlyInterestRate, loanTerm)) /
      (Math.pow(1 + MonthlyInterestRate, loanTerm) - 1);

    console.log(MonthlyPayment);
  };
  return (
    <>
      <div className="mt-7 p-8 rounded-xl shadow-md border">
        <h2 className="font-medium text-2xl">Financial Calculator</h2>
        <div className="flex gap-5 mt-5">
          <div className="w-full">
            <label>Price $</label>
            <Input
              type="number"
              onChange={(e) => setCarPrice(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label>Interest Rate</label>
            <Input
              type="number"
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="w-full">
            <label>Loan Term (Months)</label>
            <Input
              type="number"
              onChange={(e) => setLoanTerm(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label>Down Payment</label>
            <Input
              type="number"
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </div>
        </div>
        <Button
          onClick={CalculateMonthlyPayment}
          className="flex items-center gap-1 mt-4 text-md p-6 w-full rounded-lg"
          size="lg"
        >
          Calculate Now
        </Button>
      </div>
    </>
  );
}

export default FinancialCalculator;
