import React from 'react'

export const Card = (props) => {
    return (
        <div className="card text-dark p-3 m-3" style={{ width: "20rem" }}>
            <img src={props.image} alt="Nothing" className="card-img-top DardRed" style={{ height: "20rem" }} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <button
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Comment
                </button>
            </div>
        </div>
    )
}
