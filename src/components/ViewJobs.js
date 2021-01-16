import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class ViewJobs extends Component {
    constructor(props) {
		super(props);
	}

    viewJob = (job) => {
        console.log("selected job ", job);
        console.log("selected theme ", this.props.theme);
        // this.props.history.push('/jobDetail');
    }

    render() {
        return (
            <div className={this.props.theme === 'light' ? 'view-wrapper' : 'view-wrapper-dark'}>
                <div className="product-list">
                        <div className="job-cards">
                            {
                                this.props.jobs.map((item, index) => {
                                    return(
                                        <Card style={{ width: '18rem', height: '255px' }} className={this.props.theme === 'light' ? 'light-card' : 'dark-card'} name={item.title} id={`job-${item.id}`}  key={index}>
                                            <Card.Body className="job-body" onClick={e => this.viewJob(item)}>
                                                <Card.Subtitle style={{ height: '25%' }} className="mb-2 text-muted">{item.created_at} - {item.type}</Card.Subtitle>

                                                <div style={{ height: '65%' }}>
                                                    <Card.Title  className={this.props.theme === 'light' ? '' : 'dark-text'}>{item.title}</Card.Title>
                                                    <Card.Subtitle  className="mb-2 text-muted">{item.company}</Card.Subtitle>
                                                </div>
                                                <Card.Link href="#" style={{ color: '#5865E0', height: '10%' }}>{item.location}</Card.Link>
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