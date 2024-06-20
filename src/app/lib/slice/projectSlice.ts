import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Address = {
  place: string;
  location: google.maps.LatLng | undefined;
};

type PartialData = {
  spaceName: string;
  floorPlans: any[];
  hasFloorPlan: boolean;
  address: Address;
  hasAddress: boolean;
  approximateSize: string;
  rentableArea: string;
  isBaseOnHeadCount: boolean;
  targetHeadCount: string;
  averageAttendance: string;
  assignedSeat: string;
};

// Define a type for the slice state
interface State {
  projectInformation: PartialData;
}

// Define the initial state using that type
const initialState: State = {
  projectInformation: {
    spaceName: "",
    floorPlans: [],
    hasFloorPlan: false,
    address: {
      place: "",
      location: undefined,
    },
    hasAddress: false,
    approximateSize: "3000",
    rentableArea: "3000",
    isBaseOnHeadCount: false,
    targetHeadCount: "",
    averageAttendance: "",
    assignedSeat: "30",
  },
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateFields: (state, action: PayloadAction<Partial<PartialData>>) => {
      return {
        projectInformation: { ...state.projectInformation, ...action.payload },
      };
    },
  },
});

export const { updateFields } = projectSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const projectInformation = (state: RootState) =>
  state.project.projectInformation;

export default projectSlice.reducer;
