import { Component } from 'react';
import './App.css';
import ViewJobs from './components/ViewJobs';
import Header from './components/header';
class App extends Component {

  state = {
    jobs: []
  }

  componentDidMount() {
    fetch('/positions.json?page=1&search=code')
    .then((res) => res.json())
    .then(resJSON => {
      
      if(resJSON && resJSON.length > 0) {
        this.setState({
          jobs: resJSON,
          theme: 'light'
        })
      }

      console.log("jobs ", this.state.jobs);
    })   
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
      <div className="App">
        <Header theme={this.state.theme} changeTheme={this.changeTheme}/>
        <ViewJobs jobs={this.state.jobs} theme={this.state.theme}/>
      </div>
    );
  }
}

export default App;
