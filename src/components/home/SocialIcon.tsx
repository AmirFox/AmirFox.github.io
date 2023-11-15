function SocialIcon(props : {link: string, icon : string, label : string}) {
    return (
        <a target="_blank" aria-label={props.label}
           rel="noopener noreferrer" href={props.link}>
            <i className={props.icon} aria-hidden="true"/>
        </a>
    );
}

export default SocialIcon;