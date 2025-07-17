export const fetchWeatherLocation = async (location: string) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&aqi=yes`
  );
  const data = await res.json();
  return data;
};
