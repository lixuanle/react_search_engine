import React from 'react';

class HackerPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component-container">
        <a className="post-name" href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.postName}</a>
        <div className="post-info">
          <p className="post-stat">{this.props.points} points | </p>
          <p className="post-stat"> {this.props.author} | </p>
          <p className="post-stat"> {this.props.date} ago | </p>
          <a className="post-stat" href={'https://news.ycombinator.com/item?id=' + this.props.postID} target="_blank" rel="noopener noreferrer"> {this.props.comments} comments | </a>
          <a className="post-stat" href={this.props.url} target="_blank">({this.props.url})</a>
        </div>
      </div>
    );
  };
};

export default HackerPost;
