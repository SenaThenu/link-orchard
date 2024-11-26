import { useEffect } from "react";

// types
import ConfigDataType from "./types/ConfigDataType";

// data
import configData from "./data/config.json";

// components
import ProfileHeader from "./components/ProfileHeader";
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
            <ProfileHeader
                bio={config.bio}
                handle={config.handle}
                name={config.name}
                profilePicturePath={config.profilePicturePath}
                verifiedIconColor={config.verifiedIconColor}
                verifiedIconPath={config.verifiedIconColor}
            />
            <LinkBlocksWrapper
                links={config.links}
                linkLogoColor={config.linkLogoColor}
            />
        </div>
    );
}

export default App;
