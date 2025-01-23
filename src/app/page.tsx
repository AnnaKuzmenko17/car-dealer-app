"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NextButton from "@/components/NextButton";
import Loader from "@/components/Loader";
import { VehicleModel } from "@/interfaces";
import generateYearOptions from "@/utils/generateYearOptions";
import { fetchMakes } from "@/services/vehicleService";

const Home = () => {
  const [vehicleMakes, setVehicleMakes] = useState<string[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<number>(2015);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const getVehicleMakes = async () => {
      const data = await fetchMakes();
      setVehicleMakes(data.map((item: VehicleModel) => item.MakeName));
    };

    getVehicleMakes();
  }, []);

  useEffect(() => {
    setIsButtonDisabled(!selectedMake || !selectedYear);
  }, [selectedMake, selectedYear]);

  const handleNextClick = () => {
    if (!isButtonDisabled) {
      router.push(`/result/${selectedMake.toLowerCase()}/${selectedYear}`)
    }
    setIsLoadingNextPage(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Car Dealer Filter
      </h1>

      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8 border border-gray-200">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="make"
              className="block text-xl font-semibold text-gray-700"
            >
              Select Vehicle Make
            </label>
            <select
              id="make"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedMake}
              onChange={(e) => setSelectedMake(e.target.value)}
            >
              <option value=''>Select Make</option>
              {vehicleMakes.map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="year"
              className="block text-xl font-semibold text-gray-700"
            >
              Select Model Year
            </label>
            <select
              id="year"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {generateYearOptions().map((yearOption) => (
                <option key={yearOption.value} value={yearOption.value}>
                  {yearOption.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-8">
            {isLoadingNextPage ? (
              <Loader />
            ) : (
              <NextButton
                isButtonDisabled={isButtonDisabled}
                handleNextClick={handleNextClick}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;