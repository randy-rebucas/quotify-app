export type FormData = {
  finishLevel: string;
  finishLevelOfLeed: string;
  finishCertificationRequire: string;
  mepFinishLevel: string;
  baseBuildingConditionFinishLevel: string;
  technologyFinishLevel: string;
  furnishingFinishLevel: string;
  reviewFinishLevel: string;
};

export const INITIAL_DATA: FormData = {
  finishLevel: "",
  finishLevelOfLeed: "",
  finishCertificationRequire: "",
  mepFinishLevel: "",
  baseBuildingConditionFinishLevel: "",
  technologyFinishLevel: "",
  furnishingFinishLevel: "",
  reviewFinishLevel: "",
};

type MenuData = {
  num: number;
  title: string;
};

export const menus: MenuData[] = [
  {
    num: 0,
    title: "finish and certifications",
  },
  {
    num: 1,
    title: "MEP features",
  },
  {
    num: 2,
    title: "base building conditions",
  },
  {
    num: 3,
    title: "technology",
  },
  {
    num: 4,
    title: "furniture and furnishing",
  },
  {
    num: 5,
    title: "review",
  },
];
