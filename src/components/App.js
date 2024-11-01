// App.js
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Initialize with specified weather data
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
