import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from "../Card"



const styles = theme => ({
    root: {
    flexGrow: 1,
    },
    paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    },
    footer: {
        marginBottom: '-50%',
        backgroundColor: "blue"
    }
});

const Footer = theme => ({
    
        marginBottom: '-50%',
        backgroundColor: "blue"
    
});



function CenteredGrid(props) {
    const { classes } = props;

    return (
    <div className={classes.root}>
        <Grid container spacing={0}>
        {/* <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={12}>
        <Card className={classes.card}>    
        </Card>
        </Grid> 
        
        
        <Grid item xs={12}>
            <Paper className={classes.paper} style={{backgroundColor: "white", marginBottom: '0px'}}><h1>PROJECTS</h1></Paper>
        </Grid>
        
        </Grid>
    </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);