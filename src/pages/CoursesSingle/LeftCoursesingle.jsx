import React, { useState } from 'react'

import { FaEye } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const LeftCoursesingle = () => {

    const courseDetails = [
        {
            title: 'Requirements',
            items: [
                'Puto discedere c his bonum restinctionis vitarum stultost laetus traduceret mutandi',
                'Liberum quattuor nosse commode pisone splendida veteres gaudeo delectat prodest comparandis',
                'Labores graecorum spem laudi praesidium institutum quicumque musicis inesse ages auditor propensus',
            ],
        },
        {
            title: 'Features',
            items: [
                'Puto discedere c his bonum restinctionis vitarum stultost laetus traduceret mutandi',
                'Liberum quattuor nosse commode pisone splendida veteres gaudeo delectat prodest comparandis',
                'Labores graecorum spem laudi praesidium institutum quicumque musicis inesse ages auditor propensus',
            ],
        },
        {
            title: 'Target Audiences',
            items: [
                'Puto discedere c his bonum restinctionis vitarum stultost laetus traduceret mutandi',
                'Liberum quattuor nosse commode pisone splendida veteres gaudeo delectat prodest comparandis',
                'Labores graecorum spem laudi praesidium institutum quicumque musicis inesse ages auditor propensus',
            ],
        },
    ];

    const [openSections, setOpenSections] = useState({});

    const toggleSection = (index) => {
        setOpenSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };
    return (
        <>
            <div className='leftcoursesingle88'>
                <div className='leftcoursesingle1'>
                    <div className='leftcoursesingle2'>
                        <div className='leftcoursesingle4'>
                            <div className='leftcoursesingle3'>
                                <FaEye />
                                <h6>Overview</h6>
                            </div>
                            <div className='leftcoursesingle3'>
                                <FaEye />
                                <h6>Curriculum</h6>
                            </div>
                            <div className='leftcoursesingle3'>
                                <FaUserTie />
                                <h6>Instructor</h6>
                            </div>
                            <div className='leftcoursesingle3'>
                                <AiFillQuestionCircle />
                                <h6>FAQs</h6>
                            </div>
                            <div className='leftcoursesingle3'>
                                <FaMessage />
                                <h6>Reviews</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {courseDetails.map((section, index) => (
                        <div key={index} className='leftcoursesingle5'>
                            <h3 onClick={() => toggleSection(index)}>
                                {section.title}{' '}
                                {openSections[index] ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </h3>
                            {openSections[index] && (
                                <div className='leftcoursesingle6'>
                                    <div className='leftcoursesingle7'>
                                        <ul>
                                            {section.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>
                                                    <FaCheck /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default LeftCoursesingle