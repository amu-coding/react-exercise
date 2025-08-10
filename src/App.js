import './App.css';

function App() {
  return (
    <div className="card">
      <img src="../uploads/profilepic" alt="profile"></img>
      <h1>Hi, I'm <span>Shiba</span></h1>
      <p className="role">Front-End Web Developer - Afghanistan</p>
      <p className="desc">Specializes in creating responsive, user-friendly interfaces using HTML, CSS, and JavaScript. Focused on delivering seamless user experiences through modern web technologies.</p>
      <div className="social">
        <div>
          <img src="../uploads/github" alt="github icon"></img>
        </div>
        <div>
          <img src="uploads/twitter" alt="twitter icon"></img>
        </div>
        <div>
          <img src="uploads/tiktok" alt="tiktok icon"></img>
        </div>
        <div>
          <img src="uploads/whatsapp" alt="whatsapp icon"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
