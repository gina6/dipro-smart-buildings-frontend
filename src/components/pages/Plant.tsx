import React from "react";
import BackLink from "../UI/BackLink";
import { useParams } from "react-router-dom";
import {
  RoomInterface,
  PlantInterface,
  NotificationInterface,
} from "../../hook/dataInterfaces";
import { useApiGet } from "../../hook/useApiHook";
import Container from "../UI/Container";
import Header from "../UI/Header";
import RoomSensorData from "../UI/RoomSensorData";
import WarningWater from "../UI/WarningWater";
import ContentBox from "../UI/ContentBox";
import TableRow from "../UI/TableRow";
import { ReactComponent as Schattig } from "../../icons/Schattig.svg";
import { ReactComponent as Halbschattig } from "../../icons/Halbschattig.svg";
import { ReactComponent as Sonne } from "../../icons/Sonne.svg";
import { ReactComponent as Temperatur } from "../../icons/Temperatur.svg";
import { ReactComponent as Substrat } from "../../icons/Substrat.svg";
import { ReactComponent as Topfdurchmesser } from "../../icons/Topfdurchmesser.svg";
import { ReactComponent as Wassertropf } from "../../icons/Wassertropf.svg";
import { ReactComponent as Kalender } from "../../icons/Kalender.svg";

function formatDate(date: string | undefined) {
  return date ? new Date(date).toLocaleDateString() : "";
}

function getLightIcon(lightNeed: string | undefined) {
  switch (lightNeed) {
    case "Hell":
      return <Sonne />;
    case "Schatten":
      return <Schattig />;
    default:
      return <Halbschattig />;
  }
}

export default function PlantDetail() {
  const { plantID, roomID } = useParams();
  const plantData = useApiGet<PlantInterface>(`/plants/${plantID}`).data;
  const roomData = useApiGet<RoomInterface>(`/rooms/${roomID}`).data;
  const warningData = useApiGet<NotificationInterface[]>("/notifications").data;
  const plantWarning = warningData?.find(
    (warning) => warning.plantId === plantID
  );
  let waterNeed = "";
  if (plantData) {
    switch (parseInt(plantData?.waterNeed)) {
      case 1:
        waterNeed = "Wenig";
        break;
      case 2:
        waterNeed = "Mittel";
        break;
      case 3:
        waterNeed = "Viel";
        break;
    }
  }

  return (
    <>
      <Header headerTitle={plantData?.plantSpecies} headerSubtitle={plantData?.roomLabel}/>
      <BackLink />
      <Container>
        <div className="mx-auto max-w-3xl">
          <ContentBox>
            {plantData && (
              <img
                src={`${process.env.REACT_APP_BACKEND_API}${plantData.plantImage}`}
                alt="Plant in the room"
                className="rounded-2xl"
              />
            )}
            <RoomSensorData
              temp={roomData?.airTemp}
              soilMoisture={plantData?.soilMoisture}
              soilMoistureWarning={Boolean(plantWarning)}
              humidity={roomData?.airHumidity}
            />
          </ContentBox>

          {plantWarning && (
            <WarningWater date={`${plantWarning?.date}`}></WarningWater>
          )}

          <ContentBox>
            <div className="flex items-center justify-center py-5">
              <h2>ID: {plantID}</h2>
              <p className="text-xs pl-2">Pflanzenprofil</p>
            </div>
            <div className="flex flex-col">
              <TableRow>
                <p>Ideale Temperatur</p>
                <p className="flex text-mediumGreen">
                  <span className="mr-4">{plantData?.idealTemp}</span>
                  <Temperatur />
                </p>
              </TableRow>
              <TableRow>
                <p>Lichtverhältnis</p>
                <p className="flex text-mediumGreen">
                  <span className="mr-4">{plantData?.lightNeed}</span>
                  {getLightIcon(plantData?.lightNeed)}
                </p>
              </TableRow>
              <TableRow>
                <p>Substrat</p>
                <p className="flex text-mediumGreen">
                  <span className="mr-4">{plantData?.substrate}</span>
                  <Substrat />
                </p>
              </TableRow>
              <TableRow>
                <p>Topfgrösse</p>
                <p className="flex text-mediumGreen">
                  <span className="mr-4">{plantData?.potSize}</span>
                  <Topfdurchmesser />
                </p>
              </TableRow>
              <TableRow>
                <p>Wasserbedarf</p>
                <p className="flex text-mediumGreen">
                  <span className="mr-4">{waterNeed}</span>
                  <Wassertropf />
                </p>
              </TableRow>
              <TableRow>
                <p>Kaufdatum</p>
                <p className="flex text-mediumGreen">
                  <span className="mr-4">
                    {formatDate(plantData?.plantDate)}
                  </span>
                  <Kalender />
                </p>
              </TableRow>
            </div>
          </ContentBox>

          <ContentBox>
            <div className="flex flex-col items-center">
              <h2 className="py-5">Pflege</h2>
              <p>Letzter Pflegetermin</p>
              <p className="text-mediumGreen">
                {formatDate(plantData?.lastService)}
              </p>
              <div className="h-px w-1/3 my-1 rounded-full bg-lightGrey"></div>
              <p>
                <b>Nächster Pflegetermin</b>
              </p>
              <p className="text-mediumGreen">
                {formatDate(plantData?.nextService)}
              </p>
            </div>
          </ContentBox>
        </div>
      </Container>
    </>
  );
}
