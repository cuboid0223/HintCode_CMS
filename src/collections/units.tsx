import { EntityCollection } from "firecms";

const UnitsCollection: EntityCollection = {
  id: "units",
  name: "Units",
  singularName: "unit",
  path: "units",
  description: "單位",
  editable: true,
  icon: "apartment",
  group: "Views",
  customId: true,
  properties: {
    name: {
      name: "Name",
      dataType: "string",
      validation: {
        required: true,
      },
    },
  },
  subcollections: [],
};

export default UnitsCollection;
