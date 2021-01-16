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
            <div className="wrapper">
                <div className="devjobs">
                    <h3 className="text">devjobs</h3>
                    <div className="toggleTheme">
                        <input type="checkbox" id="theme" name="theme" onClick={this.changeTheme} /> <label className="text">Light / Dark</label>
                    </div>
                </div>               
            </div>
        );
    }
}

export default Header;