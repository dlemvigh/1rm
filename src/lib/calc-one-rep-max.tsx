/**
 * Calculates the ration between current weight, one rep max, without knowing any of the weights.
 * Uses epley's formula, to calculate ratio.
 * @param reps 
 * @returns 
 */
export function calcOneRepMaxRatio(reps: number): number {
  return 1 + (reps - 1) / 30;
}

/**
 * Calculate one rep max, based on weight and reps. 
 * Uses epley's formula, to calculate one rep max.
 * @param weight 
 * @param reps 
 * @returns 1RM weight
 */
export function calcOneRepMaxWeight(weight: number, reps: number): number {
  return weight * calcOneRepMaxRatio(reps);
}
