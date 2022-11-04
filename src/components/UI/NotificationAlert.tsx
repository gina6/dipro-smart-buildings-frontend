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
      <div className="flex items-center mb-3 rounded-lg bg-white gap-6">
        <div
          className="h-28 w-1/4 bg-center bg-cover rounded-l-lg "
          style={{
            backgroundImage: `url("${process.env.REACT_APP_BACKEND_API}${plantImg}")`,
          }}
        ></div>
        <div className="flex justify-between w-full h-full">
          <div>
            <div className="flex items-center">
              <h3 className="text-green">{roomLabel}</h3>
              <p className="text-darkGrey text-xs ml-3 bg-gr">ID: {plantID}</p>
            </div>
            <p className="text-sm text-green">{plantLabel}</p>
            <div>
              <div className="flex w-fit my-1">
                <div className="bg-water rounded-full drop-shadow-md">
                  <img
                    src={plantCare}
                    alt="Plant Care Notification Icon"
                    className="scale-90"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center h-20">
            <ChevronRight className="scale-150 text-darkGrey m-3	" />
          </div>
        </div>
      </div>
    </Link>
  );
}
