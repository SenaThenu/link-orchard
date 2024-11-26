import LinkDataType from "./LinkDataType";

interface ConfigDataType {
    name: string;
    handle: string;
    bio: string;
    verifiedIconColor: string;
    linkLogoColor: string;
    textColor: string;
    buildYourOwnBtnColor: string;
    backgroundColor: string;
    links: LinkDataType[];
}

export default ConfigDataType