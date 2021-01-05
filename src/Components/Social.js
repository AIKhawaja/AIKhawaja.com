import React, {Component} from 'react';

class SocialIcon extends Component {
    render() {
        const { link, name } = this.props;
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={`${window.location.origin}/icons/${name}.svg`} alt={`${name} logo`} />
            </a>
        );
    }
}

class Social extends Component {
    render() {
        return(
            <div className="social">
                <SocialIcon link="http://github.com/AIKhawaja" name="github" />
                <SocialIcon link="http://www.linkedin.com/in/AIKhawaja" name="linkedin" />
                <SocialIcon link="mailto:ahmedkhawaja21@gmail.com" name="email2" />
                <SocialIcon link="http://www.twitter.com/AIKhawaja" name="twitter" />
            </div>
        )
    }
}

export default Social;
