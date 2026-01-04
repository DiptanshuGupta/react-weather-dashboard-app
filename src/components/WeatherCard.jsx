// src/components/WeatherCard.jsx
export default function WeatherCard({ data, loading, error }) {
  if (loading) return <div className="status">Loading weather data…</div>;
  if (error) return <div className="status error">{error}</div>;
  if (!data) return <div className="status">Search a city to see weather.</div>;

  const iconUrl = data.icon
    ? `https://openweathermap.org/img/wn/${data.icon}@2x.png`
    : null;

  return (
    <div className="weather-card">
      <div className="header">
        <h2>
          {data.city}{data.country ? `, ${data.country}` : ''}
        </h2>
        {iconUrl && <img src={iconUrl} alt={data.description} />}
      </div>
      <div className="grid">
        <div>
          <strong>Temperature:</strong> {Math.round(data.temp)}°C
        </div>
        <div>
          <strong>Feels like:</strong> {Math.round(data.feelsLike)}°C
        </div>
        <div>
          <strong>Condition:</strong> {data.condition} ({data.description})
        </div>
        <div>
          <strong>Humidity:</strong> {data.humidity}%
        </div>
        <div>
          <strong>Wind speed:</strong> {data.windSpeed} m/s
        </div>
      </div>
    </div>
  );
}