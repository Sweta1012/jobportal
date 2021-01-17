import { Component } from 'react';
import './App.css';
import ViewJobs from './components/ViewJobs';
import JobDetail from './components/ViewJobs';
import Header from './components/header';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {

  state = {
    originalJobs: [],
    jobs: [],
    selectedJob: {},
    theme: 'light',
    page: 1,
    latitude: null,
    longitude: null,
    isLoadMore: true
  }

  componentDidMount() {
    // fetch('/positions.json?page=1&search=code')
    // .then((res) => res.json())
    // .then(resJSON => {
      
    //   if(resJSON && resJSON.length > 0) {
    //     this.setState({
    //       originalJobs: resJSON,
    //       jobs: resJSON,
    //       theme: 'light',
    //       page: 1
    //     })
    //   }

    //   console.log("theme thre ? ", this.changeTheme);
    // })  

    console.log("satte page ", this.state.page);
    
    this.getGithubJobs(this.state.page);
    this.getLocation();
  }
  getGithubJobs = (page) => {
    console.log("api ", page);

    fetch(`/positions.json?page=${page}`)
    .then((res) => res.json())
    .then(resJSON => {
      
      if(resJSON && resJSON.length > 0) {
        this.setState({
          originalJobs: [...this.state.originalJobs, ...resJSON],
          jobs: [...this.state.jobs, ...resJSON],
          isLoadMore: resJSON.length < 50 ? false : true
        })
      }
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
  getLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    }
  }
  getCoordinates = (position) => {
    if(position.coords.latitude && position.coords.longitude) {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })

      this.getUserLocation();
    }
  }
  getUserLocation = () => {
    const API_KEY = 'AIzaSyDSsfy9NRNOQL5tLRAPaGweVtcJ8hy5xNs';

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=${API_KEY}`)
    .then(resp => resp.json())
    .then(data => {
      let userLocation = data.results.length > 0 ? data.results[6].formatted_address : '';

      if(userLocation) {
          // this.filterJobs(null, null, userLocation);
      }
    })
    .catch(error => console.log("error occured while getting user location ", error));
  }
  filterJobs = (search, onlyFullTime, location) => {
    console.log("in filter ", search, onlyFullTime, location);
    let searchParam = search ? search.toLowerCase() : '';
    let locationParam = location ? location.toLowerCase() : '';

    let originalJobs = this.state.originalJobs;
    let filteredJobs = originalJobs.filter((item, index) => {
      if(onlyFullTime && (searchParam !== '' || locationParam !== '')) {
        return item.type === 'Full Time' && (item.location.toLowerCase() === locationParam || item.title.toLowerCase() === searchParam || item.company.toLowerCase() === searchParam);
      } else if(!onlyFullTime && (searchParam !== '' || locationParam !== '')) {
        return item.location.toLowerCase() === locationParam || item.title.toLowerCase() === searchParam || item.company.toLowerCase() === searchParam;
      } else if(onlyFullTime && searchParam === '' && locationParam === '') {
        return item.type === 'Full Time';
      } else {
        return item;
      }
    });

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
  loadMore = () => {
    let page = this.state.page + 1;

    this.setState({
      page
    })

    this.getGithubJobs(page);
  }
  viewJob = (job) => {
    console.log("selected job ", job);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header theme={this.state.theme} changeTheme={this.changeTheme} filterJobs={this.filterJobs} />

          <Switch>
            <Route path='/' exact render={({history}) => {
                return <ViewJobs jobs={this.state.jobs} theme={this.state.theme} loadMore={this.loadMore} isLoadMore={this.state.isLoadMore} viewJob={this.viewJob} history={history}/>
              }} /> 

            <Route path="/jobDetail/:id" render={({history}) => {
                return <JobDetail theme={this.state.theme} history={history} selectedJob={this.state.selectedJob}/>
              }} />
          </Switch>
          
          {/* <ViewJobs jobs={this.state.jobs} theme={this.state.theme} loadMore={this.loadMore} isLoadMore={this.state.isLoadMore}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
