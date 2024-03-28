export type FormData = {
    spaceName: string
    hasFloorPlan: boolean
    address: string
    hasAddress: boolean
    approximateSize: string
    rentableArea: string
    isBaseOnHeadCount: boolean
    targetHeadCount: string
    averageAttendance: string
    assignedSeat: string
}

export const INITIAL_DATA: FormData = {
    spaceName: "",
    hasFloorPlan: false,
    address: "",
    hasAddress: false,
    approximateSize: '3000',
    rentableArea: '3000',
    isBaseOnHeadCount: false,
    targetHeadCount: "",
    averageAttendance: "",
    assignedSeat: "30"
}
