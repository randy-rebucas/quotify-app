type StimateRequirementData = {
  finish: string;
  sustainabilityCertification: string;
  mepFeatures: string;
  buildingCondition: string;
  technology: string;
  furniture: string;
};

export type StimateData = {
  id: number;
  name: string;
  requirement: StimateRequirementData;
};

export type RequirementData = {
  stimates: StimateData[];
};

export const INITIAL_DATA: RequirementData = {
  stimates: [
    {
      id: 0,
      name: "Main estimation",
      requirement: {
        finish: "",
        sustainabilityCertification: "",
        mepFeatures: "",
        buildingCondition: "",
        technology: "",
        furniture: "",
      },
    },
  ],
};

export let tabMapping = new Map<number, string>();
//1. Add entries
tabMapping.set(0, 'A');
tabMapping.set(1, 'B');
tabMapping.set(2, 'C');
tabMapping.set(3, 'D');