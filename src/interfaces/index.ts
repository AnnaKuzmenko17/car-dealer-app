export interface Make {
  Make_ID: number;
  Make_Name: string;
}

export interface VehicleModel {
  MakeName: string;
}

export interface VehicleParams {
  make: string;
  year: string;
}

export interface YearOption {
  value: number;
  label: string;
};