import React, { useState } from "react";


import img from '../../assest/img28.webp'
import img1 from '../../assest/application.png'
import img2 from '../../assest/c8 - Copy.png'

const storiesData = [
    { id: 1, name: "Felix Deo", image: img1, avatar: img },
    { id: 2, name: "Jenny Wilson", image: img1, avatar: img },
    { id: 3, name: "Freya Davies", image: img1, avatar: img },
    { id: 4, name: "Robert Fox", image: img2, avatar: img },
    { id: 5, name: "Leslie Alexander", image: img2, avatar: img },
    // Add more stories here
];

const Stories = () => {
    const [selectedStory, setSelectedStory] = useState(null);

    const handleStoryClick = (story) => {
        setSelectedStory(story); // Open the story modal when a user is clicked
    };

    const closeModal = () => {
        setSelectedStory(null); // Close the story modal
    };

    return (
        <div className="stories-container">
            <div className="stories-scroll">
                {storiesData.map((story) => (
                    <div className="story" key={story.id} onClick={() => handleStoryClick(story)}>
                        <img className="story-image" src={story.image} alt={story.name} />
                        <div className="story-avatar-container">
                            <img className="story-avatar" src={story.avatar} alt={story.name} />
                        </div>
                        <p className="story-name">{story.name}</p>
                    </div>
                ))}
            </div>

            {selectedStory && (
                <div className="story-modal" onClick={closeModal}>
                    <div className="story-modal-content">
                        <img src={selectedStory.image} alt={selectedStory.name} />
                        <p>{selectedStory.name}'s Story</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stories;
