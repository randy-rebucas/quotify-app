type Address = {
    formated_address: string
    location: any
}

export type FormData = {
    spaceName: string
    floorPlans: any[]
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
    floorPlans: [],
    hasFloorPlan: false,
    address: '',
    hasAddress: false,
    approximateSize: '3000',
    rentableArea: '3000',
    isBaseOnHeadCount: false,
    targetHeadCount: "",
    averageAttendance: "",
    assignedSeat: "30"
}

export type LatLong = {
    coordinates: number[]
}