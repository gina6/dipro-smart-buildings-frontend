import React from "react";
import { ReactComponent as ChevronRight } from "../../icons/Chevron-right.svg";
import plantCare from "../../icons/Wassertropf white.svg";
import { Link } from "react-router-dom";

interface NotificationDetails {
  roomLabel: string;
  roomID: string;
  plantID: string;
  plantLabel: string;
  plantImg: string;
}

export default function NotificationAlert({
  roomLabel,
  roomID,
  plantID,
  plantLabel,
  plantImg,
}: NotificationDetails) {
  return (
    <Link to={`/rooms/${roomID}/${plantID}`}>
      <div className="mb-3 flex items-center gap-6 rounded-lg bg-white">
        <div
          className="h-28 w-1/4 rounded-l-lg bg-cover bg-center "
          style={{
            backgroundImage: `url("/images/${plantImg}")`,
          }}
        ></div>
        <div className="flex h-full w-full justify-between">
          <div>
            <div className="flex items-center">
              <h3 className="text-green">{roomLabel}</h3>
              <p className="bg-gr ml-3 text-xs text-darkGrey">ID: {plantID}</p>
            </div>
            <p className="text-sm text-green">{plantLabel}</p>
            <div>
              <div className="my-1 flex w-fit">
                <div className="rounded-full bg-water drop-shadow-md">
                  <img
                    src={plantCare}
                    alt="Plant Care Notification Icon"
                    className="scale-90"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-20 items-center">
            <ChevronRight className="m-3 scale-150 text-darkGrey	" />
          </div>
        </div>
      </div>
    </Link>
  );
}
