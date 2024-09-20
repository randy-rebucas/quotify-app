import PieChartDataPrint from "@/components/estimation/pie-chart-data-print";
import Chart from "@/components/print/chart";
import PrintButton from "@/components/print/print-button";
import { fetchAmenities, fetchCustomSpacesByGroup, fetchProject, fetchProjectAmenitiesByProject, fetchProjectCustomSpacesByProject } from "@/lib/data";
import { common } from "@/lib/mock";

export default async function PrintPage({ params }: { params: { id: string, type: string } }) {
    const id = params.id;

    const project = await fetchProject(id);

    // Get all Amenities 
    const amenities = await fetchAmenities();
    // Get all custom spaces 
    const custom_spaces = await fetchCustomSpacesByGroup();
    // Get all project amenitties
    const selected_amenities = await fetchProjectAmenitiesByProject(id);
    // Get all project custom spaces 
    const selected_custom_spaces = await fetchProjectCustomSpacesByProject(id);

    const groupItemRestById = (collector: any, item: any) => {
        const { categoryName, ...rest } = item;
        const groupList = collector[categoryName] || (collector[categoryName] = []);

        groupList.push(rest);

        return collector;
    }
    const breakdowns = Object.entries(selected_amenities.reduce(groupItemRestById, {}));

    const areaBreakdown = { selectedAmenityIds: selected_amenities.map((amenity: any) => amenity._id) };

    const slice = 100 / areaBreakdown.selectedAmenityIds.length;

    if (params.type === 'estimate-summary') {
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
                            <div className="total-cost">
                                Total Cost: $600,000
                            </div>
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
                            <div className="total-cost">
                                Total Cost: $900,000
                            </div>
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
                            <div className="total-cost">
                                Total Cost: $400,000
                            </div>
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
                            <div className="total-cost">
                                Total Cost: $300,000
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="forPrint p-[40px] w-full">
            <header>
                <h1 className="font-lato text-3xl">Project Definition Report</h1>
                <PrintButton />
            </header>

            <section className="project-info">
                <h2 className="mt-10 text-2xl">Project Information</h2>
                <div className="bg-black h-[1px] mb-30"></div>
                <p className="font-light text-[14px]">Prepared by {common.company} using {common.appName}. <br />Date: {common.currentDate}</p>
            </section>
            <section className="area-distribution">
                <h2 className="mt-10 text-2xl">Area Distribution</h2>
                <div className="bg-black h-[1px] mb-30"></div>
                <div className="items-center flex gap-6 justify-center my-5">
                    <Chart width={450} height={450} breakdowns={breakdowns} slice={slice} />
                    <PieChartDataPrint breakdowns={breakdowns} selectedAmenities={selected_amenities.map((amenity: any) => amenity._id)} />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Space Type</th>
                            <th>Percentage</th>
                            <th>Square Feet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {breakdowns.map((breakdown: any, index: any) => (
                            <tr key={index} >
                                <td className="font-light text-[18px]">{breakdown[0]}</td>
                                <td className="font-light text-[18px]">{Math.round(slice * breakdown[1].length)}%</td>
                                <td className="font-light text-[18px]">3,000 sqft</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="location">
                <h2 className="mt-10 text-2xl">Location</h2>
                <div className="bg-black h-[1px] mb-30"></div>
                <p className="font-lato text-[14px]">
                    <strong className="font-latobold">M Moser - Vancouver Office</strong><br />
                    {project.address}
                </p>

                <div className="flex justify-center location-map my-5">
                    <iframe src={`https://maps.google.com/maps?q=${project.address}&z=13&ie=UTF8&iwloc=&output=embed`} width="600" height="450" style={{ border: 0 }}></iframe>
                </div>
            </section>

            <section className="project-metrics">
                <h2 className="mt-10 text-2xl">Project Metrics</h2>
                <div className="bg-black h-[1px] mb-30"></div>
                <ul>
                    <li className="font-lato"><strong className="font-latobold">Space Size:</strong> {Number(project.spaceSize).toLocaleString()} sqft</li>
                    <li className="font-lato"><strong className="font-latobold">Rentable Area:</strong> {Number(project.rentableArea).toLocaleString()} sqft</li>
                    <li className="font-lato"><strong className="font-latobold">Target Headcount:</strong> {project.headCount}</li>
                    <li className="font-lato"><strong className="font-latobold">Workspace Assigned:</strong> {project.workspaceAssigned}%</li>
                    <li className="font-lato"><strong className="font-latobold">Staff Working Remotely:</strong> {project.staffWorkRemotely}%</li>
                </ul>
                <p >
                    <strong>12 sqft per person</strong><br />
                    <small className="text-[12px]">Industry standard is 15 sqft per person</small>
                </p>
            </section>

            <footer className="font-lato text-[14px]">
                &copy; 2020 M Moser Associates
            </footer>
        </div>
    )
}