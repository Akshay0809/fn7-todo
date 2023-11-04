export const taskUISchema = {
    type: "VerticalLayout",
    elements: [
      { type: "Control", label: "Title", scope: "#/properties/title" },
      { type: "Control", label: "Description", scope: "#/properties/description" },
      { type: "Control", label: "Due Date", scope: "#/properties/dueDate" },
      { type: "Control", label: "Priority", scope: "#/properties/priority" },
    ],
  };