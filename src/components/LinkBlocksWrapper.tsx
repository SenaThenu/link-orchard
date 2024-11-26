// types
import LinkDataType from "../types/LinkDataType";

// components
import LinkBlock from "./LinkBlock";

// styles
import "./LinkBlocksWrapper.scss";

interface LinkBlocksWrapperProps {
    links: LinkDataType[];
    linkLogoColor: string;
}

export default function LinkBlocksWrapper({
    links,
    linkLogoColor,
}: LinkBlocksWrapperProps) {
    return (
        <div className="link-blocks-wrapper">
            {links.map((link, index) => {
                return (
                    <LinkBlock
                        linkName={link.name}
                        url={link.url}
                        logoName={link.logoName}
                        logoColor={linkLogoColor}
                        key={index}
                    />
                );
            })}
        </div>
    );
}
