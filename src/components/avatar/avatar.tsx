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
        <div className="avatar-wrapper">
            <img src={avatar} alt='User' className={className}/>
        </div>
    )
}

export default Avatar;