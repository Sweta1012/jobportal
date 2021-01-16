import React, {Component} from 'react';
import './ViewJob.css';

class Header extends Component {
    constructor(props) {
		super(props);
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
                            <input />
                        </div>
                        <div className="filter-location">

                        </div>
                        <div className="filter-fulltime">
                            <div>
                                <input type="checkbox" name="fulltime"  />
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        );
    }
}

export default Header;