import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
    },
    icon: {
    margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
        color: red[800],
    },
    },
});

const style = {
    margin: "auto"
    };

function LinkedInIcon(props) {
    return (
    <SvgIcon {...props}>
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
    </SvgIcon>
    );
}

function GithubIcon(props) {
    return (
    <SvgIcon {...props}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </SvgIcon>
    );
}

function StackOverflowIcon(props) {
    return (
    <SvgIcon {...props}>
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.869 5.903l3.114 4.567-.975.665-3.115-4.567.976-.665zm-2.812 2.585l4.84 2.838-.6 1.017-4.842-2.838.602-1.017zm-1.276 2.724l5.413 1.521-.291 1.077-5.428-1.458.306-1.14zm-.588 2.461l5.687.569-.103 1.12-5.691-.513.107-1.176zm-.169 2.16h5.835v1.167h-5.835v-1.167zm7.976 3.167h-10v-6h1v5h8v-5h1v6zm.195-8.602l-.945-5.446 1.162-.202.947 5.446-1.164.202z" />
    </SvgIcon>
    );
}

function FacebookIcon(props) {
    return (
    <SvgIcon {...props}>
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
    </SvgIcon>
    );
}

function InstagramIcon(props) {
    return (
    <SvgIcon {...props}>
        <path d="M17.25 7.288v1.269c0 .297-.241.539-.538.539h-1.269c-.299 0-.538-.242-.538-.539v-1.269c0-.297.239-.538.538-.538h1.269c.297 0 .538.241.538.538zm-5.25 7.403c1.486 0 2.693-1.205 2.693-2.692s-1.207-2.69-2.693-2.69c-1.487 0-2.691 1.204-2.691 2.691s1.204 2.691 2.691 2.691zm4.261-3.291c.028.196.046.396.046.599 0 2.38-1.928 4.308-4.307 4.308s-4.307-1.928-4.307-4.307c0-.204.018-.403.046-.599.027-.194.066-.383.118-.567h-1.107v5.879c0 .297.241.538.538.538h9.424c.297 0 .538-.241.538-.538v-5.879h-1.107c.05.184.09.373.118.566zm7.739.6c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-5.385c0-.892-.723-1.615-1.615-1.615h-10.77c-.892 0-1.615.723-1.615 1.615v10.769c0 .893.723 1.616 1.615 1.616h10.77c.892 0 1.615-.723 1.615-1.616v-10.769z" />
    </SvgIcon>
    );
}

function SvgIcons(props) {
    const { classes } = props;
    return (
    <div className={classes.root} style={style}>
    <center>
        <a href="http://www.linkedin.com/in/codycovington" target="_blank"><LinkedInIcon className={classes.iconHover} color="primary" style={{ fontSize: 30 }} /></a>
        <a href="http://www.github.com/codycovington" target="_blank"><GithubIcon className={classes.iconHover} color="primary" style={{ fontSize: 30 }} /></a>
        <a href="https://stackoverflow.com/users/9350531/cody-covington" target="_blank"><StackOverflowIcon className={classes.iconHover} color="primary" style={{ fontSize: 30 }} /></a>
        <a href="http://www.facebook.com/codycovington" target="_blank"><FacebookIcon className={classes.iconHover} color="primary" style={{ fontSize: 30 }} /></a>
        <a href="http://www.instagram.com/codycovington" target="_blank"><InstagramIcon className={classes.iconHover} color="primary" style={{ fontSize: 30 }} /></a>
    </center>
    </div>
    );
}

SvgIcons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgIcons);