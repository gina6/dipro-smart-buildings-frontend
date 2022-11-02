import React from "react";
import { ReactComponent as Wassertropf } from "../../icons/Wassertropf.svg";

interface WarningProps {
  date: string;
}

function getTimeDuration(since: Date) {
  const duration = Date.now() - new Date(since).getTime();
  const hours = Math.floor(duration / 3_600_000);
  const days = Math.floor(hours / 24);
  if (hours < 1) {
    return "Jetzt";
  } else if (hours === 1) {
    return `Seit einer Stunde`;
  } else if (hours < 24) {
    return `Seit ${hours} Stunden`;
  } else if (days === 1) {
    return `Seit einem Tag`;
  } else {
    return `Seit ${days} Tagen`;
  }
}

export default function WarningWater({ date }: WarningProps) {
  return (
    <div className="my-5 bg-water text-white rounded-xl">
      <div className="flex items-center">
        <div className="p-4">
          <Wassertropf className="scale-150 [&_path]:fill-white" />
        </div>
        <div className="p-3 pl-0">
          <h3>Bodenfeuchtigkeit zu gering</h3>
          <p>{getTimeDuration(new Date(date))}</p>
        </div>
      </div>
    </div>
  );
}
