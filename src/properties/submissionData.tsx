import { buildProperty } from "@firecms/cloud";

const submissionData = buildProperty({
  dataType: "map",
  name: "submissionData",
  // keyValue: true,
  description: "測試結果",
  properties: {
    submissions: {
      dataType: "array",
      name: "submission",
      of: {
        properties: {
          compile_output: {
            dataType: "string",
          },
          memory: {
            dataType: "number",
          },
          message: {
            dataType: "string",
          },
          status: {
            dataType: "map",
            properties: {
              description: {
                name: "description",
                dataType: "string",
              },
              id: {
                name: "id",
                dataType: "number",
              },
            },
          },
          stderr: {
            dataType: "string",
          },
          stdout: {
            dataType: "string",
          },
          time: {
            dataType: "string",
          },
          token: {
            dataType: "string",
            readOnly: true,
          },
        },
        editable: true,
        dataType: "map",
        name: "Result",
        resolved: true,
        fromBuilder: false,
        keyValue: true,
        propertyConfig: "key_value",
      },
    },
  },
});

export default submissionData;
