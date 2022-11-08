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
          {notifications && notifications?.length >= 1 ? (
            <>
              <h3 className="pb-2 text-base text-green">
                {notifications[0].floor}
              </h3>
              <div className="md:grid-col-2 md:grid md:grid-flow-col md:gap-6">
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
            <div className="flex h-[80vh] flex-col items-center	justify-center">
              <div className="">
                <img src={CheckIcon} alt="Everything okay" />
              </div>
              <div className=" pt-3 text-3xl font-bold	text-green">
                Alles in Ordnung!
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
