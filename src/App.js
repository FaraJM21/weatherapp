import React, { useEffect } from "react";

import {
  TopButtons,
  TimeAndLocation,
  TemperatureAndDetails,
  Inputs,
  Forecast,
} from "./components/index";
import { getFormattedWeatherData } from "./services/weatherService";

function App() {
  const fetchWeatherData = async () => {
    const data = await getFormattedWeatherData({ q: "london" });
    console.log(data);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />

      <Forecast title="Hourly Foreacast" />
      <Forecast title="Daily Foreacast" />
    </div>
  );
}

export default App;
