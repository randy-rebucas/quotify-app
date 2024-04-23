import { ProjectCustomSpaceData } from "./steps/area-defination";


export type FormData = {
  selectedAmenityIds: string[];
  selectedCustomSpaces: ProjectCustomSpaceData[];
};

export const INITIAL_DATA: FormData = {
  selectedAmenityIds: [],
  selectedCustomSpaces: [],
};
