import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Chevron } from "../../icons/Back_Button.svg";
import { ReactComponent as BackBG } from "../../assets/BG-Primary-Green.svg";

export default function BackLink() {
  const navigate = useNavigate();

  return (
    <div
      className="fixed flex left-0 top-0 z-10 cursor-pointer h-[50px] text-white"
      onClick={() => navigate(-1)}
    >
      <div className="flex items-center pl-5">
        <Chevron className="mr-2"></Chevron>
        <p>Zurück</p>
      </div>
      <BackBG className="absolute top-0 -z-10 h-16 drop-shadow-sm" />
    </div>
  );
}
