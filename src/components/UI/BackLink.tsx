import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Chevron } from "../../icons/Back_Button.svg";

export default function BackLink() {
  const navigate = useNavigate();

  return (
    <div
      className="flex fixed left-0 top-0 items-center mb-5 w-2/5 h-16 text-white bg-back-button bg-no-repeat"
      onClick={() => navigate(-1)}
    >
      <Chevron className="ml-3 mr-2 "></Chevron>
      <p>Zurück</p>
    </div>
  );
}
