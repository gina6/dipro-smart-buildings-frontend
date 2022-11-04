import React from "react";

interface SensorData {
  soilMoisture: number | undefined;
  soilMoistureWarning: boolean;
  temp: number | undefined;
  humidity: number | undefined;
}

export default function RoomSensorData({
  temp,
  soilMoisture,
  soilMoistureWarning,
  humidity,
}: SensorData) {
  return (
    <div className="flex flex-col xs:flex-row justify-between mt-5 mb-2 text-center">
      <div className="flex flex-col grow basis-0 items-center justify-between">
        <p className="font-light">Feuchtigkeit Boden</p>
        <h3 className={`text-lg ${soilMoistureWarning ? "text-red" : ""}`}>
          {soilMoisture ? Math.round((soilMoisture / 1024) * 100) : "??"}%
        </h3>
      </div>
      <div className="h-px xs:h-10 w-4/6 xs:w-px rounded-full my-2 self-center bg-lightGrey"></div>
      <div className="flex flex-col grow basis-0 items-center justify-between">
        <p className="font-light">Temperatur</p>
        <h3 className="text-lg">{temp ?? "??"}°C</h3>
      </div>
      <div className="h-px xs:h-10 w-4/6 xs:w-px rounded-full my-2 self-center bg-lightGrey"></div>
      <div className="flex flex-col grow basis-0 items-center justify-between">
        <p className="font-light">Feuchtigkeit Luft</p>
        <h3 className="text-lg">{humidity ?? "??"}%</h3>
      </div>
    </div>
  );
}
