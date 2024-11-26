import LinkDataType from "./LinkDataType";

interface ConfigDataType {
    name: string;
    handle: string;
    profilePicturePath: string;
    description: string;
    backgroundImage: string;
    verifiedIconPath: string;
    verifiedIconColor: string;
    linkLogoColor: string;
    links: LinkDataType[];
}

export default ConfigDataType