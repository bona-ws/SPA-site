import React, { Component } from "react";
import { blogFormatDate } from "../../_helper/formatDate";
import "../../css/read.css";

export class Read extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      blogs: null
    };
  }

  componentDidMount() {
    const title = this.props.match.params.title;

    // get blogs content from api
    fetch(`http://localhost:9000/blog/read/${title}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            blogs: result.data
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, blogs } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="lds-dual-ring"></div>;
    } else {
      return (
        <div className="blog-section">
          {blogs.map(blog => (
            <div className="content">
              <div className="content-header">
                <img
                  className="thumbnail"
                  src={
                    "https://geeksjapan.asia/uploads/blog/thumbnail/" +
                    blog.thumbnail
                  }
                  alt="thumbnail"
                />
                <p className="category">{blog.category}</p>

                <p className="title">{blog.title}</p>

                <p className="sub_title">{blog.sub_title}</p>

                <div className="detail">
                  <span className="author">GeeksJapan </span>

                  <span className="date">{blogFormatDate(blog.date)}</span>

                  <span className="read-count">
                    {" "}
                    <i className="fa fa-eye"></i> {blog.read_count}
                  </span>
                </div>
              </div>

              <div
                class="content-body"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Read;
