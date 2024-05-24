export type Address = {
    place: string;
    location: google.maps.LatLng | undefined
}

export type ProjectData = {
    spaceName: string
    floorPlans: any[]
    hasFloorPlan: boolean
    address: Address
    hasAddress: boolean
    approximateSize: string
    rentableArea: string
    isBaseOnHeadCount: boolean
    targetHeadCount: string
    averageAttendance: string
    assignedSeat: string
}

export const INITIAL_DATA: ProjectData = {
    spaceName: "",
    floorPlans: [],
    hasFloorPlan: false,
    address: {
        place: '',
        location: undefined
    },
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