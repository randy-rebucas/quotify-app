export type FormData = {
  selectedIds: number[];
};

export const INITIAL_DATA: FormData = {
  selectedIds: []
};

export type Amenities = {
  id: number;
  amenityName: string;
};

export const amenities: Amenities[] = [
  {
    id: 1,
    amenityName: "reception",
  },
  {
    id: 2,
    amenityName: "focus rooms",
  },
  {
    id: 3,
    amenityName: "pantry",
  },
  {
    id: 4,
    amenityName: "kitchen",
  },
  {
    id: 5,
    amenityName: "library",
  },
  {
    id: 6,
    amenityName: "training room",
  },
  {
    id: 7,
    amenityName: "workstations",
  },
  {
    id: 8,
    amenityName: "coffee point",
  },
];
