import "./avatar.scss";

interface AvatarProps {
    size?: "md" | "sm";
    id: string;
    name: string;
    surname: string;
    avatar: string;
    you: boolean;
}



function Avatar ({size, avatar}: AvatarProps)  {

    const className = `component-avatar component-avatar--${size}`;

    return (
        <div className={className}>
            <img src={avatar} alt='User'/>
        </div>
    )
}

export default Avatar;