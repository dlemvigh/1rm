import React, { useState } from "react";
import styled from "styled-components";
import { InputForm } from "./InputForm";
import { ResultTable } from "./ResultTable";

const DEBUG = false;

const Container = styled.div`
  padding: 0.5em;

`

interface CalculatorProps {
  defaultWeight?: string
  defaultReps?: string
}

export function Calculator({ defaultWeight = "", defaultReps = ""}: CalculatorProps) {
  const [weight, setWeight] = useState<string>(defaultWeight);
  const [reps, setReps] = useState<string>(defaultReps);

  return (
    <Container>
      <InputForm weight={weight} onWeightChange={setWeight} reps={reps} onRepsChange={setReps} />
      {DEBUG && <pre>
        {JSON.stringify({ weight, reps })}
      </pre>
      }
      <ResultTable weight={weight} reps={reps} />
    </Container>
  )
}



