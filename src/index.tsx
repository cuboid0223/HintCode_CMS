import { FireCMSAppConfig } from "@firecms/cloud";
import { SampleEntityView } from "./entity_views/SampleEntityView";
import { demoCollection } from "./collections/demo";
import ProblemsCollection from "./collections/problems";
import UsersCollection from "./collections/users";

const appConfig: FireCMSAppConfig = {
  version: "1",
  collections: [demoCollection, ProblemsCollection, UsersCollection],
  propertyConfigs: [
    {
      name: "String with color",
      key: "color",
      property: {
        dataType: "string",
        name: "Main color",
        Preview: ({ value }) => {
          return (
            <div
              style={{
                width: 20,
                height: 20,
                backgroundColor: value,
                borderRadius: "4px",
              }}
            />
          );
        },
      },
    },
  ],
  entityViews: [
    {
      key: "sample_entity_view",
      name: "Sample entity view",
      Builder: SampleEntityView,
    },
  ],
};

export default appConfig;
