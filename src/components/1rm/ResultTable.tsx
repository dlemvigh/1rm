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
  weight: number | undefined;
  reps: number;
}
export function ResultTable({ weight, reps }: ResultTableProps) {
  const oneRepMax = useMemo(() => weight && calcOneRepMaxWeight(weight, reps), [weight, reps]);
  return (
    <table style={{ width: "100%", maxWidth: "20rem" }}>
      <thead>
        <tr>
          <th>Reps</th>
          <ThNumber>% of 1RM</ThNumber>
          <ThNumber>Weight</ThNumber>
        </tr>
      </thead>
      <tbody>
        {REPS_LIST.map(reps =>
          <ResultRow key={reps} reps={reps} oneRepMax={oneRepMax} />
        )}
      </tbody>
    </table>
  )
}
interface ResultRowProps {
  reps: number;
  oneRepMax: number | undefined;
}
export function ResultRow({ reps, oneRepMax }: ResultRowProps) {
  const ratio = calcOneRepMaxRatio(reps);
  return (
    <tr>
      <td>{reps}</td>
      <TdNumber>{Math.floor(100 / ratio)} %</TdNumber>
      <TdNumber>{oneRepMax == null ? "-" : (oneRepMax / ratio).toFixed(1)} kg</TdNumber>
    </tr>
  )
}
