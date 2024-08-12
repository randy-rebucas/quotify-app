"use client";

import { FormEvent, ReactNode, useState } from "react";
import Wrapper from "./wrapper";
import { useRouter } from "next/navigation";
import { useRefinementStore } from "@/app/lib/store/refinementStore";
import { useAppStore } from "@/app/lib/store/appStore";

export interface ProjectAmenities {
  _id: string;
  amenityName: string;
}

export interface ProjectAreaDefination {
  _id: string;
  name: string;
  type: string;
}

type Props = {
  projectId: string;
  currentStepIndex: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  back: () => void;
  next: () => void;
  children: ReactNode
};

/**
 * 
 * @param param0 
 * @returns 
 */
export default function Form({
  projectId, currentStepIndex, isFirstStep, isLastStep, back, next, children
}: Props) {
  const router = useRouter();

  const estimates = useRefinementStore((state) => state.estimates);
  const reset = useRefinementStore((state) => state.reset);

  const isLoading = useAppStore(state => state.isLoading);
  const setIsLoading = useAppStore(state => state.setIsLoading);

  const [error, setError] = useState<string | null>(null);

  // update this to action and implement dispatch
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isLastStep) return next();

    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      let form_data = {
        estimates,
        ...{
          projectId: projectId,
          section: "refinement",
        },
      };

      const response = await fetch("/api/project/refinement", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form_data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      let projectResponse = await response.json();

      if (response.status === 200) {
        reset();
        router.push(`/estimation/estimate-summary/${projectResponse.id}`);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <div className="wrapper__inner col-span-4 h-full w-full relative overflow-y-scroll overflow-x-hidden">
      <form onSubmit={onSubmit} className="h-full">
        <Wrapper
          stepIndex={currentStepIndex}
          isFirstStep={isFirstStep}
          onClick={back}
        >
          {children}
        </Wrapper>
      </form>
    </div>
  )
}



