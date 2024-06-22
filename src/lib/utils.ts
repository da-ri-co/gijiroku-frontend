import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const API_URL:string = "http://127.0.0.1:8000";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
