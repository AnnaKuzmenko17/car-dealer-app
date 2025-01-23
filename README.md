# Car Dealer App

## Overview

This repository contains the solution for the **Car Dealer App**, which allows users to filter vehicles by type and model year. The app is built using **Next.js** and **Tailwind CSS**.

## Features

- **Vehicle Filter Page**: Allows users to select a vehicle make and model year and navigate to a result page.
- **Result Page**: Displays vehicles based on the selected make and year.
- **Suspense Loading**: Utilizes React Suspense for data fetching and loading states.

## Project Setup

### 1. Clone the Repository

Run the following command to clone the repository:

```bash
git clone https://github.com/AnnaKuzmenko17/car-dealer-app.git
cd car-dealer-app
```

### 2. Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory instead of .env.example

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

This will start the app at `http://localhost:3000`. You can access the vehicle filter and results pages.

## API Endpoints

- **Vehicle Makes**: `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`  
  Fetches vehicle makes for the car type.
- **Vehicle Models**: `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json`  
  Fetches vehicle models based on the make ID and model year.

## React Suspense

The app uses the **React Suspense** component to manage loading states.

## Tailwind CSS

**Tailwind CSS** is used for styling, and the app is designed to be fully responsive. Custom styles can be added in the `tailwind.config.js` file if needed.
