import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function WeatherDetails() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'your_openweathermap_api_key'; // <-- Replace with real key

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('City not found');
        }
        return res.json();
      })
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message));
  }, [city]);

  if (error) return <p style={{ padding: '20px' }}>❌ {error}</p>;
  if (!weather) return <p style={{ padding: '20px' }}>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Weather in {weather.name}</h2>
      <p>🌡 Temperature: {weather.main.temp} °C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>☁ Condition: {weather.weather[0].description}</p>

      {/* ✅ Bonus: Google Map Embed */}
      <iframe
        title="Google Map"
        width="100%"
        height="300"
        frameBorder="0"
        style={{ border: 0, marginTop: '20px' }}
        src={`https://www.google.com/maps/embed/v1/place?key=your_google_maps_api_key&q=${city}`}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WeatherDetails;