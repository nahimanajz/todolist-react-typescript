import * as z from "zod";
export const DataSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "Name is required" }),
  dueDate: z.coerce.date(),
  priority: z.enum(["Low", "Medium", "High"]),
  text: z.string().min(10, { message: "Please enter at least 5 characters" }).max(300, { message: "Characters exceed 300" }).optional()
})