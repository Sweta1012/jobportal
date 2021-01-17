import React from 'react';

function JobDetail(props) {

    return (
        <div className={props.theme === 'light' ? 'view-wrapper' : 'view-wrapper-dark'}>
            <div className="product-list">
                
            </div>               
        </div>
    );
}

export default JobDetail;