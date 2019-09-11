import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Switch, InputBase } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from './contexts/LanguageContext';

import styles from './styles/NavBarStyles';

const content = {
    english: {
        search: "Search",
        flag: "🇬🇧"
    }, 
    french: {
        search: "Chercher",
        flag: "🇫🇷"
    }, 
    spanish: {
        search: "Buscar",
        flag: "🇪🇸"
    }
}

function Navbar(props){
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { classes } = props;
    const { search, flag } = content[language]
    return (
        <div className={classes.root}>
            <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <span role="img" aria-label="country flag">{flag}</span>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        App Title
                    </Typography>
                    <Switch onChange={ toggleTheme }/>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder={`${search}...`} classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }} />
                    </div>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Navbar);
