import React, {Component, useState} from 'react';

class ViewJobs extends Component {

    state = {
        jobs: [
            {title: 'Front End DEV 1', company: 'abc', location: 'xyz'},
            {title: 'Front End DEV 2', company: 'abc', location: 'xyz'},
            {title: 'Front End DEV 3', company: 'abc', location: 'xyz'},
            {title: 'Front End DEV 4', company: 'abc', location: 'xyz'}
        ],
    }

    getJob = (event) => {
        console.log("hi",event.currentTarget.getAttribute('title'))
        let jobId = event.currentTarget.id
        let jobName = this.state.jobs
        jobName = event.currentTarget.getAttribute('title')

        this.setState({
            jobs: jobId,
        })
    }

    render() {
        return (
            <div className="wrapper">
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
                <div className="product-list">
                    Jobs cards
                    {   this.state.jobs.map((item, index) => {
                            return(
                                <div className="prod" name={item.title} id={`prod-${index}`}  key={index} onClick={this.getJob}>
                                    {item.title}
                                </div>
                            )
                        })
                    }
                </div>               
            </div>
        );
    }
}

export default ViewJobs;