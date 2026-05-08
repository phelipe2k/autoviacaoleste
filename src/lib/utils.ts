import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Junta classes condicionais com clsx e resolve conflitos do Tailwind com tailwind-merge.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
