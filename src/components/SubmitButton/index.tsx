"use client";

import { useFormStatus } from "react-dom";
import { Spinner } from "../Spinner";
import { ArrowFoward } from "../icons/ArrowFoward";
import { Button } from "../Button";
import { ReactNode } from "react";

export const SubmitButton = ({ children }: { children: ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <Button aria-disabled={pending} type="submit">
      {pending ? (
        <Spinner />
      ) : (
        <>
          {children} <ArrowFoward />
        </>
      )}
    </Button>
  );
};
