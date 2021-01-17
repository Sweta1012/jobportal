import { Component } from 'react';
import './App.css';
import ViewJobs from './components/ViewJobs';
import Header from './components/header';
class App extends Component {

  state = {
    originalJobs: [],
    jobs: [],
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
    
    this.getGithubJobs();
    this.getLocation();
  }
  getGithubJobs = () => {
    fetch(`/positions.json?page=${this.state.page}`)
    .then((res) => res.json())
    .then(resJSON => {
      
      if(resJSON && resJSON.length > 0) {
        this.setState({
          originalJobs: [...this.state.originalJobs ,resJSON],
          jobs: resJSON,
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
    let originalJobs = this.state.originalJobs;
    let filteredJobs = originalJobs.filter((item, index) => {
      if(onlyFullTime && (search !== '' || location !== '')) {
        console.log("1 ");

        return item.type === 'Full Time' && (item.location === location || item.title === search || item.company === search);
      } else if(!onlyFullTime && (search !== '' || location !== '')) {
        console.log("in location");

        return item.location === location || item.title === search || item.company === search;
      } else if(onlyFullTime && search === '' && location === '') {
        console.log("3 ");

        return item.type === 'Full Time';
      } else {
        console.log("4 ");

        return item;
      }
    });

    console.log("filtered jobs ", filteredJobs);

    if(!onlyFullTime && !search && !location) {
      console.log("in this ", this.state.originalJobs);
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

    this.getGithubJobs();
  }

  render() {
    return (
      <div className="App">
        <Header theme={this.state.theme} changeTheme={this.changeTheme} filterJobs={this.filterJobs} />
        <ViewJobs jobs={this.state.jobs} theme={this.state.theme} loadMore={this.loadMore} isLoadMore={this.state.isLoadMore}/>
      </div>
    );
  }
}

export default App;
