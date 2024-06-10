import React from "react"
import { FireCMSCloudApp } from "@firecms/cloud";
import appConfig from "./index";

function App() {
    return <FireCMSCloudApp
        projectId={"hintcode-9a6d2"}
        appConfig={appConfig}
    />;
}

export default App
