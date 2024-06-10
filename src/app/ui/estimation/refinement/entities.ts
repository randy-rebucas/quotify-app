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

export let colorMapping = new Map<number, string>();
colorMapping.set(10, "#dbe6ed");
colorMapping.set(20, "#C4D6E1");
colorMapping.set(30, "#93B7CD");
colorMapping.set(40, "#6298BA");
colorMapping.set(50, "#3179A6");
colorMapping.set(60, "#3a91c7");
colorMapping.set(70, "#0377bf");
colorMapping.set(80, "#218bcd");
colorMapping.set(90, "#005A92");
colorMapping.set(100, "#004a78");