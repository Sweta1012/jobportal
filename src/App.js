import { Component } from 'react';
import './App.css';
import ViewJobs from './components/ViewJobs';
import Header from './components/header';
class App extends Component {

  state = {
    originalJobs: [],
    jobs: [],
    theme: 'light'
  }

  componentDidMount() {
    fetch('/positions.json?page=1&search=code')
    .then((res) => res.json())
    .then(resJSON => {
      
      if(resJSON && resJSON.length > 0) {
        this.setState({
          originalJobs: resJSON,
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

  filterJobs = (search, onlyFullTime, location) => {
    let originalJobs = this.state.originalJobs;
    let filteredJobs = this.state.originalJobs.filter((item, index) => {
      if(onlyFullTime && (search !== '' || location !== '')) {
        console.log("1 ");

        return item.type === 'Full Time' && (item.location == location || item.title == search || item.company == search);
      } else if(!onlyFullTime && (search !== '' || location !== '')) {
        console.log("2 ");

        return item.location == location || item.title == search || item.company == search;
      } else if(onlyFullTime && search === '' && location === '') {
        console.log("3 ");

        return item.type === 'Full Time';
      } else {
        console.log("4 ");

        return item;
      }
    });

    console.log("filtered jovbs ", filteredJobs);

    if(!onlyFullTime && !search && !location) {
      this.setState({
        jobs: originalJobs
      })
    } else {
      this.setState({
        jobs: filteredJobs
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header theme={this.state.theme} changeTheme={this.changeTheme} filterJobs={this.filterJobs} />
        <ViewJobs jobs={this.state.jobs} theme={this.state.theme}/>
      </div>
    );
  }
}

export default App;
