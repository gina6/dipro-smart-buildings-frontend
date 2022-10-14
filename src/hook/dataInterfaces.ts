export interface FloorsInterface {
    floorId: string;
    floorLabel: string;
    floorNumber: string;
}

export interface FloorInterface {
    floorLabel: string;
    rooms: Array<RoomsInterface>;
}

interface RoomsInterface {
    roomId: string;
    roomLabel: string;
    plantCount: number;
}

export interface RoomInterface {
    roomLabel: string;
    floorLabel: string;
    roomTemp: number;
    roomHumidity: number;
    roomCo2: number;
    plants: Array<PlantInterface>;
}

export interface PlantInterface {
    plantId: string;
    plantSpecies: string;
    floorLabel: string;
    roomLabel: string;
    potSize: string;
    substrate: string;
    waterNeed: string;
    lightNeed: string;
    plantDate: string;
    lastService: string;
    nextService: string;
    plantImage: string;
}

