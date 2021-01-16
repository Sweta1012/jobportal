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
      
      console.log("in fetch ", resJSON);
      if(resJSON && resJSON.length > 0) {
        this.setState({
          jobs: resJSON
        })
      }

      console.log("jobs ", this.state.jobs);
    })   
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ViewJobs />
      </div>
    );
  }
}

export default App;
