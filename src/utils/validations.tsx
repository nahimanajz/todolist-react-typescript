import * as z from "zod";
export const DataSchema = z.object({
  id: z.string(),
  dueDate: z.coerce.date(),
  name: z.string().min(1, { message: "Name is required" }),
  priority: z.enum(["Low", "Medium", "High"]),
  done: z.boolean(),
  text: z.string().min(10, { message: "Please enter at least 5 characters" }).max(300, { message: "Characters exceed 300" }).optional()
})