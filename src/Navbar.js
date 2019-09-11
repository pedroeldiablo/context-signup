import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Switch, InputBase } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from './contexts/LanguageContext';

import styles from './styles/NavBarStyles';


class Navbar extends Component {
    static contextType = ThemeContext;
 
    constructor(props) {
        super(props);

    }

    render() {
        const { isDarkMode, toggleTheme } = this.context;
        const { classes } = this.props;
        return (
            <LanguageContext.Consumer>
                {value => (
                     <div className={classes.root}>
                     <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
                         <Toolbar>
                             <IconButton className={classes.menuButton} color="inherit">
                                 <span role="img" aria-label="country flag">🇫🇷</span>
                             </IconButton>
                             <Typography className={classes.title} variant="h6" color="inherit">
                                 App Title {value.language}
                             </Typography>
                             <Switch onChange={ toggleTheme }/>
                             <div className={classes.grow} />
                             <div className={classes.search}>
                                 <div className={classes.searchIcon}>
                                     <SearchIcon />
                                 </div>
                                 <InputBase placeholder="Search..." classes={{
                                     root: classes.inputRoot,
                                     input: classes.inputInput
                                 }} />
                             </div>
                             
                         </Toolbar>
                     </AppBar>
     
                 </div>
                )}
            </LanguageContext.Consumer>
           
        );
    }
}

export default withStyles(styles)(Navbar);
