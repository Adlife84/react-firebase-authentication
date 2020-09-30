import React from 'react';

const SiteItem = (props) => (  
  <div>
    {console.log(props.id)} {/*Check what are in props*/}

    <a href={props.link} target="_blank">{props.link}</a>
    <button type="submit" onClick={() => props.onRemove(props.id)} >Delete</button>
    <button type="submit" onClick={props.onEdit}>Edit</button>
  </div>
);



export default SiteItem;