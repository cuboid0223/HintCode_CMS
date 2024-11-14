import { EntityCollection } from "firecms";

const SettingsCollection: EntityCollection = {
  id: "settings",
  name: "Settings",
  path: "settings",
  editable: true,
  icon: "airlines",
  group: "Views",
  properties: {
    showCustomInput: {
      dataType: "boolean",
      name: "自由輸入模式",
      defaultValue: false,
    },
    showForgetPasswordButton: {
      dataType: "boolean",
      name: "顯示忘記密碼按鈕",
      columnWidth: 300.01873779296875,
    },
    showCreateAccountButton: {
      dataType: "boolean",
      name: "顯示註冊按鈕",
      columnWidth: 331.01873779296875,
    },
    isMaintained: {
      name: "維護中",
      dataType: "boolean",
    },
  },
  subcollections: [],
};

export default SettingsCollection;
