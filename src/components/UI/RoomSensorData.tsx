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
    <div className="mt-5 mb-2 flex flex-col justify-between text-center xs:flex-row">
      <div className="flex grow basis-0 flex-col items-center justify-between">
        <p className="font-light">Feuchtigkeit Boden</p>
        <h3 className={`text-lg ${soilMoistureWarning ? "text-red" : ""}`}>
          {soilMoisture ? Math.round((soilMoisture / 1024) * 100) : "??"}%
        </h3>
      </div>
      <div className="my-2 h-px w-4/6 self-center rounded-full bg-lightGrey xs:h-10 xs:w-px"></div>
      <div className="flex grow basis-0 flex-col items-center justify-between">
        <p className="font-light">Temperatur</p>
        <h3 className="text-lg">{temp ?? "??"}°C</h3>
      </div>
      <div className="my-2 h-px w-4/6 self-center rounded-full bg-lightGrey xs:h-10 xs:w-px"></div>
      <div className="flex grow basis-0 flex-col items-center justify-between">
        <p className="font-light">Feuchtigkeit Luft</p>
        <h3 className="text-lg">{humidity ?? "??"}%</h3>
      </div>
    </div>
  );
}
