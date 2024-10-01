"use client";

import { useRefinementStore } from "@/lib/store/refinementStore";
import { useEffect, useState } from "react";


type Props = {
  refinementId?: string;
  id: string;
  estimateId: number;
}
export default function Indicator({
  refinementId,
  id,
  estimateId,
}: Props) {
  const [refinementName, setRefinementname] = useState<string>("");
  const estimates = useRefinementStore((state) => state.estimates);

  useEffect(() => {
    const getRequirementLabel = async (refinementLevelId?: string) => {
      if (id) {
        const response = await fetch(`/api/refinement-level/${refinementLevelId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        let refinementLabelResponse = await response.json();

        setRefinementname(refinementLabelResponse.level);
      }
    };

    if (estimates) {

      const nextRefinements = estimates[estimateId].refinement.find(
        (refinement: { id: string; refinementId: string }) =>
          refinement.id === id &&
          refinement.refinementId === refinementId
      );

      getRequirementLabel(nextRefinements.refinementLevelId);
    }
  }, [estimateId, estimates, id, refinementId]);

  return refinementName.toLowerCase();
}
