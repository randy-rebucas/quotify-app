import {
  fetchEstimates,
  fetchRefinements,
  fetchRequirementsByGroup,
} from "@/lib/data";
import { tabMapping } from "../estimation/requirement/entities";
import EstimateTotalCost from "./estimate-total-cost";
import EstimateList from "./estimate-list";


export default async function ProjectSummary({ project }: { project: any }) {
  const requirements_groups = await fetchRequirementsByGroup();

  const refinements = await fetchRefinements();

  const estimates = await fetchEstimates(project._id);
  console.log(project);

  return (
    <>
      <div className="p-[40px] report-header">
        <h1 className="text-3xl">Project Estimation Report</h1>
      </div>

      <div className="report-content">
        <div className="estimates-grid">
          {Object.keys(estimates).map((estimateKey: any, index: number) => (
   
              <div key={index} className="estimate-column">
                <div className="estimate-header">
                  <h2>
                    <span className="font-latoblack">
                      {tabMapping.get(index)}:
                    </span>
                    &nbsp; {estimateKey}
                  </h2>
                  <p>This is a short description for this estimate.</p>
                </div>
                <div className="estimate-body">
                  <div className="section">
                    <h3>Project Parameters</h3>
                    <ul>
                      <li>Total Office Size: {project.rentableArea} sqft</li>
                      <li>Space Size: {project.spaceSize}</li>
                      <li>Remote Workers: {project.staffWorkRemotely}%</li>
                      <li>Workspace Assigned: {project.workspaceAssigned}%</li>
                    </ul>
                  </div>
                  {estimates[estimateKey].map((estimate: any, index: number) => (
                    <div className="section" key={index}>
                      <h3>{estimate.section}</h3>
                      {/* <ul>
                        <li>High Finish</li>
                        <li>Silver LEED Certification</li>
                        <li>Gold WELL Certification</li>
                      </ul> */}
                      {/* <EstimateList estimate={estimate} requirementGroups={requirements_groups} refinements={refinements} projectId={project._id}/> */}
                    </div>
                  ))}

                  {/* <div className="section">
                    <h3>Refinements</h3>
                    <ul>
                      <li>Open Floor Plan</li>
                      <li>Modern Reception Area</li>
                      <li>Custom Furniture</li>
                    </ul>
                  </div> */}
                </div>
                <EstimateTotalCost estimateGroups={estimates[estimateKey]}/>
              </div>
           
          ))}
        </div>
      </div>
    </>
  );
}
