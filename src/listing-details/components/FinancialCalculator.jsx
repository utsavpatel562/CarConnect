import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function FinancialCalculator({ carDetail }) {
  // declaring constant using useState(0) and default value is 0;
  const [carPrice, setCarPrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const CalculateMonthlyPayment = () => {
    const Principal = carPrice - downPayment;
    const MonthlyInterestRate = interestRate / 1200;
    const MonthlyPayment =
      (Principal *
        MonthlyInterestRate *
        Math.pow(1 + MonthlyInterestRate, loanTerm)) /
      (Math.pow(1 + MonthlyInterestRate, loanTerm) - 1);

    setMonthlyPayment(MonthlyPayment.toFixed(2));
  };
  return (
    <>
      <div className="mt-7 p-8 rounded-xl shadow-md border">
        <h2 className="font-medium text-2xl">Financial Calculator</h2>
        <div className="flex gap-5 mt-5">
          <div className="w-full">
            <label
              htmlFor="forPrice"
              className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span className="text-sm font-medium text-gray-700">Price $</span>

              <input
                onChange={(e) => setCarPrice(e.target.value)}
                type="number"
                placeholder="Your amount"
                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>
          </div>
          <div className="w-full">
            <label
              htmlFor="forPrice"
              className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span className="text-sm font-medium text-gray-700">
                Interest Rate
              </span>

              <input
                onChange={(e) => setInterestRate(e.target.value)}
                type="number"
                placeholder="Your Interest Rate %"
                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="w-full">
            <label
              htmlFor="forPrice"
              className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span className="text-sm font-medium text-gray-700">
                Loan Term (Months)
              </span>

              <input
                onChange={(e) => setLoanTerm(e.target.value)}
                type="number"
                placeholder="Your Loan Period"
                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>
          </div>
          <div className="w-full">
            <label
              htmlFor="forPrice"
              className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span className="text-sm font-medium text-gray-700">
                Down Payment
              </span>

              <input
                onChange={(e) => setDownPayment(e.target.value)}
                type="number"
                placeholder="Your Payable amount"
                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>
          </div>
        </div>
        {monthlyPayment > 0 && (
          <h2 className="font-medium text-2xl mt-5">
            Your Monthly Payment is:{" "}
            <span className="text-gray-700 font-bold">${monthlyPayment}</span>
          </h2>
        )}
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
