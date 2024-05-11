type StimateRequirementData = {
  id: number;
  finish: string;
  sustainabilityCertification: string;
  mepFeatures: string;
  buildingCondition: string;
  technology: string;
  furniture: string;
};

type StimateData = {
  name: string;
  requirements: StimateRequirementData[]
}

export type RequirementData = {
  stimates: StimateData[];
}

export const INITIAL_DATA: RequirementData = {
  stimates: [],
}

// type FormData = {
//     stimates: any[];
// };

// const INITIAL_DATA: FormData = {
//     stimates: []
// };
