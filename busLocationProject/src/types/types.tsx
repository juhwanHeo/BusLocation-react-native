
export interface IStation {
    id: string,
    facilityId: string,
    stationCode: string,
    stationName: string,
    lat: number,
    lon: number,
}

export interface ITimetable {
    id: string,
    facilityId: string,
    timeRowList: Array<ITimeRow>,
    title?: string,
    contents?: string,
    inputDate: Date,
    updateDate: Date
}

export interface ITimeRow {
    id: string,
    facilityId: string,
    order: number,
    startTime: string,
    startTimeMillis: bigint,
    endTime: string,
    endTimeMillis: bigint,
    timeList: Array<ITime>
}

export interface ITime {
    id: string,
    facilityId: string,
    order: number,
    time: string,
    stationId: string,
    station: IStation
}
