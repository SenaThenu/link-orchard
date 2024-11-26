import { useState, useEffect } from "react";

// types
import ConfigDataType from "./types/ConfigDataType";

// data
import configData from "./data/config.json";

// components
import LinkBlock from "./components/LinkBlock";

// styles
import "./App.scss";

const config: ConfigDataType = configData;

function App() {
    useEffect(() => {
        document.title = `${config.handle}'s Link Orchard`;
        document.body.style.backgroundImage = `url("src/${config.backgroundImage}")`;
    }, []);

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
