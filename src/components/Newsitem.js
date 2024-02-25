import React, { Component } from 'react'

export default class Newsitem extends Component {
  // cutDescription = (description, maxLength) => {
  //   // Check if description is not null and has a length property
  //   if (description && description.length) {
  //     return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
  //   } else {
  //     return ''; // or any default value you prefer if description is null
  //   }
  // };
  render() {
    let {title,description,imageurl,url,author,publishedAt,name} = this.props;
    return (
      <div>
        <div className="card my-3" style={{width: '18rem'}}>
       <img src={imageurl} className="card-img-top" alt="..."/>
       <div className="card-body">
        <div  style={{display: 'flex',
        justifyontent: 'flex-end',
        right: 0,
        position: 'absolute',
        top: 0}}>
       <span className="badge rounded-pill bg-danger" >
         {name}
       </span>
       </div>
       <h5 className="card-title">{title}... </h5>
      <p className="card-text">{description}...</p>
      <p className="card-text"><small className="text-body-secondary">author {author?author:"unknown"}  on{new Date(publishedAt).toGMTString()}</small></p>
      <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
     </div>
</div>
      </div>
    )
  }
}
