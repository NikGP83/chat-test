import "./avatar.scss";

interface AvatarProps {
    src?: string;
    size?: "md" | "sm";
}



function Avatar ({src, size}: AvatarProps)  {

    const className = `component-avatar component-avatar--${size}`;

    return (
        <div className={className}>
            <img src={src} alt='User'/>
        </div>
    )
}

export default Avatar;