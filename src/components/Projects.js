import React from 'react';
import { useState } from 'react';
import moon_cat from "../assets/moon_cat.jpg"
import sofa_cat from "../assets/sofa_cat.png"
import './Project.css';
    
const Project = () => {
    const [likeCount, setLikeCount] = useState(0);
      
    const handleLikeClick = () => {
        setLikeCount(likeCount + 1); 
    };

    const [clickCount, setClickCount] = useState(0);
      
    const handleClick = () => {
        setClickCount(clickCount + 1); 
    };

    
    return (
       <div className="card-container">
          <div className='card'>
             <img 
               src={sofa_cat}
               alt="Card" 
               className="card-img" 
             />
             <div className="card-body">
             <h3 className="card-title">Poet</h3>
             <p className="card-text">The words I write are another version of myself.
                 Check out my Instagram!</p>
             <button className="card-btn" onClick={handleLikeClick}>Like:{likeCount}</button>
             </div>
           </div>
           <div className='card'>
             <img 
               src={moon_cat}
               alt="Card" 
               className="card-img" 
             />
             <div className="card-body">
             <h3 className="card-title">Developer</h3>
             <p className="card-text">It's never too late to start something new!</p>
             <button className="card-btn" onClick={handleClick}>Like:{clickCount}</button>
             </div>
           </div>
        </div>
      );
    };
    
    export default Project;