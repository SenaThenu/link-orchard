import LinkDataType from "./LinkDataType";

interface ConfigDataType {
    name: string;
    handle: string;
    profilePicturePath: string;
    bio: string;
    backgroundImage: string;
    verifiedIconColor: string;
    linkLogoColor: string;
    links: LinkDataType[];
}

export default ConfigDataType