import image from '../assets/vladlunasan.jpg';

const Landing = () => {
	return (
		<div id="landing">
			<div className="landing-intro">
				<h1>Vlad Luna</h1>
				<h2>Full-Stack Developer</h2>
				<div className="landing-info">
					<div className="landing-about">
						<p>Passionate web developer and creator of great software applications.</p>
					</div>
					<div className="landing-image">
						<img className="profileimg" src={image} alt="Vlad Luna" />
					</div>
				</div>
				<div className="landing-links">
					<span>Nice to meet you!</span>
					<div className="media-links">
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/noomdalv" className="media-icon">
							<i className="fab fa-github-square"></i>
						</a>
						<a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/vladlunasan" className="media-icon">
							<i className="fab fa-linkedin"></i>
						</a>
						<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/noomdalv" className="media-icon">
							<i className="fab fa-twitter-square"></i>
						</a>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Landing;
