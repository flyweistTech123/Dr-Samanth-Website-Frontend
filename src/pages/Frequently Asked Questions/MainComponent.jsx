import React, { useState } from 'react'

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";


const MainComponent = () => {

    const faqData = [
        {
            id: 1,
            question: "How to upload a post in SocialV?",
            answer: "By using an upload box, you can upload a post manually or embedding URL.",
            reference: "https://youtu.be/VqHjy54UqVg"
        },
        {
            id: 2,
            question: "How to schedule a post?",
            answer: "You can schedule a post by setting a future date in the schedule section.",
            reference: "https://youtu.be/VqHjy54UqVg"
        },
        {
            id: 3,
            question: "How to upload a post in SocialV?",
            answer: "By using an upload box, you can upload a post manually or embedding URL.",
            reference: "https://youtu.be/VqHjy54UqVg"
        },
        {
            id: 4,
            question: "How to schedule a post?",
            answer: "You can schedule a post by setting a future date in the schedule section.",
            reference: "https://youtu.be/VqHjy54UqVg"
        },
        {
            id: 1,
            question: "How to upload a post in SocialV?",
            answer: "By using an upload box, you can upload a post manually or embedding URL.",
            reference: "https://youtu.be/VqHjy54UqVg"
        },
        {
            id: 2,
            question: "How to schedule a post?",
            answer: "You can schedule a post by setting a future date in the schedule section.",
            reference: "https://youtu.be/VqHjy54UqVg"
        },
        {
            id: 3,
            question: "How to upload a post in SocialV?",
            answer: "By using an upload box, you can upload a post manually or embedding URL.",
            reference: "https://youtu.be/VqHjy54UqVg"
        },
        {
            id: 4,
            question: "How to schedule a post?",
            answer: "You can schedule a post by setting a future date in the schedule section.",
            reference: "https://youtu.be/VqHjy54UqVg"
        },
        // Add more FAQs here
    ];

    const [openIndex, setOpenIndex] = useState(null);

    // Function to handle FAQ click
    const handleFaqClick = (index) => {
        // If the same index is clicked, close it (set to null), otherwise open the clicked one
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <>
            <div className='faqs'>
                <div className='faqs1'>
                    <div className='faqs2'>
                        <h2>Find the answers to our mostly asked<br/> questions</h2>
                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose<br/> injected humour and the like.  </p>
                    </div>
                    <div className='faqs3'>
                        {faqData.map((faq, index) => (
                            <div className='faqs4' key={index}>
                                <div className='faqs5' onClick={() => handleFaqClick(index)}>
                                    <h6
                                        style={openIndex === index
                                            ? { color: "#2f65b9", paddingBottom: "1.1em" }
                                            : {}}>
                                        {faq.question}
                                    </h6>
                                    <div className='faqs6'>
                                        {/* Display arrow depending on whether the FAQ is open */}
                                        {openIndex === index ? (
                                            <span className="active">
                                                <IoIosArrowDown color='white' size={23} />
                                            </span>
                                        ) : (
                                            <span className="inactive">
                                                <IoIosArrowForward color='white' size={23} />
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {/* Show the answer and link only if this FAQ is open */}
                                {openIndex === index ? (
                                    <div className='faqs7'>
                                        <p>
                                            {faq.answer}
                                            <br />
                                            <b>More References :</b>
                                            <a href={faq.reference} target="_blank" rel="noopener noreferrer"> Check Video Link</a>
                                        </p>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainComponent