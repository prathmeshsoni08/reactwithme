import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),

  description: z.string().min(1, "Description is required"),

  priority: z.enum(["Low", "Medium", "High"]),

  dueDate: z.string().min(1, "Due date is required"),
});
