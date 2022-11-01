import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Chevron } from "../../icons/Back_Button.svg";

export default function BackLink() {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center mb-8 text-white stroke-white bg-back-button bg-no-repeat"
      onClick={() => navigate(-1)}
    >
      <Chevron className="mr-3"></Chevron>
      <p>Zurück</p>
    </div>
  );
}
