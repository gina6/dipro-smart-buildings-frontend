import React from "react";
import NotificationAlert from "../UI/NotificationAlert";
import { useApiGet } from "../../hook/useApiHook";
import { NotificationInterface } from "../../hook/dataInterfaces";
import CheckIcon from "../../icons/Check.svg";
import Container from "../UI/Container";
import Header from "../UI/Header";
export default function Notifications() {
  const notifications =
    useApiGet<NotificationInterface[]>("/notifications").data;

  return (
    <>
      <Header headerTitle={"Benachrichtigungen"} />
      <div className="mt-6">
        <Container>
          {notifications && notifications?.length > 1 ? (
            <>
              <h3 className="text-green pb-2 text-base">
                {notifications[0].floor}
              </h3>
              <div className="md:flex md:gap-5">
                {notifications?.map(
                  (notification: NotificationInterface, index: number) => (
                    <NotificationAlert
                      key={index}
                      roomLabel={notification.room}
                      roomID={notification.roomId}
                      plantID={notification.plantId}
                      plantLabel={notification.plant}
                      plantImg={notification.plantImage}
                    />
                  )
                )}
              </div>
            </>
          ) : (
            <div className="flex h-[80vh] justify-center items-center	flex-col">
              <div className="">
                <img src={CheckIcon} alt="Everything okay" />
              </div>
              <div className=" text-3xl text-green font-bold	pt-3">
                Alles in Ordnung!
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
