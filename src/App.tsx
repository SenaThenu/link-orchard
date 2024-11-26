import { useState, useEffect } from "react";

// types
import ConfigDataType from "./types/ConfigDataType";

// data
import configData from "./data/config.json";

// components
import ProfileHeader from "./components/ProfileHeader";
import LinkBlocksWrapper from "./components/LinkBlocksWrapper";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

// styles
import "./styles/global.scss";

const config: ConfigDataType = configData;

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.title = `${config.handle}'s Link Orchard`;
        document.body.style.backgroundColor = config.backgroundColor;
        document.body.style.color = config.textColor;

        const timer = setTimeout(() => setIsLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <LoadingScreen isLoaded={isLoaded} />
            <div
                className="content"
                style={!isLoaded ? { display: "none" } : undefined}>
                <ProfileHeader
                    bio={config.bio}
                    handle={config.handle}
                    name={config.name}
                    verifiedIconColor={config.verifiedIconColor}
                    verifiedIconPath={config.verifiedIconColor}
                />
                <LinkBlocksWrapper
                    links={config.links}
                    linkLogoColor={config.linkLogoColor}
                />
                <Footer
                    name={config.name}
                    buildYourOwnBtnColor={config.buildYourOwnBtnColor}
                />
            </div>
        </>
    );
}

export default App;
