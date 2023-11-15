import React from 'react';

function IconLink(props : {link : string, title : string, icon : string}) {
   return (
      <a href={props.link} target={"_blank"} rel="noopener noreferrer">
         <i className={props.icon}/> {props.title}
      </a>
   );
}

export default IconLink;