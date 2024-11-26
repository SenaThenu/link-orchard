// components
import Icon from "./Icon";

// styles
import "./ProfileHeader.scss";

interface ProfileHeaderProps {
    name: string;
    handle: string;
    profilePicturePath: string;
    bio: string;
    verifiedIconPath: string;
    verifiedIconColor: string;
}

export default function ProfileHeader(props: ProfileHeaderProps) {
    return (
        <div className="profile-header">
            <div className="profile-picture">
                <img
                    src={`/src/${props.profilePicturePath}`}
                    alt={`Profile picture of ${props.name}`}
                    draggable={false}
                />
            </div>
            <div className="profile-title">
                <div className="profile-name">{props.name}</div>
                <Icon name="verified" fillColor={props.verifiedIconColor} />
            </div>
            <div className="profile-handle">{`@${props.handle}`}</div>
            <div className="profile-bio">{props.bio}</div>
        </div>
    );
}