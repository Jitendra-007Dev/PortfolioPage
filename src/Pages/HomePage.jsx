import React, { useState, useEffect } from 'react';
import '../App.css'
import { Card } from '../Components/HomePage/Card_';
import DardRed from '../PhotosforWeb/DardRed.jpg'


const HomePage = () => {
    const [comment, setComment] = useState('')

    function handleComment(e) {
        e.preventDefault();
        setComment(e.target.value)
    }

    function handleCommentClick(e) {
        e.preventDefault();
        // $('#myModal').modal('hide')
        alert('Your Comment is Commented : ')
        setComment('')
    }

    const cards = [
        {
            image: DardRed,
            title: "this is title",
            description: "This is new post comment or like and also share it on your timeline"
        },
        {
            image: DardRed,
            title: "this is title",
            description: "This is new post comment or like and also share it on your timeline"
        },
        {
            image: DardRed,
            title: "this is title",
            description: "This is new post comment or like and also share it on your timeline"
        },
        {
            image: DardRed,
            title: "this is title",
            description: "This is new post comment or like and also share it on your timeline"
        },
        {
            image: DardRed,
            title: "this is title",
            description: "This is new post comment or like and also share it on your timeline"
        },
        {
            image: DardRed,
            title: "this is title",
            description: "This is new post comment or like and also share it on your timeline"
        },
        {
            image: DardRed,
            title: "this is title",
            description: "This is new post comment or like and also share it on your timeline"
        },
        {
            image: DardRed,
            title: "this is title",
            description: "This is new post comment or like and also share it on your timeline"
        }
    ]


    return (
        <>
            <div className='d-flex justify-content-center flex-wrap'>
                {
                    cards?.map((item) => {
                        return (
                            <Card
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        )
                    })
                }
            </div>


            {/* this is modal for handling comments of the user  */}
            <div className="modal mt-5" tabIndex={-1} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Comment</h4>
                            <button className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" className="form">
                                <label htmlFor="comment" className="form-label">Enter your comment</label>
                                <textarea name="comment" onChange={handleComment}
                                    value={comment} id="comment"
                                    cols="" rows="" className="form-control"></textarea>
                            </form>
                            <div className="p-2">
                                <button
                                    className="btn btn-success mt-3"
                                    onClick={handleCommentClick}
                                    data-bs-dismiss='modal'
                                    aria-label='Save'>Save Changes</button>
                                <button
                                    className="btn btn-danger float-end mt-3"
                                    data-bs-dismiss='modal'
                                    aria-label='Close'>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage;