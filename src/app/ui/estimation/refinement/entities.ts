type StimateRefinementData = {
  flooring?: string;
  furniture?: string;
  partitions?: string;
};

export type StimateData = {
  id: number;
  name: string;
  refinement:  {} | null;
};

export type RefinementData = {
  stimates: StimateData[];
};

export const INITIAL_DATA: RefinementData = {
  stimates: [
    {
      id: 0,
      name: "Main estimation",
      refinement: new Object(),
    },
  ],
};

export let menuMapping = new Map<string, string>();
menuMapping.set("flooring", "flooring");
menuMapping.set("furniture", "furniture");
menuMapping.set("partitions", "partitions");

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
