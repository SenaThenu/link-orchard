import { useState } from "react";

// types
import ConfigDataType from "./types/ConfigDataType";

// data
import configData from "./data/config.json";

// components
import LinkBlock from "./components/LinkBlock";

const config: ConfigDataType = configData;

function App() {
    return (
        <div className="content">
            <LinkBlock
                linkName={config.links[0].name}
                logoColor={config.linkLogoColor}
                logoName={config.links[0].logoName}
                url={config.links[0].url}
            />
        </div>
    );
}

export default App;
