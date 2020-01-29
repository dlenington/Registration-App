import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";

const styles = theme => ({
  ...theme.spreadThis
});

//MUI Stuff
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Profile extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    axios.get(`/user/`).then(res => {
      this.setState({
        user: {
          userHandle: res.data.userHandle
        }
      });
    });
  }
  render() {
    const { user } = this.state;
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography>{user.userHandle}</Typography>
            <Typography>Location</Typography>
            <Typography>Date Joined</Typography>
            <Typography>Bio</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default Profile;
