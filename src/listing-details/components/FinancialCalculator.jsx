import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GoArrowUpRight } from "react-icons/go";
import React from "react";

function FinancialCalculator() {
  return (
    <>
      <div className="mt-7 p-8 rounded-xl shadow-md border">
        <h2 className="font-medium text-2xl">Financial Calculator</h2>
        <div className="flex gap-5 mt-5">
          <div className="w-full">
            <label>Price $</label>
            <Input type="number" />
          </div>
          <div className="w-full">
            <label>Interest Rate</label>
            <Input type="number" />
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="w-full">
            <label>Loan Term (Months)</label>
            <Input type="number" />
          </div>
          <div className="w-full">
            <label>Down Payment</label>
            <Input type="number" />
          </div>
        </div>
        <Button
          className="flex items-center gap-1 mt-4 text-md p-6 w-full rounded-lg"
          size="lg"
        >
          Calculate ?
        </Button>
      </div>
    </>
  );
}

export default FinancialCalculator;
