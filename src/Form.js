import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles';
import { Paper, Avatar, Typography, Select, MenuItem, FormControl, InputLabel, Input, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
    english: {
        signIn: "Sign In",
        email: "Email",
        password: "Password",
        remember: "Remember Me",
    }, 
    french: {
        signIn: "Se Connecter",
        email: "Adresse électronique",
        password: "Mot de Passe",
        remember: "Souviens-toi De Moi",
    }, 
    spanish: {
        signIn: "Registrarse",
        email: "Correo electrónico",
        password: "Contraseña",
        remember: "Recuérdame",
    }
}
class Form extends Component {
    static contextType = LanguageContext;
    render() {
        const { language, changeLanguage } = this.context;
        const { classes } = this.props;
        const { signIn, email, password, remember } = words[language];
         return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">{signIn}</Typography>
                    <Select value={language} onChange={changeLanguage}>
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="french">Français</MenuItem>
                        <MenuItem value="spanish">Espanol</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">{email}</InputLabel>
                            <Input id="email" name="email" autoFocus />

                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">{password}</InputLabel>
                            <Input id="password" name="password" autoFocus />

                        </FormControl>
                        <FormControlLabel 
                        control={<Checkbox color="primary"/>}
                        label={remember}
                        />
                        <Button 
                        variant="contained" 
                        type="submit"
                        fullWidth
                        color="primary"
                        className={classes.submit}
                        >
                            {signIn}
                        </Button>

                        
                    </form>
                </Paper>
            </main>

        );
    }
} 

export default withStyles(styles)(Form);
