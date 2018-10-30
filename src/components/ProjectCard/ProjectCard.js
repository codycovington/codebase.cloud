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
import "./ProjectCard.css";

const styles = {
    card: {
    maxWidth: 600,
    },
    media: {
    height: 140,
    },
};

// const cardstyle = {
//     backgroundImage: "url(" + "http://papers.co/wallpaper/papers.co-vf19-digital-lines-gold-perspective-abstract-pattern-1-wallpaper.jpg" + ")",
//             backgroundPosition: 'center',
//             backgroundSize: 'cover',
//             backgroundRepeat: 'noRepeat'
//     };

const style = {
    height: 200,
    width: 475,
    margin: 0,
    textAlign: 'center',
    display: 'inline-block',
    overflow: "hidden"
    };


function MediaCard(props) {
    const { classes } = props;
    return (
    <a href={props.link}>
    <Card className={classes.card}>
        <CardActionArea>
            <Paper className={classes.paper} style={style} zDepth={4}>
                <CardMedia className={classes.media} style={style}>
                    <img alt={props.Imagename} src={props.image} />
                </CardMedia>
            </Paper>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.name}
            </Typography>
            <Typography component="p">
            {props.description}
            </Typography>
        </CardContent>
        </CardActionArea>

        <CardActions>
        </CardActions>
    </Card>
    </a>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);