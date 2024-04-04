export type DataItem = {
  name: string;
  value: number;
};

export type PieChartProps = {
  data: DataItem[];
  width: number;
  height: number;
  colors: string[]
};

export type PieChartDataProps = {
  data: DataItem[];
  colors: string[]
};

export const pieData: DataItem[] = [
  { name: "Individual spaces", value: 60 },
  { name: "Conference rooms", value: 20 },
  { name: "Food", value: 10 },
  { name: "Special spaces", value: 3 },
  { name: "Support", value: 2 },
];

export const pieColors = [
  '#005A92', '#3179A6', '#6298BA', '#93B7CD', '#C4D6E1'
];