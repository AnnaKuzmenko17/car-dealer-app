import ErrorMessage from "@/app/components/ErrorMessage";
import Loader from "@/app/components/Loader";
import Link from "next/link";
import { Suspense } from "react";
import { fetchMakes, fetchVehicleModels } from "@/app/services/vehicleService";
import { Make, VehicleParams } from "@/app/interfaces";

const ResultPage = async (context: { params: VehicleParams }) => {
  const { make, year } = context.params;

  const makes = await fetchMakes();
  const makeId = makes.Results.find(
    (item: Make) => item.Make_Name.toLowerCase() === make.toLowerCase()
  );

  if (!makeId) {
    return <ErrorMessage />;
  }

  const vehicleModels = await fetchVehicleModels(makeId, year);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      <Suspense fallback={<Loader />}>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Vehicle Models for {make} - {year}
        </h1>

        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 border border-gray-200 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Available Models:</h2>
          <ul className="space-y-4 text-gray-800">
            {vehicleModels.length > 0 ? (
              vehicleModels.map((model, index) => (
                <li key={index} className="p-4 border-b border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                  <span className="text-xl">{model}</span>
                </li>
              ))
            ) : (
              <li className="text-xl text-gray-500">No models available for this make and year.</li>
            )}
          </ul>
        </div>
      </Suspense>

      <Link
        href="/"
        className="mt-5 p-2 bg-blue-500 text-white rounded-lg"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ResultPage;