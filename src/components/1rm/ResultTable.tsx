import React, { useMemo } from "react";
import styled from "styled-components";
import { calcOneRepMaxRatio, calcOneRepMaxWeight } from "../../lib/calc-one-rep-max";

const ThNumber = styled.th`
    text-align: right;
`
const TdNumber = styled.td`
    text-align: right;
`

// const REPS_LIST = Array.from({ length: 30 }, (_, index) => index + 1);
const REPS_LIST = [1, 2, 4, 6, 8, 10, 12, 15, 18, 24, 30]
interface ResultTableProps {
  weight: string;
  reps: string;
}
export function ResultTable({ weight: strWeight, reps: strReps }: ResultTableProps) {
  const weight = Number(strWeight);
  const reps = Number(strReps)
  const oneRepMax = useMemo(() => weight > 0 && reps > 0 && calcOneRepMaxWeight(weight, reps), [weight, reps]);
  return (
    <table style={{ maxWidth: "20rem" }}>
      <thead>
        <tr>
          <th>Reps</th>
          <ThNumber>Weight</ThNumber>
        </tr>
      </thead>
      <tbody>
        {REPS_LIST.map(r =>
          <ResultRow key={r} reps={r} oneRepMax={oneRepMax} />
        )}
      </tbody>
    </table>
  )
}
interface ResultRowProps {
  reps: number;
  oneRepMax: number | false;
}
export function ResultRow({ reps, oneRepMax }: ResultRowProps) {
  const ratio = calcOneRepMaxRatio(reps);
  return (
    <tr>
      <td>{reps}</td>
      <TdNumber>{oneRepMax === false ? "-" : (oneRepMax / ratio).toFixed(1)} kg</TdNumber>
    </tr>
  )
}
