import React from 'react';

const Jumbotron = (prop) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">{prop.title}</h1>
                <p className="lead">{prop.lead}</p>
                <hr className="my-4" />
                <p>{prop.description}</p>

                <div className="form-row align-items-center">
                    <div className="col-auto my-1 col-sm-4">
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col-auto my-1">
                        <button 
                        type="submit"
                        className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;