import { Race } from "./race";
import { Team } from "./team";

export interface Result {
    "id"?: string,
    "time"?: {
        "left"?: number,
        "right"?: number,
        "final"?: number
    },
    "team"?: Team,
    "race"?: Race,
    "date"?: Date,
    "media"?: {
        
    }
}
