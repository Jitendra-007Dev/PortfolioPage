import React, { Component } from 'react';
import ME from '../PhotosforWeb/ME.jpeg'
import styled from 'styled-components';

const Heading = styled.h1`
font-size:30px; 
font-weight:700;
  letter-spacing:1px;
   text-transform:uppercase; 
   width:160px; 
   text-align:center;
    margin:auto;
     white-space:nowrap; 
     padding-bottom:13px;
        &:after{
            background-color: #c50000;
            content: '';
            display: block;
            height: 3px;
            width: 75px;
            margin - bottom: 5px;
        }
        &:before{
            background-color: #c50000;
            content: '';
            display: block;
            height: 3px;
            width: 75px;
            margin - bottom: 5px;
        }
       `


export default class MainPage extends Component {
    render() {
        return (
            <div className='justify-content-center p-4'
                style={{ marginTop: '100px', }}
            >
                <div className="border border-primary">
                    <div className="card-body m-auto">
                        <Heading className="card-title mt-2">
                            Jitendra Maurya
                        </Heading>
                        {/* <img src={ME} alt="" className="card-img-top" style={{ height: "20rem", width: "20rem" }} /> */}
                        <div className='border border- p-2 mt-2'>
                            <div className="col-12">
                                <div className="text-light">
                                    <ul style={{ listStyle: 'none' }}>
                                        <li>
                                            <h1><u>Introduction :-</u></h1>
                                            <ol type='1'>
                                                <li>This  is  Jitendra  Maurya. </li>
                                                <li>A passionate Programmer.</li>
                                                <li>Persuing B.Sc. in Computer Science</li>
                                            </ol>
                                        </li>
                                        <hr />
                                        <li className='mt-2'>
                                            <h1><u>Education:-</u></h1>
                                            <ol type='1'>
                                                <li>
                                                    Graduation
                                                    <ol className='mb-2' type='i'>
                                                        <li>
                                                            Persuing B.Sc. in computer science with 49.05%
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Intermediate
                                                    <ol className='mb-2' type='i'>
                                                        <li>
                                                            Passed 12th with 86.00%
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Highschool
                                                    <ol className='mb-2' type='i'>
                                                        <li>
                                                            Passed 10th with 84.00%
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>
                                        <hr />
                                        <li>
                                            <h1><u>Skills :-</u></h1>
                                            <ol type='1'>
                                                <li>
                                                    <h3>Main Skills</h3>
                                                    <ol type='i'>
                                                        <li>HTML5/CSS3 </li>
                                                        <li>Bootstrap-5</li>
                                                        <li>Reactjs, JavaScript</li>
                                                    </ol>
                                                </li>
                                                <li>
                                                    Additional Knowledge
                                                    <ol type='i'>
                                                        <li>Python</li>
                                                        <li>
                                                            <p>Python's Library</p>
                                                            <ol type='a'>
                                                                <li>Numpy, Pandas</li>
                                                                <li>Matplotlib, Seaborn</li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>
                                        <hr />
                                        <li>
                                            <h1><u>Projects :-</u></h1>
                                            <ol type='1'>
                                                <li>Build Todo list Prgramme in reatjs. </li>
                                                <li>Build a portfolio website.</li>
                                                <li>Build a Facebook like application</li>
                                            </ol>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
