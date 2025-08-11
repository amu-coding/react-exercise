import ProfileImg from './ProfileImg';
import Title from './Title';
import Role from './Role';
import Description from './Description';
import SocialLinks from './SocialLinks';

function Card () {
    return (
        <div className="card">
            <ProfileImg />
            <Title />
            <Role />
            <Description />
            <SocialLinks />
        </div>
    );
}

export default Card;