import { EntityCollection } from "firecms";

const GroupsCollection: EntityCollection = {
  id: "groups",
  name: "Groups",
  path: "groups",
  editable: true,
  icon: "auto_awesome_mosaic",
  group: "",
  properties: {
    unit: {
      dataType: "reference",
      validation: {
        required: true,
      },
      name: "Unit",
      path: "units",
    },
  },
  subcollections: [],
};

export default GroupsCollection;
