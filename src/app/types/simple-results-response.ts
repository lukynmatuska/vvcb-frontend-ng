export interface SimpleResult {
    district: String,
    final_time: Number,
    left_time: Number,
    media: String,
    place: String,
    right_time: Number,
    team: String
}

export interface SimpleResultResponse {
    dorostenci?: [SimpleResult],
    muzi?: [SimpleResult],
    veterani?: [SimpleResult],
    zeny?: [SimpleResult]
}
