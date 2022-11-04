import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { generatePath, useNavigate } from "react-router-dom";
import { useApiGet } from "../../hook/useApiHook";
import { PlantInterface } from "../../hook/dataInterfaces";
import { ReactComponent as Close } from "../../icons/Close.svg";
import PrimaryButton from "./PrimaryButton";

interface OverlayProps {
  closeSearch: () => void;
}

function stopPropagation(e: React.SyntheticEvent) {
  e.stopPropagation();
}

export default function PlantSearch({ closeSearch }: OverlayProps) {
  const [hasError, setHasError] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [route, setRoute] = useState<string | null>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const { data, error } = useApiGet<PlantInterface>(route);
  const navigate = useNavigate();

  function searchPlantPage() {
    setRoute(`/plants/plant${searchInput.current?.value}`);
  }

  useEffect(() => {
    if (data) {
      setHasError(false);
      navigate(
        generatePath("/rooms/:roomID/:plantID", {
          roomID: data.roomId,
          plantID: data.plantId,
        })
      );
      closeSearch();
    } else if (error) {
      setHasError(true);
    }
  }, [data, error, navigate, closeSearch]);

  useEffect(() => {
    searchInput.current?.focus();
  }, []);

  function onType(e: React.KeyboardEvent) {
    const isEmpty = !searchInput.current?.value;
    setEnabled(!isEmpty);
    setHasError(false);
    setRoute(null);
    if (e.key === "Enter" && !isEmpty) {
      searchPlantPage();
    }
  }

  return createPortal(
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-[black]/40 z-40"
      onClick={closeSearch}
    >
      <div
        className="absolute bottom-0 w-full pb-10 bg-white rounded-t-2xl flex flex-col items-center shadow-top"
        onClick={stopPropagation}
      >
        <div onClick={closeSearch} className="p-5 self-end cursor-pointer">
          <Close />
        </div>
        <h2 className="mt-4">Pflanzen-ID eingeben</h2>
        <input
          ref={searchInput}
          onKeyUp={onType}
          type="text"
          name="searchInput"
          autoComplete="off"
          className="p-2 mt-8 border-b-2 border-b-darkGrey rounded-sm outline-none text-center"
          placeholder="000_00"
        />
        <p className="text-red mt-2 h-[1em]">
          {hasError && <b>Pflanze nicht gefunden!</b>}
        </p>
        <PrimaryButton
          onClick={searchPlantPage}
          disabled={!enabled}
          className="mt-6"
        >
          Suchen
        </PrimaryButton>
      </div>
    </div>,
    document.body
  );
}
