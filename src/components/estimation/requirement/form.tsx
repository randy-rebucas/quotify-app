"use client";

import { FormEvent, ReactNode, useState } from "react";
import Wrapper from "./wrapper";
import { useRouter } from "next/navigation";
import { useRequirementStore } from "@/lib/store/requirementStore";
import { useAppStore } from "@/lib/store/appStore";
import toast from "react-hot-toast";

let stepMap = new Map<number, string>();
stepMap.set(0, "Finish and Certification");
stepMap.set(1, "Mep Features");
stepMap.set(2, "Base Building Conditions");
stepMap.set(3, "Technology");
stepMap.set(4, "Furniture And Furnishing");
stepMap.set(5, "Review");

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
    event.preventDefault();

    if (!isLastStep) {
      toast.success(`${stepMap.get(currentStepIndex)} saved!`); // Displays a success message
      return next();
    }

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
        setIsLoading(false); // Set loading to false when the request completes
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      reset();
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


