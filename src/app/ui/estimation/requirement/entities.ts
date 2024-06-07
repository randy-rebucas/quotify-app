type StimateRequirementData = {
  finish?: {
    label: string;
    value: string
  };
  sustainabilityCertification?: {
    label: string;
    value: string
  };
  mepFeatures?: {
    label: string;
    value: string
  };
  buildingCondition?: {
    label: string;
    value: string
  };
  technology?: {
    label: string;
    value: string
  };
  furniture?: {
    label: string;
    value: string
  };
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
        finish: {
          label: "",
          value: "",
        },
        sustainabilityCertification: {
          label: "",
          value: "",
        },
        mepFeatures: {
          label: "",
          value: "",
        },
        buildingCondition: {
          label: "",
          value: "",
        },
        technology: {
          label: "",
          value: "",
        },
        furniture: {
          label: "",
          value: "",
        },
      },
    },
  ],
};

export let menuMapping = new Map<string, string>();
menuMapping.set("finish and certifications", "finish");
menuMapping.set("MEP features", "mepFeatures");
menuMapping.set("base building conditions", "buildingCondition");
menuMapping.set("technology", "technology");
menuMapping.set("furniture and furnishing", "furniture");
menuMapping.set("review", "sustainabilityCertification");

export let tabMapping = new Map<number, string>();
tabMapping.set(0, "A");
tabMapping.set(1, "B");
tabMapping.set(2, "C");
tabMapping.set(3, "D");

export let titleMapping = new Map<number, string>();
titleMapping.set(0, "Main estimation");
titleMapping.set(1, "High end estimate");
titleMapping.set(2, "Low end estimate");
titleMapping.set(3, "Not as env. friendly");
