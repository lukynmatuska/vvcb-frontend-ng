export interface ResultRequest {
    "time"?: {
        "left"?: number,
        "right"?: number,
        "final"?: number
    },
    "team"?: string,
    "race"?: string,
    "date"?: Date,
    "media"?: {
        "youtube": string
    }
}
