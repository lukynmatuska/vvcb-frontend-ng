import { Category } from "./category";
import { District } from "./district";

export interface Team {
    "id"?: string,
    "name"?: string,
    "category"?: Category,
    "district"?: District
}
