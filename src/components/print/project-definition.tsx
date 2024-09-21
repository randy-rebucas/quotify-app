import PrintButton from "./print-button";
import Chart from "./chart";
import PieChartDataPrint from "../estimation/pie-chart-data-print";
import { common } from "@/lib/mock";
import {
  fetchProjectAmenitiesByProject
} from "@/lib/data";

export default async function ProjectDefinition({ project }: { project: any }) {
  // Get all project amenitties
  const selected_amenities = await fetchProjectAmenitiesByProject(project._id);

  const groupItemRestById = (collector: any, item: any) => {
    const { categoryName, ...rest } = item;
    const groupList = collector[categoryName] || (collector[categoryName] = []);

    groupList.push(rest);

    return collector;
  };
  const breakdowns = Object.entries(
    selected_amenities.reduce(groupItemRestById, {})
  );

  const areaBreakdown = {
    selectedAmenityIds: selected_amenities.map((amenity: any) => amenity._id),
  };

  const slice = 100 / areaBreakdown.selectedAmenityIds.length;

  return (
    <div className="forPrint p-[40px] w-full">
      <header>
        <h1 className="font-lato text-3xl">Project Definition Report</h1>
        <PrintButton inverted={true}/>
      </header>

      <section className="project-info">
        <h2 className="mt-10 text-2xl">Project Information</h2>
        <div className="bg-black h-[1px] mb-30"></div>
        <p className="font-light text-[14px]">
          Prepared by {common.company} using {common.appName}. <br />
          Date: {common.currentDate}
        </p>
      </section>
      <section className="area-distribution">
        <h2 className="mt-10 text-2xl">Area Distribution</h2>
        <div className="bg-black h-[1px] mb-30"></div>
        <div className="items-center flex gap-6 justify-center my-5">
          <Chart
            width={450}
            height={450}
            breakdowns={breakdowns}
            slice={slice}
          />
          <PieChartDataPrint
            breakdowns={breakdowns}
            selectedAmenities={selected_amenities.map(
              (amenity: any) => amenity._id
            )}
          />
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
              <tr key={index}>
                <td className="font-light text-[18px]">{breakdown[0]}</td>
                <td className="font-light text-[18px]">
                  {Math.round(slice * breakdown[1].length)}%
                </td>
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
          <strong className="font-latobold">M Moser - Vancouver Office</strong>
          <br />
          {project.address}
        </p>

        <div className="flex justify-center location-map my-5">
          <iframe
            src={`https://maps.google.com/maps?q=${project.address}&z=13&ie=UTF8&iwloc=&output=embed`}
            width="600"
            height="450"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </section>

      <section className="project-metrics">
        <h2 className="mt-10 text-2xl">Project Metrics</h2>
        <div className="bg-black h-[1px] mb-30"></div>
        <ul>
          <li className="font-lato">
            <strong className="font-latobold">Space Size:</strong>{" "}
            {Number(project.spaceSize).toLocaleString()} sqft
          </li>
          <li className="font-lato">
            <strong className="font-latobold">Rentable Area:</strong>{" "}
            {Number(project.rentableArea).toLocaleString()} sqft
          </li>
          <li className="font-lato">
            <strong className="font-latobold">Target Headcount:</strong>{" "}
            {project.headCount}
          </li>
          <li className="font-lato">
            <strong className="font-latobold">Workspace Assigned:</strong>{" "}
            {project.workspaceAssigned}%
          </li>
          <li className="font-lato">
            <strong className="font-latobold">Staff Working Remotely:</strong>{" "}
            {project.staffWorkRemotely}%
          </li>
        </ul>
        <p>
          <strong>12 sqft per person</strong>
          <br />
          <small className="text-[12px]">
            Industry standard is 15 sqft per person
          </small>
        </p>
      </section>

      <footer className="font-lato text-[14px]">
        &copy; 2020 M Moser Associates
      </footer>
    </div>
  );
}
