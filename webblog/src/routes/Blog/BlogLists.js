import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import { getBlogLists } from "../../modules/action/getBlogLists";
import ButtonComponent from "../../component/Button";
import "../../assets/css/blogs.css";
import "../../assets/css/loader.css";

export class BlogLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 6,
      loadMore: false
    };
  }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 6 };
    });
  };

  componentDidMount() {
    const categoryName = this.props.match.params.category;
    this.props.getBlogLists(categoryName);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.category !== this.props.match.params.category) {
      const categoryName = nextProps.match.params.category;
      this.props.getBlogLists(categoryName);
    }
    return true;
  }

  render() {
    const { visible } = this.state;
    const { isLoaded, error, blogs } = this.props;
    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div className="lds-dual-ring"></div>;
    } else {
      return (
        <div className="blogs">
          <Grid container spacing={6}>
            {/* slice object from api & loop */}
            {blogs.slice(0, visible).map(blog => (
              <Grid item md={4} sm={12} key={blog.id_blog}>
                <Card className="card">
                  <CardActionArea>
                    <div className="card-thumbnail">
                      <img
                        src={
                          "https://geeksjapan.asia/uploads/blog/thumbnail/" +
                          blog.thumbnail
                        }
                        alt="Thumbnail"
                      />
                    </div>
                    <CardContent>
                      <h5>
                        <i className="fa fa-book"></i> {blog.category}
                      </h5>
                      <p>
                        <b>{blog.title}</b>
                      </p>
                      <span>{blog.sub_title.substring(0, 120) + " ..."}</span>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to={"../read/" + blog.title.split(" ").join("-")}>
                      Read More
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {/* loop end */}
            {/* button load more start */}
            {visible < blogs.length && (
              <div className="load-more">
                <ButtonComponent
                  ButtonName={"Load More"}
                  onClick={this.loadMore}
                />
              </div>
            )}
            {/* button load more end */}
          </Grid>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  isLoaded: state.getBlog.isLoaded,
  error: state.getBlog.error,
  blogs: state.getBlog.blogs
});

const mapDispatchToProps = {
  getBlogLists
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogLists);
