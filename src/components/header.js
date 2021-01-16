import React, {Component} from 'react';
import './ViewJob.css';

class Header extends Component {

    state = {
        theme: 'light'
    }

    changeTheme = () => {
        let theme =this.state.theme;

        if(theme === 'light') {
            theme = 'dark';

            this.setState({
                theme
            })
        } else {
            theme = 'light';

            this.setState({
                theme
            })
        }
    }

    render() {
        return (
            <div className="header-wrapper">
                <div className="devjobs">
                    <h3 className="text">devjobs</h3>
                    <div className="toggleTheme">
                        <input type="checkbox" id="theme" name="theme" onClick={this.changeTheme} /> <label className="text">Light / Dark</label>
                    </div>
                </div>     
                <div className="filter-wrap">
                    <div className="filter-container">
                        <div className="filter-search">

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