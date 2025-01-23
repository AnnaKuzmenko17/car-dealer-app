import { Make, VehicleModel } from "../interfaces";

export const fetchMakes = async (): Promise<VehicleModel[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE}/GetMakesForVehicleType/car?format=json`
    );

    if (!res.ok) throw new Error("Failed to fetch vehicle makes list");
    const data = await res.json();
    return data.Results;
  }
  catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching vehicle makes:", error.message);
    } else {
      console.error("An unknown error occurred while fetching vehicle makes");
    }
    return [];
  }
}

export const fetchMakeId = async (make: string): Promise<number | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE}/getAllMakes?format=json`
    );

    if (!res.ok) throw new Error("Failed to fetch vehicle makes list");
    const data = await res.json();

    const foundMake = data.Results.find(
      (item: Make) => item.Make_Name?.toLowerCase() === make.toLowerCase()
    );

    return foundMake?.Make_ID || null;
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
        data.Results.map((item: { Model_Name: string }) => item.Model_Name).filter(Boolean)
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
