import { EntityCollection } from "firecms";

const ProblemsCollection: EntityCollection = {
  id: "problems",
  name: "Problems",
  singularName: "problem",
  path: "problems",
  description: "程式題目庫",
  editable: true,
  icon: "sticky_note_2",
  group: "Views",
  customId: true,
  initialSort: ["order", "asc"],
  properties: {
    order: {
      dataType: "number",
      validation: {
        required: true,
        unique: true,
        positive: true,
        integer: true,
      },
      name: "排序",
      description: "題目的在主頁面中顯示的順序",
    },
    id: {
      validation: {
        required: true,
        unique: true,
      },
      name: "Id",
      dataType: "string",
      description: "題目的 uuid 也是 path 名稱",
      readOnly: false,
      hideFromCollection: true,
    },
    title: {
      dataType: "string",
      validation: {
        required: true,
      },
      name: "標題",
      description: "程式題目標題",
    },
    difficulty: {
      dataType: "string",
      name: "難易度",
      validation: {
        required: true,
      },
      description: "該題的難易度",
      propertyConfig: "select",
      enumValues: [
        {
          id: "Easy",
          label: "Easy",
        },
        {
          label: "Medium",
          id: "Medium",
        },
        {
          label: "Difficulty",
          id: "Difficulty",
        },
      ],
    },
    category: {
      dataType: "string",
      name: "分類",
      validation: {
        required: true,
      },
      description: "該題目需的主要概念分類",
      readOnly: false,
      propertyConfig: "select",
      enumValues: [
        {
          id: "Basic",
          label: "Basic",
        },
        {
          label: "Array",
          id: "Array",
        },
        {
          label: "Math",
          id: "Math",
        },
      ],
    },

    totalTimes: {
      validation: {
        required: true,
      },
      dataType: "number",
      name: "總提示次數",
      defaultValue: 20,
      description: "該題可以提式的最高次數",
    },
    starterFunctionName: {
      hideFromCollection: true,
      propertyConfig: "key_value",
      properties: {
        py: {
          description: "呼叫函式的名稱",
          defaultValue: "def  FUNCTION_NAME(",
          name: "Py",
          editable: true,
          dataType: "string",
        },
        js: {
          editable: true,
          name: "Js",
          defaultValue: "function FUNCTION_NAME(",
          dataType: "string",
        },
      },
      keyValue: true,
      dataType: "map",
      description: "運行程式的函式名稱",
      readOnly: false,
      name: "Starterfunctionname",
    },
    problemStatement: {
      dataType: "string",
      validation: {
        required: true,
      },
      propertyConfig: "markdown",
      markdown: true,
      name: "敘述",
      description: "題目敘述",
      defaultValue: `      ### 範例 1:
>**輸入:** a = 6 , b = 4
>
>**輸出:** 2

      `,
    },
    // diffmode: {
    //   validation: {
    //     required: true,
    //   },
    //   name: "Diffmode",
    //   defaultValue: "line",
    //   dataType: "string",
    //   description:
    //     "在使用 diff highlight 若輸出值會有換行則用 line 否則用 block ",
    //   propertyConfig: "select",
    //   hideFromCollection: true,
    //   enumValues: [
    //     {
    //       label: "line",
    //       id: "line",
    //     },
    //     {
    //       id: "block",
    //       label: "block",
    //     },
    //   ],
    // },
    starterCode: {
      properties: {
        py: {
          dataType: "string",
          name: "Py",
          editable: true,
          defaultValue: `def FUNCTION_NAME(a,b):
              # Write your code here`,
          multiline: true,
          propertyConfig: "multiline",
        },
        js: {
          dataType: "string",
          editable: true,
          name: "Js",
          defaultValue: `function FUNCTION_NAME(a,b){  
                // Write your code here  
            }`,
          propertyConfig: "multiline",
          multiline: true,
        },
        vb: {
          dataType: "string",
          editable: true,
          name: "Vb",
          defaultValue: `Public Sub FUNCTION_NAME()                 
    ' Write your code here
      
End Function`,
          propertyConfig: "multiline",
          multiline: true,
        },
      },
      dataType: "map",
      name: "Startercode",
      description: "運行程式的函式",
      hideFromCollection: true,
      readOnly: false,
    },
    testCaseCode: {
      of: {
        editable: true,
        name: "Testcasecode",
        dataType: "map",
        fromBuilder: false,
        resolved: true,
        propertyConfig: "group",
        keyValue: false,
        propertiesOrder: ["id", "output", "inputCode"],
        spreadChildren: true,
        properties: {
          id: {
            dataType: "string",
            propertyConfig: "text_field",
            validation: {
              required: true,
              unique: true,
            },
            editable: true,
            name: "id",
          },
          inputCode: {
            name: "inputCode",
            editable: true,
            propertyConfig: "multiline",
            dataType: "string",
            multiline: true,
          },
          output: {
            name: "output",
            dataType: "string",
            editable: true,
            propertyConfig: "multiline",
            multiline: true,
          },
        },
      },
      name: "測試程式",
      resolvedProperties: [],
      dataType: "array",
      description: "實施測試所需要的測試程式碼",
      readOnly: false,
      validation: {
        min: "1",
        required: true,
      },
      columnWidth: 363.333251953125,
    },
    examples: {
      name: "範例",
      dataType: "array",
      of: {
        properties: {
          outputText: {
            editable: true,
            name: "outputText",
            dataType: "string",
            propertyConfig: "multiline",
            multiline: true,
          },
          id: {
            propertyConfig: "text_field",
            validation: {
              min: "1",
              unique: true,
              required: true,
            },
            dataType: "string",
            name: "id",
            editable: true,
          },
          explanation: {
            name: "explanation",
            editable: true,
            propertyConfig: "text_field",
            dataType: "string",
          },
          inputText: {
            editable: true,
            dataType: "string",
            propertyConfig: "text_field",
            name: "inputText",
          },
        },
        editable: true,
        dataType: "map",
        name: "Examples",
        resolved: true,
        fromBuilder: false,
        keyValue: false,
        propertyConfig: "group",
        spreadChildren: true,
        propertiesOrder: ["id", "inputText", "outputText", "explanation"],
      },
      description: "該題目所展示的範例輸入輸出",
      resolvedProperties: [],
    },
    isPublished: {
      name: "isPublished",
      dataType: "boolean",
      propertyConfig: "switch",
      description: "該問題是否在前台發布",
      validation: {
        required: true,
      },
      defaultValue: false,
    },
  },
  subcollections: [],
};
export default ProblemsCollection;
