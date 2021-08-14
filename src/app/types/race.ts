import { RaceCategory } from "./race-category";
import { Reservation } from "./reservation";
import { Season } from "./season";

export interface Race {
    "id": string,
    "date"?: Date,
    "name"?: string,
    "season"?: Season,
    "categories"?: RaceCategory[],
    "reservations"?: Reservation[]
}
