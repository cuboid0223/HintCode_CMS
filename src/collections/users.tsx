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
    uid: {
      name: "Uid",
      description: "使用者的唯一識別 ID",
      readOnly: true,
      dataType: "string",
      validation: {
        required: true,
      },
      hideFromCollection: false,
    },
    unit: {
      dataType: "reference",
      path: "units",
      name: "Unit",
      validation: {
        required: true,
      },
    },
    displayName: {
      dataType: "string",
      validation: {
        required: true,
      },
      name: "暱稱",
      columnWidth: 229.0103759765625,
    },
    completionRate: {
      dataType: "number",
      name: "CompletionRate",
    },
    email: {
      validation: {
        required: true,
      },
      name: "Email",
      dataType: "string",
      email: true,
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
    createdAt: {
      hideFromCollection: true,
      validation: {
        required: true,
      },
      description: "使用者創建帳號時間",
      readOnly: true,
      dataType: "number",
      name: "Createdat",
    },
    updatedAt: {
      description: "使用者更新個人資訊的最新時間",
      name: "Updatedat",
      hideFromCollection: true,
      dataType: "number",
      validation: {
        required: true,
      },
      readOnly: true,
    },
    thumbnail_64px: {
      hideFromCollection: true,
      dataType: "string",
      description: "頭像 64px",
      name: "Thumbnail 64px",
    },
  },
  subcollections: [UserProblemsCollection],
};

export default UsersCollection;
