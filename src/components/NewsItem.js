import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, mode, author, date, source} = this.props;
    return (
      <div className="card my-2" style={{ backgroundColor: mode === 'dark' ? '#2e2e2e' : 'white', color: mode === 'dark' ? 'white' : 'black' }}>
        <span className="position-absolute text-wrap top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
        <img src={!imageUrl?"https://via.placeholder.com/150":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body" >
                        <h5 className="card-title">{title}  <span className="badge rounded-pill text-bg-success">Success</span></h5>
                        <p className="card-text ">{description}</p>
                        <p className="card-text" ><small style={{ color: mode === 'dark' ? '#696969' : '#696969' }}>By {author} on {date}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${mode === 'dark' ? 'light' : 'dark'}`}>Read More</a>
                    </div>
      </div>
    );
  }
}

export default NewsItem;