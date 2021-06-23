import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Skills() {


    return (
        <div id="skills">
           <h2>React JS</h2>
            <ProgressBar striped variant="info" now={95} />
            <h2>TypeScript</h2>
            <ProgressBar striped variant="info" now={90} />
            <h2>JavaScript</h2>
            <ProgressBar striped variant="info" now={97} />
            <h2>React Redux</h2>
            <ProgressBar striped variant="info" now={95} />
            <h2>React-GraphQl</h2>
            <ProgressBar striped variant="info" now={80} />
            <h2>React Formik</h2>
            <ProgressBar striped variant="info" now={95} />
            <h2>React BootStrap</h2>
            <ProgressBar striped variant="info" now={95} />
            <h2>Material UI</h2>
            <ProgressBar striped variant="info" now={90} />
            <h2>HTML & CSS</h2>
            <ProgressBar striped variant="info" now={90} />

        </div>
        )
}