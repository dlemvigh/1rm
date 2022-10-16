export function epleyRatio(reps: number): number {
    return 1 + (reps - 1) / 30;
}

export function epley1rm(weight: number, reps: number): number {
    return weight * epleyRatio(reps);
}