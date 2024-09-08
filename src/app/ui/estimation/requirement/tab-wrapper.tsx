"use client";


import clsx from "clsx";
import { useEffect } from "react";
import { StimateData, tabMapping } from "./entities";
import TabForm from "./tab-form";
import { useRequirementStore } from "@/lib/store/requirementStore";

export default function TabWrapper() {
    const estimates = useRequirementStore((state) => state.estimates);
    const lastEstimate = useRequirementStore((state) => state.lastEstimate);
    const isExpanded = useRequirementStore((state) => state.isExpanded);
    const activeTab = useRequirementStore((state) => state.activeTab);
  
    const updateLastEstimate = useRequirementStore((state) => state.updateLastEstimate);
    const updateIsExpanded = useRequirementStore((state) => state.updateIsExpanded);
    const updateActiveTab = useRequirementStore((state) => state.updateActiveTab);
    const addEstimate = useRequirementStore((state) => state.addEstimate);
  
    useEffect(() => {
  
      updateLastEstimate(estimates);
  
    }, [estimates, updateLastEstimate])
  
    //
    const handleTabFormSubmit = (e: any) => {
      e.preventDefault();
      let sourceId = e.target.source.value;
  
      let source = estimates.find((stimate) => stimate.id == sourceId);
  
      const initialRequirement = {
        id: estimates.length,
        name: e.target.title.value,
        requirement: source?.requirement,
      };
  
      addEstimate(initialRequirement);
    };
  
    return (
      <div
        data-col={lastEstimate + 1}
        className={clsx(
          `js-tabs absolute z-30 ${isExpanded ? `right-${estimates.length * 2}0` : "right-20"
          }`,
          {
            "top-[52px]": estimates.length == 1,
            "top-[14px]": estimates.length > 1,
          }
        )}
      >
        {estimates.length > 1 && (
          <div
            className={clsx(
              "bg-darkgreen mb-1 h-[55px] w-[43px] flex items-center justify-center",
              {
                "rotate-180": isExpanded,
              }
            )}
          >
            <a
              href="#"
              className="js-tabs__toggle"
              onClick={() => updateIsExpanded(!isExpanded)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="20"
                viewBox="0 0 13 20"
                fill="none"
              >
                <path d="M11 2L3 10L11 18" stroke="#99B9B6" strokeWidth="3" />
              </svg>
            </a>
          </div>
        )}
        <h3>
          {estimates.map((stimate: StimateData) => (
            <a
              key={stimate.id}
              data-menu={tabMapping.get(stimate.id)}
              className={clsx("js-tabs-tab tabs-tab", {
                active: activeTab == stimate.id,
                "cursor-pointer": activeTab != stimate.id,
              })}
              onClick={() => updateActiveTab(stimate.id)}
            >
              {tabMapping.get(stimate.id)}:
            </a>
          ))}
        </h3>
        {estimates.length < 4 && (
          <TabForm stimates={estimates} onSubmit={handleTabFormSubmit} />
        )}
      </div>
    )
}