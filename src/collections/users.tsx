import { EntityCollection } from "firecms";
import UserProblemsCollection from "./userProblems";

const UsersCollection: EntityCollection = {
  id: "users",
  name: "使用者",
  path: "users",
  description: "使用者",
  editable: true,
  icon: "group",
  group: "Views",
  customId: false,
  properties: {
    displayName: {
      dataType: "string",
      validation: {
        required: true,
      },
      name: "暱稱",
    },
    createdAt: {
      hideFromCollection: true,
      validation: {
        required: true,
      },
      description: "使用者創建帳號時間",
      readOnly: true,
      dataType: "number",
      name: "創建時間",
    },
    dislikedProblems: {
      hideFromCollection: true,
      of: {
        dataType: "string",
        name: "不喜歡的題目",
        resolved: true,
        editable: true,
        fromBuilder: false,
      },
      readOnly: false,
      description: "使用者不喜歡的題目陣列",
      name: "不喜歡的題目",
      resolvedProperties: [],
      dataType: "array",
    },
    email: {
      validation: {
        required: true,
      },
      name: "Email",
      dataType: "string",
      email: true,
    },
    likedProblems: {
      hideFromCollection: true,
      name: "喜歡的題目",
      description: "使用者喜歡的題目陣列",
      resolvedProperties: [],
      dataType: "array",
      of: {
        resolved: true,
        editable: true,
        fromBuilder: false,
        dataType: "string",
        name: "喜歡的題目",
      },
    },
    solvedProblems: {
      resolvedProperties: [],
      of: {
        fromBuilder: false,
        resolved: true,
        editable: true,
        dataType: "string",
        name: "完成的題目",
      },
      dataType: "array",
      name: "完成的題目",
      readOnly: true,
      description: "使用者完成的題目陣列",
    },
    starredProblems: {
      readOnly: true,
      hideFromCollection: true,
      resolvedProperties: [],
      description: "使用者加入收藏的題目陣列",
      of: {
        name: "收藏的題目",
        resolved: true,
        dataType: "string",
        editable: true,
        fromBuilder: false,
      },
      dataType: "array",
      name: "收藏的題目",
    },
    thumbnail: {
      validation: {
        required: true,
      },
      readOnly: true,
      dataType: "string",
      name: "頭像",
      description: "使用者頭像 SVG",
    },
    totalScore: {
      description: "使用者的根據題目完成度所得總分",
      readOnly: false,
      name: "總分",
      dataType: "number",
    },
    uid: {
      name: "UID",
      description: "使用者的唯一識別 ID",
      readOnly: true,
      dataType: "string",
      validation: {
        required: true,
      },
    },
    updatedAt: {
      description: "使用者更新個人資訊的最新時間",
      name: "更新個資時間",
      hideFromCollection: true,
      dataType: "number",
      validation: {
        required: true,
      },
      readOnly: true,
    },
  },
  subcollections: [UserProblemsCollection],
};

export default UsersCollection;
