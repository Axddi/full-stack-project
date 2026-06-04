import { z } from "zod";

export const compensationSchema = z.object({
  company: z.string().min(2),

  role: z.string().min(2),

  level: z.string(),

  location: z.string(),

  yearsExperience: z.number().min(0),

  baseSalary: z.number().min(0),

  bonus: z.number().default(0),

  stock: z.number().default(0),
});