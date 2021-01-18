import React from 'react';
import ReactDOM from 'react-dom';
import ViewJobs from '../components/ViewJobs';

it("renders without crashing", ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<ViewJobs></ViewJobs>, div);
})