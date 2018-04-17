import { Goal } from "./goal";

export interface Role {
    id: string,
    title: string,
    priority: number,
    goals: Goal[]
}