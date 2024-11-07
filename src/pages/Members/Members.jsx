import React from 'react'
import TopPart from '../../components/CommonComponent/TopPart'

import './Members.css'
import HOC from '../../components/HOC/HOC'
import LeftMembers from './LeftMembers'

const Members = () => {
    return (
        <>
            <TopPart />
            <div className='memebers'>
                <div className='memebers1'>
                    <div className='memebers2'>
                        <div className='memebers3'>
                            <LeftMembers/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Members)