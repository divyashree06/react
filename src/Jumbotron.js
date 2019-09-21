import React from 'react';

const Jumbotron = (prop) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">{prop.title}</h1>
                <p className="lead">{prop.lead}</p>
                <hr className="my-4" />
                <p>{prop.description}</p>
                <a className="btn btn-primary btn-lg" 
                href="#" role="button">{prop.linkLabel}</a>
            </div>
        </div>
    )
}

export default Jumbotron;