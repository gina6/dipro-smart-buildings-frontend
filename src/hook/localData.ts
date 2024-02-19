import {
  FloorsInterface,
  FloorInterface,
  RoomInterface,
  NotificationInterface,
} from "../hook/dataInterfaces";

const placeholderFloors: FloorsInterface[] = [
  {
    floorId: "floor0",
    floorLabel: "Erdgeschoss",
    floorNumber: "0",
  },
  {
    floorId: "floor1",
    floorLabel: "1. Stock",
    floorNumber: "1",
  },
  {
    floorId: "floor2",
    floorLabel: "2. Stock",
    floorNumber: "2",
  },
  {
    floorId: "floor3",
    floorLabel: "3. Stock",
    floorNumber: "3",
  },
  {
    floorId: "floor4",
    floorLabel: "4. Stock",
    floorNumber: "4",
  },
];

const placeholderFloor: FloorInterface[] = [
  {
    floorLabel: "4. Stock",
    rooms: [
      {
        roomId: "401",
        roomLabel: "DI-Space",
        plantCount: 3,
        plantImages: ["bild1.jpg", "bild2.jpg", "bild3.jpg"],
      },
      {
        roomId: "402",
        roomLabel: "Konferenzraum",
        plantCount: 0,
        plantImages: [],
      },
    ],
  },
];

const placeholderRoom: RoomInterface[] = [
  {
    roomId: "401",
    roomLabel: "DI-Space",
    floorLabel: "4. Stock",
    airTemp: 22,
    airHumidity: 60,
    airQuality: 85,
    plants: [
      {
        plantId: "401_01",
        plantSpecies: "Mexikanische Bergpalme",
        floorLabel: "4. Stock",
        roomId: "401",
        roomLabel: "DI-Space",
        potSize: "10cm",
        substrate: "Erde",
        waterNeed: "2",
        lightNeed: "Mittel",
        idealTemp: "18-25°C",
        plantDate: "2023-01-01",
        lastService: "2024-01-15",
        nextService: "2024-02-15",
        plantImage: "bild1.jpg",
        soilMoisture: 800,
      },
      {
        plantId: "401_02",
        plantSpecies: "Boston Farn",
        floorLabel: "4. Stock",
        roomId: "401",
        roomLabel: "DI-Space",
        potSize: "12cm",
        substrate: "Erde",
        waterNeed: "2",
        lightNeed: "Hell",
        idealTemp: "18-27°C",
        plantDate: "2023-01-01",
        lastService: "2024-01-15",
        nextService: "2024-02-15",
        plantImage: "bild2.jpg",
        soilMoisture: 80,
      },
      {
        plantId: "401_03",
        plantSpecies: "Diffenbachia gemischt",
        floorLabel: "4. Stock",
        roomId: "401",
        roomLabel: "DI-Space",
        potSize: "12cm",
        substrate: "Erde",
        waterNeed: "1",
        lightNeed: "Hell",
        idealTemp: "18-25°C",
        plantDate: "2023-01-01",
        lastService: "2024-01-15",
        nextService: "2024-02-15",
        plantImage: "bild3.jpg",
        soilMoisture: 620,
      },
    ],
  },
];

const placeholderNotifications: NotificationInterface[] = [
  {
    sensorid: "s1",
    plant: "Boston Farn",
    plantId: "401_02",
    type: "water",
    date: "2024-02-15",
    floor: "4. Stock",
    room: "DI-Space",
    roomId: "401",
    plantImage: "bild2.jpg",
  },
];

export {
  placeholderFloors,
  placeholderFloor,
  placeholderRoom,
  placeholderNotifications,
};
