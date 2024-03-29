
import React from 'react'
import {Link } from 'react-router-dom'
import { Dropdown ,OverlayTrigger,Tooltip} from 'react-bootstrap'

const TodoListCard =(props) =>{
    return(
            <div id={`list-draggable-item-${props.id}`}>
                <div className={`draggable-item todo-list-card ${props.className}`}>
                    <div className="item-body">
                        <div>
                            <h5>{props.title}</h5>
                            <p className="text-ellipsis short-1 mb-0"> {props.desc}</p>
                        </div>
                        <div className="action-list">
                            <div className="pr-3">
                            
                            </div>
                        </div>
                            
                            <div className="pr-3">
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Share</Tooltip>}
                            >
                                <Link to="#" className=' mr-3'>
                                    <svg className="svg-icon" width="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                    </svg>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Download</Tooltip>}
                            >
                                <Link to="#">
                                    <svg className="svg-icon" width="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </Link>
                            </OverlayTrigger>
                            </div>
                        </div>
                    </div>
                </div>
            )
}
export default TodoListCard