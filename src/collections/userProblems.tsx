import { EntityCollection } from "firecms";
import ProblemMessagesCollection from "./problemMessages";

const UserProblemsCollection: EntityCollection = {
  id: "problems",
  name: "problems",
  singularName: "problem",
  path: "problems",
  description: "使用者根據題目與 GPT 對話資訊",
  editable: true,
  icon: "hub",
  group: "",
  properties: {
    name: {
      dataType: "string",
      name: "Name",
    },
    id: {
      dataType: "string",
      name: "Id",
    },
    threadId: {
      description: "GPT 對話 ID，通過該 ID 可以找到從 openAi 找到對話資訊",
      name: "Threadid",
      dataType: "string",
      readOnly: true,
      hideFromCollection: true,
    },
    acceptedTime: {
      name: "通過耗時",
      dataType: "number",
      description: "通過該題的耗時(秒)",
      readOnly: false,
      defaultValue: 0,
    },
    remainTimes: {
      dataType: "number",
      name: "剩餘次數",
      description: "請求提示的剩餘次數",
      defaultValue: 20,
    },
    score: {
      dataType: "number",
      name: "得分",
      description: "該題得分(剩餘次數 * 該題總分 / 總次數)",
      defaultValue: 10,
      readonly: true,
    },
    is_solved: {
      defaultValue: false,
      description: "該題目是否通過所有測試資料",
      dataType: "boolean",
      name: "是否通過",
      propertyConfig: "switch",
    },
  },
  subcollections: [ProblemMessagesCollection],
};

export default UserProblemsCollection;
