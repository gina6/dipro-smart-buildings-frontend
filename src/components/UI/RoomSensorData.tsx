import React from "react";

interface SensorData {
  temp: number | undefined;
  co2: number | undefined;
  humidity: number | undefined;
}


export default function RoomSensorData({ temp, co2, humidity }: SensorData) {
  return (
    <div className="flex flex-row justify-between my-5">
      <div className="flex flex-col items-center">
        <h3 className="text-lg">{temp}°C</h3>
        <p className="font-light">Temp.</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-lg">{co2}</h3>
        <p className="font-light">Co2</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-lg">{humidity}%</h3>
        <p className="font-light">Humidity</p>
      </div>
    </div>
  )
}