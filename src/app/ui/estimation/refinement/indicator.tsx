"use client";
import { useRefinementStore } from "@/app/lib/store/refinementStore";
import { useEffect, useState } from "react";

export default function Indicator({
    refinementId,
    id,
    estimateId,
  }: {
    refinementId?: string;
    id: string;
    estimateId: number;
  }) {
    const [refinementName, setRefinementname] = useState<string>("");
    const estimates = useRefinementStore((state) => state.estimates);
  
    const nextRefinements = estimates[estimateId].refinement.find(
      (refinement: { id: string; refinementId: string }) =>
        refinement.id === id &&
        refinement.refinementId === refinementId
    );
  
    useEffect(() => {
      const getRequirementLabel = async (id?: string) => {
        if (id) {
          const response = await fetch(`/api/refinement-level/${id}`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
  
          let refinementLabelResponse = await response.json();
  
          setRefinementname(refinementLabelResponse.level);
        }
      };
  
      if (nextRefinements.refinementLevelId) {
        getRequirementLabel(nextRefinements.refinementLevelId);
      }
    }, [nextRefinements]);
  
    return refinementName.toLowerCase();
  }
  