import avatar_icon from "../assets/avatar_icon.png"

const Bio = () => {
    return (
      <div className="bio-container">
        <img 
        src={avatar_icon} 
        alt="Avatar"
        className="bio-image" />
        <h2>Hello my friends! </h2>
        <p>I still have a long way to go, but the small steps I've taken have brought me here.</p>
      </div>
    );
  };

  export default Bio;