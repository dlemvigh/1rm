import React, { ChangeEvent, useCallback } from "react";

interface InputFormProps {
  weight: number | undefined;
  reps: number;
  onWeightChange: (weight: number) => void;
  onRepsChange: (weight: number) => void;
}
export function InputForm({ weight, reps, onWeightChange, onRepsChange }: InputFormProps) {
  const handleWeightChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    onWeightChange(value);
  }, [onWeightChange]);
  const handleRepsChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    onRepsChange(value);
  }, [onRepsChange]);
  return (
    <form>
      <label>
        Weight
        <input type="number" name="weight" min="0" step="1.25" value={weight} onChange={handleWeightChange} />
      </label>
      <label>
        Reps
        <input type="number" name="reps" min="1" step="1" max="30" defaultValue={1} value={reps} onChange={handleRepsChange} />
      </label>
    </form>
  )
}
