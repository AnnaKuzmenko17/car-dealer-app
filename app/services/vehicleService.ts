import { VehicleModel } from "../interfaces";

export const fetchMakes = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE}/GetMakesForVehicleType/car?format=json`
    );

    if (!res.ok) throw new Error("Failed to fetch vehicle makes list");
    const data = await res.json();
    return data;
  }
  catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching vehicle makes:", error.message);
    } else {
      console.error("An unknown error occurred while fetching vehicle makes");
    }
    return null;
  }
}

export const fetchVehicleModels = async (
  makeId: number,
  year: string
): Promise<string[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );

    if (!res.ok) throw new Error("Failed to fetch vehicle models");
    const data = await res.json();
    return [
      ...new Set(
        data.Results.map((item: VehicleModel) => item.Model_Name).filter(Boolean)
      ),
    ] as string[];
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching vehicle models:", error.message);
    } else {
      console.error("An unknown error occurred while fetching vehicle models");
    }
    return [];
  }
};
