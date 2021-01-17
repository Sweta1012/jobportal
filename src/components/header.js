import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './ViewJob.css';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);


function Header(props) {  

    const [state, setState] = React.useState({
        theme: false
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.changeTheme();
      };
    
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
                    <FormGroup>
                        <Typography component="div">
                            <Grid component="label" container alignItems="center" spacing={1}>
                            <Grid item>
                                <WbSunnyIcon className="theme-icon" />
                            </Grid>
                            <Grid item>
                                <AntSwitch checked={state.theme} onChange={handleChange} id="theme" name="theme" />
                            </Grid>
                            <Grid item>
                                <Brightness3Icon className="theme-icon" />
                            </Grid>
                            </Grid>
                        </Typography>
                    </FormGroup>
                </div>
            </div>     
            <div className="filter-wrap">
                <div className={props.theme === 'light' ? 'filter-container' : 'filter-container filter-container-dark'}>
                    <div className={classes.margin, 'filter-fields'}>
                        <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <SearchIcon />
                        </Grid>
                        <Grid item>
                            <TextField  name="search" id="search" label="Filter by title, company, skill .." />
                        </Grid>
                        </Grid>
                    </div>

                    <Divider orientation="vertical" flexItem />

                    <div className={classes.margin, 'filter-fields'}>
                        <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <LocationOnIcon color="secondary"/>
                        </Grid>
                        <Grid item>
                            <TextField  name="location" id="location" label="Filter by location" className={props.theme === 'dark' ? 'dark-text' : ''} />
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