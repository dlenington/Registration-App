import React, { Component } from "react";
//import { makeStyles } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

//MUI Stuff
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
    dayjs.extend(relativeTime);
    const { classes } = this.props;
    const { posts } = this.state;
    console.log("posts" + posts);
    // const joinButton = post.userHandle ===
    return posts.map(post => (
      <Card key="post.postId" className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Event:
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Created by: {post.userHandle}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Date of event:
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="h2"
            >
              {dayjs(post.createdAt).fromNow()}
            </Typography>
            <Typography variant="body1" component="p">
              Attendees
            </Typography>
            <Typography variant="body1" component="p">
              Description: {post.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            More
          </Button>
          <Button size="small" color="secondary">
            Join
          </Button>
        </CardActions>
      </Card>
    ));
  }
}

export default withStyles(styles)(MyCard);
