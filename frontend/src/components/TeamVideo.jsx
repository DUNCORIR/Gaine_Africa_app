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
          src="https://www.loom.com/share/27b96be69efa4871a2f72d0aefab5818?sid=a483fae6-a562-4c31-94f8-e685cb7728c1"
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
