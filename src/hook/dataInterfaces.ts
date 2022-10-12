export interface FloorsInterface {
    floorId: string;
    floorLabel: string;
    floorNumber: string;
}

export interface FloorInterface {
    floorLabel: string;
    rooms: Array<RoomsInterface>;
}

export interface RoomsInterface {
    room: string;
    roomLabel: string;
    plantCount: number;
}

export interface RoomInterface {
    roomTemp: number;
    roomHumidity: number;
    roomCo2: number;
    roomPlants: Array<PlantInterface>;
}

export interface PlantInterface {
    plant: string;
    plantSpecies: string;
    potSize: string;
    substrat: string;
    waterNeed: string;
    lightNeed: string;
    plantDate: string;
    lastService: string;
    nextService: string;
    plantImage: string;
}

