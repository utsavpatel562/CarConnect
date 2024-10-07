import { Button } from "@/components/ui/button";
import { IoMdPricetag } from "react-icons/io";

function Pricing({ carDetail }) {
  return (
    <>
      <div className="p-8 rounded-xl border shadow-md">
        <h2 className="font-semibold">Our Price</h2>
        <h2 className="font-bold text-4xl mt-1">${carDetail?.originalPrice}</h2>
        <a href="#gotomsg">
          <Button className="w-full mt-7 rounded-lg" size="lg">
            <IoMdPricetag className="text-lg mr-2" />
            Make An Offer Price
          </Button>
        </a>
      </div>
    </>
  );
}

export default Pricing;
