import React, { ChangeEvent, useCallback } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
`

interface InputFormProps {
  weight: string;
  reps: string;
  onWeightChange: (weight: string) => void;
  onRepsChange: (weight: string) => void;
}
export function InputForm({ weight, reps, onWeightChange, onRepsChange }: InputFormProps) {
  const handleWeightChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onWeightChange(event.target.value);
  }, [onWeightChange]);
  const handleRepsChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onRepsChange(event.target.value);
  }, [onRepsChange]);
  return (
    <form>
      <Label>
        Reps
        <input type="number" name="reps" min="1" step="1" max="30" defaultValue={1} value={reps} onChange={handleRepsChange} />
      </Label>
      <Label>
        Weight
        <input type="number" name="weight" min="0" step="1.25" max="999" value={weight} onChange={handleWeightChange} />
      </Label>
    </form>
  )
}
