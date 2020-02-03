import React, { Component } from "react";
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
  ...theme.spreadThis
});

class Profile extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    if (this.props.match.params.handle)
      const userHandle = this.props.match.params.handle;

    axios.get(`/user/${userHandle}`).then(res => {
      console.log(res);
      this.setState({
        user: {
          handle: res.data.credentials.handle,
          email: res.data.credentials.email,
          createdAt: res.data.credentials.createdAt
        }
      });
    });
  }
  render() {
    dayjs.extend(relativeTime);
    const { handle, createdAt, email } = this.state.user;
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography>{handle}</Typography>
            <Typography>{email}</Typography>
            <Typography>{dayjs(createdAt).fromNow()}</Typography>
            <Typography>Bio</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default Profile;
