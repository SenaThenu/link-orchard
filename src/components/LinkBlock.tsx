// components
import Icon from "./Icon";

// styles
import "./LinkBlock.scss";

interface LinkBlockProps {
    linkName: string;
    url: string;
    logoName: string;
    logoColor: string;
}

export default function LinkBlock(props: LinkBlockProps) {
    return (
        <a className="link-block" href={props.url} target="_blank">
            <div className="link-content">
                <Icon
                    fillColor={props.logoColor}
                    name={props.logoName}
                    size={36}
                />
                <div className="link-name">{props.linkName}</div>
            </div>
        </a>
    );
}
