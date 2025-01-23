import ErrorMessage from "@/components/ErrorMessage";
import Loader from "@/components/Loader";
import Link from "next/link";
import { Suspense } from "react";
import { fetchMakeId, fetchMakes, fetchVehicleModels } from "@/services/vehicleService";
import { VehicleParams } from "@/interfaces";

export const generateStaticParams = async () => {
  const vehicleMakes = await fetchMakes();
  const makes = vehicleMakes.map(({ MakeName }) => ({
    make: MakeName.toLowerCase(),
  }));

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => ({
    year: (2015 + i).toString(),
  }));

  return makes.flatMap(({ make }) =>
    years.map(({ year }) => ({ make, year }))
  );
};


const ResultPage = async ({ params }: { params: Promise<VehicleParams> }) => {
  const { make, year } = (await params);

  const makeId = await fetchMakeId(make);

  if (!makeId) {
    return <ErrorMessage />
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
        className="p-4 bg-blue-600 text-white rounded-lg font-semibold text-center shadow-lg hover:bg-blue-700 transition-all duration-300 sm:w-auto w-full max-w-[300px]"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ResultPage;