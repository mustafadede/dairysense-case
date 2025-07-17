"use client";

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
    air_quality: {
      co: number;
      no2: number;
      o3: number;
      so2: number;
      pm2_5: number;
      pm10: number;
      "us-epa-index": number;
      "gb-defra-index": number;
    };
  };
}

export const WeatherCard = ({ weatherData }: { weatherData: WeatherData }) => {
  const { location, current } = weatherData;

  return (
    <div className="w-full max-w-md mt-4 mx-auto rounded-xl border border-gray-200 bg-white bg-opacity-30 backdrop-blur-md p-6">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-semibold mb-4">
          🌤 {location.name}, {location.country}
        </h2>
        <div className="flex flex-col items-center space-y-2">
          <img
            src={`https:${current.condition.icon}`}
            alt={current.condition.text}
            className="w-16 h-16"
          />
          <p className="text-lg font-medium">{current.condition.text}</p>
          <p className="text-4xl font-bold">{current.temp_c}°C</p>
          <p className="text-sm text-gray-500">
            Feels like {current.feelslike_c}°C
          </p>
        </div>

        <div className="my-6 border-t border-gray-300 w-full"></div>

        <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <span className="font-medium">Humidity:</span> {current.humidity}%
          </div>
          <div>
            <span className="font-medium">Wind:</span> {current.wind_kph} km/h (
            {current.wind_dir})
          </div>
          <div>
            <span className="font-medium">Pressure:</span> {current.pressure_mb}{" "}
            mb
          </div>
          <div>
            <span className="font-medium">UV Index:</span> {current.uv}
          </div>
          <div className="col-span-2">
            <span className="font-medium">Air Quality (PM2.5):</span>{" "}
            {current.air_quality.pm2_5} µg/m³
          </div>
        </div>

        <p className="text-xs mt-6 text-gray-400">
          Updated at: {current.last_updated} - {location.tz_id}
        </p>
      </div>
    </div>
  );
};
