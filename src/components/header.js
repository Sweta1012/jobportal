import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './ViewJob.css';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


function Header(props) {  
    
    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
        },
    }));
   
    const filterJobs = () => {
        let searchValue = document.getElementById('search').value;
        let type = document.getElementById('fulltime').checked;
        let location = document.getElementById('location').value;

        props.filterJobs(searchValue, type, location);
    }

    const classes = useStyles();

    return (
        <div className="header-wrapper">
            <div className="devjobs">
                <h3 className="text">devjobs</h3>
                <div className="toggleTheme">
                    <input type="checkbox" id="theme" name="theme" onClick={props.changeTheme} /> <label className="text">Light / Dark</label>
                </div>
            </div>     
            <div className="filter-wrap">
                <div className={props.theme === 'light' ? 'filter-container' : 'filter-container filter-container-dark'}>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <SearchIcon />
                        </Grid>
                        <Grid item>
                            <TextField  name="search" id="search" label="With a grid" />
                        </Grid>
                        </Grid>
                    </div>

                    <Divider orientation="vertical" flexItem />

                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <LocationOnIcon color="secondary"/>
                        </Grid>
                        <Grid item>
                            <TextField  name="location" id="location" label="With a grid" />
                        </Grid>
                        </Grid>
                    </div>

                    <Divider orientation="vertical" flexItem />

                    <FormControlLabel
                        control={
                        <Checkbox
                            name="fulltime"
                            id="fulltime"
                            color="primary"
                        />
                        }
                        label="Full-Time Only"
                    />

                    <Button variant="contained" color="primary" onClick={filterJobs}>
                        search
                    </Button>                    
                </div>
            </div>          
        </div>
    );
}

export default Header;