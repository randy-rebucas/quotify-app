interface Address {
  line1: string;
  line2: string;
  state: string;
  zipCode: string;
}

export type FileProps<T> = {
  id: number;
  title: string;
  address: T;
};

export const files: FileProps<Address>[] = [
  {
    id: 1,
    title: "MMoser",
    address: {
      line1: "510 W Hastings St.",
      line2: "Suite 1300",
      state: "Vancouver, BC",
      zipCode: "V6B 1L8",
    },
  },
  {
    id: 2,
    title: "Alpha",
    address: {
      line1: "510 W Hastings St.",
      line2: "Suite 1300",
      state: "Vancouver",
      zipCode: "V6B",
    },
  },
  {
    id: 3,
    title: "Beta",
    address: {
      line1: "510 W Hastings St.",
      line2: "Suite 1300",
      state: "Vancouver",
      zipCode: "V6B",
    },
  },
  {
    id: 4,
    title: "Gamma",
    address: {
      line1: "510 W Hastings St.",
      line2: "Suite 1300",
      state: "Vancouver",
      zipCode: "V6B",
    },
  },
  {
    id: 5,
    title: "MMoser",
    address: {
      line1: "510 W Hastings St.",
      line2: "Suite 1300",
      state: "Vancouver, BC",
      zipCode: "V6B 1L8",
    },
  },
  {
    id: 6,
    title: "Alpha",
    address: {
      line1: "510 W Hastings St.",
      line2: "Suite 1300",
      state: "Vancouver",
      zipCode: "V6B",
    },
  },
  {
    id: 7,
    title: "Beta",
    address: {
      line1: "510 W Hastings St.",
      line2: "Suite 1300",
      state: "Vancouver",
      zipCode: "V6B",
    },
  },
  {
    id: 8,
    title: "Gamma",
    address: {
      line1: "510 W Hastings St.",
      line2: "Suite 1300",
      state: "Vancouver",
      zipCode: "V6B",
    },
  },
];
