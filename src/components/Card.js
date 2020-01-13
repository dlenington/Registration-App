import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
//import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  ...theme.spreadThis,
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20
  }
});

class MyCard extends Component {
  state = { posts: [] };

  componentDidMount() {
    axios.get("/posts").then(res => {
      this.setState({
        posts: res.data
      });
    });
  }
  render() {
    const { classes } = this.props;
    const { posts } = this.state;
    console.log("posts" + posts);
    return posts.map(post => (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    ));
  }
}

export default withStyles(styles)(MyCard);
