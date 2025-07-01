import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WeatherSearch() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim() !== '') {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🌦 Weather Search</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default WeatherSearch;