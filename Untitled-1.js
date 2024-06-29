// Note: please restart the page if syntax highlighting works bad.
const estimates = [
    {
        "id": 0,
        "name": "Main estimation",
        "requirement": {
            "finish": "66604bca767efa358c8d5d0c"
        }
    },
    {
        "id": 1,
        "name": "High end estimate",
        "requirement": {
            "finish": "66604bca767efa358c8d5d0c"
        }
    }
]

type Estimate = {
    id: number;
    name: string;
    requirement: any | null;
}

const updateEstates = (stateId: number, requirementObj: any) => {
  // console.log(stateId);
  // console.log(requirementObj);
  const filtered = estimates.find((estimate: Estimate) =>
    estimate.id === stateId
  )
  const requirements = filtered.requirement;
  console.log(requirements);
  //  ? { ...estimate, requirementObj } : estimate
}

console.log(estimates)

console.log(updateEstates(0, {finish: '66604be6767efa358c8d5d17'}));

console.log(estimates)