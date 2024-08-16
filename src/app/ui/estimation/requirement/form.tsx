"use client";

import { FormEvent, ReactNode, useState } from "react";
import Wrapper from "./wrapper";
import { useRouter } from "next/navigation";
import { useRequirementStore } from "@/app/lib/store/requirementStore";
import { useAppStore } from "@/app/lib/store/appStore";


type Props = {
  projectId: string;
  currentStepIndex: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  back: () => void;
  next: () => void;
  children: ReactNode;
}

export default function Form({
  projectId, currentStepIndex, isFirstStep, isLastStep, back, next, children
}: Props) {
  const router = useRouter();
  const estimates = useRequirementStore((state) => state.estimates);
  const reset = useRequirementStore((state) => state.reset);
  const isLoading = useAppStore(state => state.isLoading);
  const setIsLoading = useAppStore(state => state.setIsLoading);

  const [error, setError] = useState<string | null>(null);
  // update this to action and implement dispatch
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    console.log(event);
    event.preventDefault();

    if (!isLastStep) return next();

    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      let form_data = {
        estimates,
        ...{
          projectId: projectId,
          section: "requirement",
        },
      };

      const response = await fetch("/api/project/requirement", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form_data),
      });

      let projectResponse = await response.json();

      if (response.status === 200) {
        router.push(`/estimation/refinement/${projectResponse.id}`);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      reset();
      setIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <div className="col-span-4 h-full w-full relative overflow-y-scroll overflow-x-hidden">
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


