import github from '../uploads/github.png';
import twitter from '../uploads/twitter.png';
import tiktok from '../uploads/tiktok.png';
import whatsapp from '../uploads/whatsapp.png';

function SocialLinks () {
    return (
        <div className="social">
        <div className="iconcard">
          <img src={github} alt="github icon"></img>
        </div>
        <div className="iconcard">
          <img src={twitter} alt="twitter icon"></img>
        </div>
        <div className="iconcard">
          <img src={tiktok} alt="tiktok icon"></img>
        </div>
        <div className="iconcard">
          <img src={whatsapp} alt="whatsapp icon"></img>
        </div>
      </div>
    );
}

export default SocialLinks;