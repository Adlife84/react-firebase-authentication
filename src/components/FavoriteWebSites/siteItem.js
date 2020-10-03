import React from 'react';
import Icon from './Icon'

const SiteItem = (props) => (  
  <div>
    {console.log(props.id)} {/*Check what are in props*/}

    <a href={props.link} target="_blank">{props.link}</a>
    <Icon onClick={props.isFavorite}/>
    <button type="submit" onClick={() => props.onRemove(props.id)} >Delete</button>
    <button type="submit" onClick={props.onEdit}>Edit</button>
    <button type="submit" onClick={() => props.isFavorite(props.id)}>Favorite</button>
  </div>
);



export default SiteItem;