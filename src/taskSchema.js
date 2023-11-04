export const taskSchema = {
    type: "object",
    properties: {
      title: { type: "string" },
      description: { type: "string" },
      dueDate: { type: "string", format: "date" },
      priority: { type: "string", enum: ["Low", "Medium", "High"] },
    },
  };