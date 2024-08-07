export type StimateData = {
  id: number;
  name: string;
  requirement: any | null;
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
