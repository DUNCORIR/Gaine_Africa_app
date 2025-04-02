import React from 'react';
import './TeamVideo.css'; // Create this CSS file

const TeamVideo = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        {/* Host on YouTube/Vimeo and embed */}
        <iframe 
          width="100%"
          height="500"
          src="https://www.loom.com/share/fc52c70a0aeb4d5eb1b9b5c22dd362d6?sid=cee54e9b-2f68-4dc1-a99b-c75b54026b39"
          title="Gaine Africa Project Overview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        
        <div className="video-captions">
          <h2>Meet the Team Behind Gaine Africa</h2>
          <p>In this video, we share:</p>
          <ul>
            <li>👥 Team introductions and roles</li>
            <li>💡 Our inspiration for tackling agricultural challenges</li>
            <li>⭐ Key features demo: Records tracking, Market predictions</li>
            <li>🚀 Future roadmap and sustainability plans</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TeamVideo;
