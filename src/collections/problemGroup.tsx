import { EntityCollection } from "firecms";

export const ProblemGroupsCollection: EntityCollection = {
  id: "problemGroups",
  name: "ProblemGroups",
  path: "problemGroups",
  editable: true,
  icon: "credit_card",
  group: "",
  properties: {
    matrix: {
      dataType: "array",
      name: "Matrix",
      of: {
        dataType: "reference",
        path: "problems",
        editable: true,
        name: "Matrix",
      },
    },
  },
  subcollections: [],
};
