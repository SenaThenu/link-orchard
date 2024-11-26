import { useEffect } from "react";

// types
import ConfigDataType from "./types/ConfigDataType";

// data
import configData from "./data/config.json";

// components
import LinkBlocksWrapper from "./components/LinkBlocksWrapper";

// styles
import "./styles/global.scss";

const config: ConfigDataType = configData;

function App() {
    useEffect(() => {
        document.title = `${config.handle}'s Link Orchard`;
        document.body.style.backgroundImage = `url("src/${config.backgroundImage}")`;
    }, []);

    return (
        <div className="content">
            <LinkBlocksWrapper
                links={config.links}
                linkLogoColor={config.linkLogoColor}
            />
        </div>
    );
}

export default App;
