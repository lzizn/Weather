import React from 'react';

export function WeatherIcon({ icon }: { icon: string | undefined }) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      onError={(e: any) => {
        e.target.src = 'https://openweathermap.org/img/wn/10d@2x.png';
      }}
      alt=""
    />
  );
}

