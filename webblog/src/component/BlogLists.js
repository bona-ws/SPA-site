import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "../css/blogs.css";
import "../css/loader.css";

export class BlogLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      visible: 6,
      loadMore: false
    };
  }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 3 };
    });
  };

  fetchData = categoryName => {
    fetch(`http://localhost:9000/blogs/${categoryName ? categoryName : ""}`)
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
  };

  componentDidMount() {
    const categoryName = this.props.match.params.category;

    this.fetchData(categoryName);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.category !== this.props.match.params.category) {
      const categoryName = nextProps.match.params.category;

      this.fetchData(categoryName);
    }

    return true;
  }

  render() {
    const { error, isLoaded, blogs } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="lds-dual-ring"></div>;
    } else {
      return (
        <div className="blogs">
          <Grid container spacing={6}>
            {/* slice object from api */}
            {blogs.slice(0, this.state.visible).map(blog => (
              // looping blog items start
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
              // looping blog items end
            ))}

            {/* button load more start */}
            {this.state.visible < this.state.blogs.length && (
              <div className="load-more">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.loadMore}
                >
                  Load more
                </Button>
              </div>
            )}
            {/* button load more end */}
          </Grid>
        </div>
      );
    }
  }
}

export default BlogLists;
