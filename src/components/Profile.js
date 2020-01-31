import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";

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
    const handle = this.props.match.params.handle;
    axios.get(`/user/${handle}`).then(res => {
      console.log(res);
      this.setState({
        user: {
          credentials: {
            handle,
            createdAt: credentials.createdAt
          }
        }
      });
    });
  }
  render() {
    const {
      credentials: { handle, createdAt }
    } = this.state.user;
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography>{handle}</Typography>
            <Typography>{createdAt}</Typography>
            <Typography>Date Joined</Typography>
            <Typography>Bio</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default Profile;
