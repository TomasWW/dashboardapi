import React, { useState, useEffect } from "react";

function CityDataComponent({ onDataFetched }) {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState(null); // Inicialmente establecida en null
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
    fetchWeatherData(city);
  };

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=es&format=json`
      );

      if (!response.ok) {
        throw new Error("Error al obtener datos climáticos");
      }

      const data = await response.json();
      // Actualiza el estado de 'weatherData' después de recibir los datos
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCitySelect = (e) => {
    const selectedIndex = e.target.value;
    const selectedCityData = weatherData.results[selectedIndex];

    if (selectedCityData) {
      setSelectedCity(selectedCityData);

      // Obtener latitud y longitud de la ciudad seleccionada
      const latitude = selectedCityData.latitude;
      const longitude = selectedCityData.longitude;

      // Llamar a la función para pasar los datos a App
      onDataFetched(latitude, longitude);
    }
  };

  useEffect(() => {
    // Puedes realizar acciones adicionales cuando cambie 'weatherData', como mostrar los datos en la interfaz de usuario.
    if (weatherData) {
      console.log("Datos climáticos:", weatherData);
    }
  }, [weatherData]);

  return (
    <div>
      <label htmlFor="cityInput">Ingrese una ciudad: </label>
      <input
        type="text"
        id="cityInput"
        value={city}
        onChange={handleCityChange}
      />

      {weatherData && weatherData.results && weatherData.results.length > 0 && (
        <select onChange={handleCitySelect}>
          <option value="" enabled>
            Selecciona una ciudad
          </option>
          {weatherData.results.map((city, index) => (
            <option key={index} value={index}>
              {city.name} ({city.country})
            </option>
          ))}
        </select>
      )}
      {selectedCity && (
        <div>
          Ciudad seleccionada: {selectedCity.name} ({selectedCity.country})
          
        </div>
      )}
    </div>
  );
}

export default CityDataComponent;
