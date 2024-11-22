import React, { Component } from 'react'
import PropTypes from 'prop-types'
import News from './News';
import './headline.css';

export class Headline extends Component {
  static propTypes = {

  }

  render() {
    let { title, description, imageUrl, newsUrl, mode, author, date, source} = this.props;
    return (
      <div className='container'>
        <div className="ycard card mb-3" style={{backgroundColor: mode === 'dark' ? '#2e2e2e' : 'white', color: mode === 'dark' ? 'white' : 'black' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={!imageUrl?"https://via.placeholder.com/150":imageUrl} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text" ><small style={{ color: mode === 'dark' ? '#696969' : '#696969' }}>By {author} on {date}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${mode === 'dark' ? 'light' : 'dark'}`}>Read More</a>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default Headline
