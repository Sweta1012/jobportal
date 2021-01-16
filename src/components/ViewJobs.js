import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class ViewJobs extends Component {
    constructor(props) {
		super(props);
		
		this.state = {
            selectedJob: {},
            showViewJobs: true
		}
	}

    getJob = (job) => {
        console.log("selected job ", job);
    }

    render() {
        return (
            <div className="view-wrapper">
                <div className="product-list">
                        <div className="job-cards">
                            {
                                this.props.jobs.map((item, index) => {
                                    return(
                                        <Card style={{ width: '18rem', height: '255px' }} name={item.title} id={`job-${item.id}`}  key={index}>
                                            <Card.Body className="job-body" onClick={e => this.getJob(item)}>
                                                <Card.Subtitle className="mb-2 text-muted">{item.created_at} - {item.type}</Card.Subtitle>

                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{item.company}</Card.Subtitle>
                                                <Card.Link href="#">{item.location}</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            }
                        </div>                                
                </div>               
            </div>
        );
    }
}

export default ViewJobs;