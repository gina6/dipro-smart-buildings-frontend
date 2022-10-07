export interface Floors {
    floorId: string;
    floorLabel: string;
}

export interface Floor {
    floorLabel: string;
    rooms: Array<Rooms>;
}

export interface Rooms {
    roomId: string;
    roomLabel: string;
    plantCount: number;
}

export interface Room {
    roomTemp: number;
    roomHumidity: number;
    roomCo2: number;
    roomPlants: Array<Plant>;
}

export interface Plant {
    plantSpecies: string;
    potSize: string;
    substrat: string;
    waterNeed: string;
    lightNeed: string;
    plantDate: string;
    lastService: string;
    nextService: string;
}

