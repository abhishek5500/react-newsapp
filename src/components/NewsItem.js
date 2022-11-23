import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
      <div className="card m-1" style={{width: "100%"}}>
        <img src={!imageUrl?"https://sportsfly.cbsistatic.com/fly-0362/bundles/sportsmediacss/images/fantasy/default-article-image-large.png":imageUrl} className="card-img-top" alt="..."  style={{height: "13rem"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
