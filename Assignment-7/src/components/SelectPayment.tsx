import { useState } from "react";

const SelectPayment = () => {
  const [payment, setPayment] = useState<string>("");

  const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPayment(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center mt-5">
        <div className="flex items-center justify-center">
          <div className="flex w-sm">
            <label className="text-white pr-3">Select : </label>
            <select
              value={payment}
              onChange={handlePaymentChange}
              className="text-white border border-white w-xs"
            >
              <option value="" disabled className="bg-gray-700">
                Select Payment Method
              </option>
              <option value="Visa" className="bg-gray-700">
                Visa
              </option>
              <option value="Mastercard" className="bg-gray-700">
                Mastercard
              </option>
              <option value="Google pay" className="bg-gray-700">
                Google pay
              </option>
              <option value="UPI" className="bg-gray-700">
                UPI
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white flex w-sm mt-1">
          Payment Method : <span className="pl-3">{payment}</span>
        </p>
      </div>
    </>
  );
};

export default SelectPayment;
