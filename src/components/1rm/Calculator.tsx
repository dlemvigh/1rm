import React, { useState } from "react";
import { InputForm } from "./InputForm";
import { ResultTable } from "./ResultTable";

const DEBUG = false;

export function Calculator() {
  const [weight, setWeight] = useState<number | undefined>(undefined);
  const [reps, setReps] = useState<number>(1);

  return (
    <>
      <InputForm weight={weight} onWeightChange={setWeight} reps={reps} onRepsChange={setReps} />
      {DEBUG && <pre>
        {JSON.stringify({ weight, reps })}
      </pre>
      }
      <ResultTable weight={weight} reps={reps} />
    </>
  )
}



