import React from "react";

interface SensorData {
  temperature: number;
  co2: number;
  humidity: number;
}


export default function RoomSensorData({ temperature, co2, humidity }: SensorData) {
  return (
    <div>
      <div>
        <h3>{temperature}°C</h3>
        <p>Temp.</p>
      </div>
      <div>
        <h3>{co2}</h3>
        <p>Co2</p>
      </div>
      <div>
        <h3>{humidity}%</h3>
        <p>Humidity</p>
      </div>
    </div>
  )
}