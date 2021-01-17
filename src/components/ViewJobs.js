import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';

function ViewJobs(props) {

    const viewJob = (job) => {
        props.viewJob(job);
        props.history.push('/jobDetail');
    }

    return (
        <div className={props.theme === 'light' ? 'view-wrapper' : 'view-wrapper-dark'}>
            <div className="product-list">
                {
                    props.jobs.length > 0 ? 
                        <div>
                            <div className="job-cards">
                                {
                                    props.jobs.map((item, index) => {
                                        return(
                                            <Card style={{ width: '18rem', height: '255px' }} className={props.theme === 'light' ? 'light-card' : 'dark-card'} name={item.title} id={`job-${item.id}`}  key={index}>
                                                <Card.Body className="job-body" onClick={e => viewJob(item)}>
                                                    <Card.Subtitle style={{ height: '25%' }} className="mb-2 text-muted">{item.created_at} - {item.type}</Card.Subtitle>

                                                    <div style={{ height: '65%' }}>
                                                        <Card.Title  className={props.theme === 'light' ? '' : 'dark-text'}>{item.title}</Card.Title>
                                                        <Card.Subtitle  className="mb-2 text-muted">{item.company}</Card.Subtitle>
                                                    </div>
                                                    <Card.Link href="#" style={{ color: '#5865E0', height: '10%' }}>{item.location}</Card.Link>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })
                                }

                            </div>  
                            {
                                props.isLoadMore ?  <div className="loadmore-wrap">
                                                        <Button variant="contained" color="primary" onClick={props.loadMore} >Load More</Button>
                                                    </div> : null
                            }
                        </div>
                        :  <div>
                            No Jobs Found Matching Your Criteria
                        </div>
                }
            </div>               
        </div>
    );
}

export default ViewJobs;