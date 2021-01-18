import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';

function ViewJobs(props) {

    return (
        <div className={props.theme === 'light' ? 'view-wrapper' : 'view-wrapper-dark'}>
            {
                props.isFilterPanel === true ? 
                <div>
                    {
                        props.jobs.length > 0 ? 
                            <div>
                                <div className="job-cards-wrap">
                                    <div className="job-cards">
                                        {
                                            props.jobs.map((item, index) => {
                                                return(
                                                    <Card style={{ width: '18rem', height: '255px' }} className={props.theme === 'light' ? 'light-card' : 'dark-card'} name={item.title} id={`job-${item.id}`}  key={index}>
                                                        <Card.Body className="job-body" onClick={e => props.viewJob(item)}>
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

                : <div className="job-wrap">
                        {
                            props.selectedJob && props.selectedJob.map((item, index) => {
                                return (
                                    <div key={index} style={{ width: '70%' }}>
                                        <Card className={props.theme === 'light' ? 'light-card' : 'dark-card'} name={item.title} id={`job-${item.id}`} >
                                            <Card.Body className="job-body">
                                                <Card.Subtitle style={{ height: '13%' }} className="mb-2 text-muted">Job Type - {item.type}</Card.Subtitle>

                                                <div className="job-heading">
                                                    <div>
                                                        <Card.Title style={{ marginBottom: '0' }} className={props.theme === 'light' ? '' : 'dark-text'}>{item.title}</Card.Title>
                                                        <Card.Link href="#" style={{ color: '#5865E0', height: '10%' }}>{item.location}</Card.Link>
                                                    </div>
                                                    <div>
                                                        <button className="apply-btn">
                                                            <a className="apply-link" target="_blank" rel="noreferrer" href={item.url}>Apply Now</a>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div style={{ padding: '4rem', marginBottom: '1rem'}} className={props.theme === 'light' ? '' : 'dark-text'}>
                                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                </div>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ marginTop: '5rem', marginBottom: '5rem' }} className="how-to-apply" name={item.title} id={`job-${item.id}`}>
                                            <Card.Body className="job-body">
                                                <div>
                                                    <Card.Title style={{ marginBottom: '1.875rem', fontSize: '22px' }} className="dark-text">How To Apply</Card.Title>
                                                </div>
                                                   
                                                <div>
                                                    <span className="apply-link" dangerouslySetInnerHTML={{__html: item.how_to_apply}}></span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                  </div> 
            }          
        </div>
    );
}

export default ViewJobs;