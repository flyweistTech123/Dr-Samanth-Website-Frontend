import React from 'react'

import { FiSearch } from "react-icons/fi";


const LeftMembers = () => {
    return (
        <>
            <div className='leftmembers'>
                <div className='leftmembers1'>
                    <div className='leftmembers2'>
                        <div className='leftmembers3'>
                            <form action="#" method="get" id="search-members-form">
                                <div className="search-input">
                                    <input type="text" className="form-control" name="members_search" id="members_search" placeholder="Search Members..." />
                                    <button type="submit" id="members_search_submit" className="btn-search" name="members_search_submit">
                                        <FiSearch color='white' size={20} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='leftmembers4'>
                    <div className='leftmembers5'>
                        <form action="" method="post" id="members-directory-form" className="dir-form">
                            <div className='leftmembers6'>
                                <div className='leftmembers7'>
                                    <div className='leftmembers8'>
                                        <div className='leftmembers9'>
                                            <ul>
                                                <li>
                                                    <a href="https://wordpress.iqonic.design/product/wp/socialv/members/">All Members</a>
                                                    <span className="count">22</span>
                                                </li>
                                                <li>
                                                    <a href="https://wordpress.iqonic.design/product/wp/socialv/members/">All Members</a>
                                                    <span className="count">22</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftMembers