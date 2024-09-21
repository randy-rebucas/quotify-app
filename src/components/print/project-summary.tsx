'use client';

import { tabMapping } from "../estimation/requirement/entities";
import EstimateTotalCost from "./estimate-total-cost";
import EstimateList from "./estimate-list";
import { ReactNode, useEffect } from "react";
import { useEstimateSummaryStore } from "@/lib/store/estimateSummaryStore";
import { convertToTitleCase } from "../estimation/estimate-summary/accordions";
import PrintButton from "./print-button";


export default function ProjectSummary({ project, requirements, refinements }: { project: any, requirements: any[], refinements: any[] }) {

  const estimates = useEstimateSummaryStore((state) => state.estimates);
  const getProjectEstimates = useEstimateSummaryStore(
    (state) => state.getProjectEstimates
  );

  useEffect(() => {
    if (project._id) {
      getProjectEstimates(project._id);
    }
  }, [getProjectEstimates, project]);

  return (
    <>
      <div className="p-[40px] report-header">
        <h1 className="text-[30px]">Project Estimation Report</h1>
        <PrintButton inverted={false} />
      </div>

      <div className="report-content">
        <div className="estimates-grid">
          {Object.keys(estimates).map((estimateKey: any, index: number) => (
            <Column key={index} estimateGroups={estimates[estimateKey]} requirements={requirements} refinements={refinements} projectId={project._id}>
              <div className="estimate-header">
                <h2 className="font-lato text-[24px]">
                  {tabMapping.get(index)}:
                  &nbsp;{estimateKey}
                </h2>
                <p className="font-lato text-[14px]">This is a short description for this estimate.</p>
              </div>
              <div className="estimate-body">
                <div className="section">
                  <h3 className="font-latobold text-2xl">Project Parameters</h3>
                  <ul>
                    <li>Total Office Size: {project.rentableArea} sqft</li>
                    <li>Space Size: {project.spaceSize}</li>
                    <li>Remote Workers: {project.staffWorkRemotely}%</li>
                    <li>Workspace Assigned: {project.workspaceAssigned}%</li>
                  </ul>
                </div>
              </div>
            </Column>
          ))}
        </div>
      </div>
    </>
  );
}


export function Column({ estimateGroups, requirements, refinements, projectId, children }: {
  estimateGroups: any[];
  requirements: any[];
  refinements: any[];
  projectId: string;
  children: ReactNode;
}) {
  return (
    <div className="estimate-column">
      {children}
      {estimateGroups.map((estimate: any, index: number) => (
        <div className="section" key={estimate._id}>
          <h3 className="font-latobold text-2xl">{convertToTitleCase(estimate.section)}</h3>
          <EstimateList estimate={estimate} requirementGroups={requirements} refinements={refinements} projectId={projectId} />
        </div>
      ))}
      <EstimateTotalCost estimateGroups={estimateGroups} />
    </div>
  )
}
