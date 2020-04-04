import React, { Component } from "react";
import { connect } from "react-redux";

import { getBlogContent } from "../../modules/action/getBlogContent";
import { blogFormatDate } from "../../helper/formatDate";
import "../../assets/css/read.css";

export class Read extends Component {
  componentDidMount() {
    const title = this.props.match.params.title;
    this.props.getBlogContent(title);
  }

  render() {
    const { error, isLoaded, blogs } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="lds-dual-ring"></div>;
    } else {
      return (
        <div className="blog-section">
          {blogs.map((blog) => (
            <div className="content" key={blog.id_blog}>
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
                className="content-body"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.getBlog.isLoaded,
  error: state.getBlog.error,
  blogs: state.getBlog.blogs,
});

const mapDispatchToProps = {
  getBlogContent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Read);
