import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, mode } = this.props;
    return (
      <div className="card my-2" style={{ backgroundColor: mode === 'dark' ? '#2e2e2e' : 'white', color: mode === 'dark' ? 'white' : 'black' }}>
        <img src={!imageUrl?"https://via.placeholder.com/150":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${mode === 'dark' ? 'light' : 'dark'}`}
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;