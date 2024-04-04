export type AccordionProps = {
  title: string;
  value: number;
  color: string;
};

export const accordions: AccordionProps[] = [
  {
    title: "Individual spaces",
    value: 60,
    color: "#005A92",
  },
  {
    title: "Conference rooms",
    value: 20,
    color: "#3179A6",
  },
  {
    title: "Food",
    value: 10,
    color: "#6298BA",
  },
  {
    title: "Special spaces",
    value: 8,
    color: "#93B7CD",
  },
  {
    title: "Support",
    value: 2,
    color: "#C4D6E1",
  },
];
