import PieChartDataPrint from "@/components/estimation/pie-chart-data-print";
import Chart from "@/components/print/chart";
import PrintButton from "@/components/print/print-button";
import ProjectDefinition from "@/components/print/project-definition";
import {
  fetchAmenities,
  fetchCustomSpacesByGroup,
  fetchProject,
  fetchProjectAmenitiesByProject,
  fetchProjectCustomSpacesByProject,
} from "@/lib/data";
import { common } from "@/lib/mock";

export default async function PrintPage({
  params,
}: {
  params: { id: string; type: string };
}) {
  const id = params.id;

  const project = await fetchProject(id);

  if (params.type === "estimate-summary") {
    return (
      <>
        <div className="report-header">
          <h1>Project Estimation Report</h1>
        </div>

        <div className="report-content">
          <div className="estimates-grid">
            <div className="estimate-column">
              <div className="estimate-header">
                <h2>A: Main Estimate</h2>
                <p>This is a short description for this estimate.</p>
              </div>
              <div className="estimate-body">
                <div className="section">
                  <h3>Project Parameters</h3>
                  <ul>
                    <li>Total Office Size: 10,000 sqft</li>
                    <li>Staff Size: 120</li>
                    <li>Remote Workers: 300</li>
                    <li>Workspace Assigned: 20%</li>
                  </ul>
                </div>
                <div className="section">
                  <h3>Requirements</h3>
                  <ul>
                    <li>High Finish</li>
                    <li>Silver LEED Certification</li>
                    <li>Gold WELL Certification</li>
                  </ul>
                </div>
                <div className="section">
                  <h3>Refinements</h3>
                  <ul>
                    <li>Open Floor Plan</li>
                    <li>Modern Reception Area</li>
                    <li>Custom Furniture</li>
                  </ul>
                </div>
              </div>
              <div className="total-cost">Total Cost: $600,000</div>
            </div>

            <div className="estimate-column">
              <div className="estimate-header">
                <h2>B: High-End Estimate</h2>
                <p>This is a short description for this estimate.</p>
              </div>
              <div className="estimate-body">
                <div className="section">
                  <h3>Project Parameters</h3>
                  <ul>
                    <li>Total Office Size: 10,000 sqft</li>
                    <li>Staff Size: 120</li>
                    <li>Remote Workers: 300</li>
                    <li>Workspace Assigned: 20%</li>
                  </ul>
                </div>
                <div className="section">
                  <h3>Requirements</h3>
                  <ul>
                    <li>Premium Finishes</li>
                    <li>Platinum LEED Certification</li>
                    <li>Advanced WELL Certification</li>
                  </ul>
                </div>
                <div className="section">
                  <h3>Refinements</h3>
                  <ul>
                    <li>Executive Suites</li>
                    <li>Luxury Reception Area</li>
                    <li>High-End Furniture</li>
                  </ul>
                </div>
              </div>
              <div className="total-cost">Total Cost: $900,000</div>
            </div>

            <div className="estimate-column">
              <div className="estimate-header">
                <h2>C: Low Estimate</h2>
                <p>This is a short description for this estimate.</p>
              </div>
              <div className="estimate-body">
                <div className="section">
                  <h3>Project Parameters</h3>
                  <ul>
                    <li>Total Office Size: 10,000 sqft</li>
                    <li>Staff Size: 120</li>
                    <li>Remote Workers: 300</li>
                    <li>Workspace Assigned: 20%</li>
                  </ul>
                </div>
                <div className="section">
                  <h3>Requirements</h3>
                  <ul>
                    <li>Standard Finishes</li>
                    <li>Basic LEED Certification</li>
                    <li>Standard WELL Certification</li>
                  </ul>
                </div>
                <div className="section">
                  <h3>Refinements</h3>
                  <ul>
                    <li>Functional Office Space</li>
                    <li>Basic Reception Area</li>
                    <li>Standard Furniture</li>
                  </ul>
                </div>
              </div>
              <div className="total-cost">Total Cost: $400,000</div>
            </div>

            <div className="estimate-column">
              <div className="estimate-header">
                <h2>D: Not as Environmentally Friendly</h2>
                <p>This is a short description for this estimate.</p>
              </div>
              <div className="estimate-body">
                <div className="section">
                  <h3>Project Parameters</h3>
                  <ul>
                    <li>Total Office Size: 10,000 sqft</li>
                    <li>Staff Size: 120</li>
                    <li>Remote Workers: 300</li>
                    <li>Workspace Assigned: 20%</li>
                  </ul>
                </div>
                <div className="section">
                  <h3>Requirements</h3>
                  <ul>
                    <li>Cost-Effective Finishes</li>
                    <li>No LEED Certification</li>
                    <li>Basic WELL Certification</li>
                  </ul>
                </div>
                <div className="section">
                  <h3>Refinements</h3>
                  <ul>
                    <li>Standard Office Space</li>
                    <li>Simple Reception Area</li>
                    <li>Economical Furniture</li>
                  </ul>
                </div>
              </div>
              <div className="total-cost">Total Cost: $300,000</div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <ProjectDefinition project={project} />;
}
