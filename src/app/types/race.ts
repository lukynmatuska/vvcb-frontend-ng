import { Category } from "./category";
import { Reservation } from "./reservation";
import { Season } from "./season";

export interface Race {
    "id"?: string,
    "name"?: string,
    "season"?: Season,
    "categories"?: Category[],
    "reservations"?: Reservation[]
}
