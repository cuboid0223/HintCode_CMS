import { buildProperties, buildProperty } from "@firecms/cloud";
import { EntityCollection } from "firecms";
import submissionData from "../properties/submissionData";

const ProblemMessagesCollection: EntityCollection = {
  id: "messages",
  name: "提示訊息",
  singularName: "message",
  path: "messages",
  description: "使用者根據題目與 GPT 對話的提示資訊",
  editable: true,
  icon: "hub",
  group: "",
  properties: {
    created_at: {
      name: "產生時間",
      dataType: "number",
      description: "該訊息的產生時間",
      readOnly: true,
    },
    id: {
      dataType: "string",
      name: "ID",
      description: "firestore 所產生的隨機 id",
    },
    role: {
      name: "角色",
      dataType: "string",
      description: "發出訊息的角色",
    },
    text: {
      name: "訊息內容",
      dataType: "string",
      description: "發出訊息的內容",
    },
    code: {
      dataType: "string",
      name: "code",
      defaultValue: "",
    },
    result: ({ values }) => {
      //   console.log(values);
      const properties = buildProperties<any>({});

      if (values.role === "user") {
        properties["problemId"] = buildProperty({
          dataType: "string",
          editable: false,
          name: "problemId",
        });
        properties["submissions"] = buildProperty({
          dataType: "array",
          name: "submissions",
          // keyValue: true,
          description: "測試結果",
          of: {
            properties: {
              compile_output: {
                name: "編譯器輸出",
                dataType: "string",
              },
              memory: {
                name: "記憶體",
                dataType: "number",
                description: "這次測試所消耗的記憶體",
              },
              message: {
                name: "訊息",
                dataType: "string",
              },
              status: {
                dataType: "map",
                name: "狀態",
                description: "是否通過測資",
                properties: {
                  description: {
                    name: "描述",
                    dataType: "string",
                  },
                  id: {
                    name: "id",
                    dataType: "number",
                  },
                },
              },
              stderr: {
                name: "錯誤訊息",
                dataType: "string",
              },
              stdout: {
                name: "輸出",
                dataType: "string",
              },
              time: {
                name: "時間",
                dataType: "string",
              },
              token: {
                name: "權杖",
                dataType: "string",
                readOnly: true,
              },
            },
            editable: true,
            dataType: "map",
            name: "Result",
            propertyConfig: "key_value",
          },
        });
      }

      return {
        dataType: "map",
        name: "result",
        properties: properties,
      };
    },
  },
  initialSort: ["created_at", "asc"],
  subcollections: [],
};

export default ProblemMessagesCollection;
