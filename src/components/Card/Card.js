import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Socialicons from "../Socialicons"

const styles = {
    card: {
    maxWidth: "100vw",
    margin: "left"
    },
    media: {
    height: 140,
    },
};

const cardstyle = {
    backgroundImage: "url(" + "https://webgradients.com/public/webgradients_png/030%20Happy%20Fisher.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
    zDepth: 2
    };  

const style = {
    height: 150,
    width: 150,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    overflow: "hidden",
    borderRadius: "50%"
    };


function MediaCard(props) {
    const { classes } = props;
    return (
    <Card className={classes.card} style={cardstyle}>
        <CardActionArea>
            <Paper className={classes.paper} style={style} zDepth={4} circle={true}>
                <CardMedia
                    className={classes.media}
                    image="https://codycovington.github.io/assets/images/profile.jpg"
                    title="Cody"
                />
            </Paper>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Cody Covington
            </Typography>
            <Typography component="p">
            Web Developer in Atlanta, GA. Specializing in React and Back-End Designs
            </Typography>
        </CardContent>
        </CardActionArea>

        <CardActions>
        <Socialicons
        />
        </CardActions>
    </Card>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);