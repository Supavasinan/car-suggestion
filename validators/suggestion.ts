import { z } from 'zod'

export const createSuggestionSchema = z.object({
    salary: z.string().min(1).max(1000000000000000),
    country: z.string().min(1, { message: "Text much be at least 4 characters long" }).max(50),
    manufacturer: z.string().min(1, { message: "Text much be at least 4 characters long" }).max(50),
    carType: z.string().min(1, { message: "Text much be at least 4 characters long" }).max(50),
})