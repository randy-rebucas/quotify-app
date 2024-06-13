type StimateRefinementData = {
  flooring?: string;
  furniture?: string;
  partitions?: string;
};

export type StimateData = {
  id: number;
  name: string;
  refinement:  any | null;
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
colorMapping.set(5, "#f2f6f8");
colorMapping.set(10, "#e6edf2");
colorMapping.set(15, "#d9e4eb");
colorMapping.set(20, "#ccdbe4");
colorMapping.set(25, "#bfd2dd");
colorMapping.set(30, "#b3c9d7");
colorMapping.set(35, "#a6c0d0");
colorMapping.set(40, "#99b7c9");
colorMapping.set(45, "#8caec2");
colorMapping.set(50, "#80a5bc");
colorMapping.set(55, "#739bb5");
colorMapping.set(60, "#6692ae");
colorMapping.set(65, "#5989a7");
colorMapping.set(70, "#4d80a1");
colorMapping.set(75, "#40779a");
colorMapping.set(80, "#336e93");
colorMapping.set(85, "#26658c");
colorMapping.set(90, "#1a5c86");
colorMapping.set(95, "#0d537f");
colorMapping.set(100, "#004a78");