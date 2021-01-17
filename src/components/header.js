import React, {Component} from 'react';
import './ViewJob.css';

class Header extends Component {
    constructor(props) {
		super(props);
    }
    
    filterJobs = () => {
        let searchValue = document.getElementById('search').value;
        let type = document.getElementById('fulltime').checked;
        let location = document.getElementById('location').value;

        this.props.filterJobs(searchValue, type, location);
    }

    render() {
        return (
            <div className="header-wrapper">
                <div className="devjobs">
                    <h3 className="text">devjobs</h3>
                    <div className="toggleTheme">
                        <input type="checkbox" id="theme" name="theme" onClick={this.props.changeTheme} /> <label className="text">Light / Dark</label>
                    </div>
                </div>     
                <div className="filter-wrap">
                    <div className={this.props.theme === 'light' ? 'filter-container' : 'filter-container filter-container-dark'}>
                        <div className="filter-search">
                            <input type="text" name="search" id="search" />
                        </div>
                        <div className="filter-location">
                            <input type="text" name="location" id="location" />
                        </div>
                        <div className="filter-fulltime">
                            <div>
                                <input type="checkbox" name="fulltime" id="fulltime" />
                            </div>
                        </div>
                    </div>

                    <div> 
                        <button onClick={this.filterJobs}>search</button>
                    </div>
                </div>          
            </div>
        );
    }
}

export default Header;