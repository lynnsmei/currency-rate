import { Currency } from "../types/types";

export function removeObjectByName(array: Currency[] | null, name: string) {
    if (!array) return [];
    return array.filter(obj => obj.name !== name);
}