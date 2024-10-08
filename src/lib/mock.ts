export const common = {
  company: "Mmoser",
  appName: "quotify",
  currentDate: new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(Date.now())
    .toString(),
};

export const columnData = [
  {
    column:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    column:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    column:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export let pathMapping = new Map<string | undefined, string>();
pathMapping.set('0', "project-definition");
pathMapping.set('1', "estimate-summary");

export let sourceMapping = new Map<string | undefined, string>();
sourceMapping.set('0', "Project Definition");
sourceMapping.set('1', "Estimate Summary");