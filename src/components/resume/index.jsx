import React from "react";

const Resume = () => {
	return (
		<section className="resume container">
			<div className="section-title">
				<h2>Summary</h2>
				<h4>Resume</h4>
			</div>

			<div className="section-content">
				<div className="row">
					<div>
						<h3>My Education</h3>

						<ul className="experience">
							<li>
								<span>2000-2004</span>
								<h4>Computer Science</h4>
								<h6>International University</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quidem, nemo? Omnis
									ratione rerum vero nulla?
								</p>
							</li>
							<li>
								<span>2000-2004</span>
								<h4>Computer Science</h4>
								<h6>International University</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quidem, nemo? Omnis
									ratione rerum vero nulla?
								</p>
							</li>
							<li>
								<span>2000-2004</span>
								<h4>Computer Science</h4>
								<h6>International University</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quidem, nemo? Omnis
									ratione rerum vero nulla?
								</p>
							</li>
						</ul>
					</div>
					<div>
						<h3>My Experience</h3>

						<ul className="experience">
							<li>
								<span>2000-2004</span>
								<h4>Computer Science</h4>
								<h6>International University</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quidem, nemo? Omnis
									ratione rerum vero nulla?
								</p>
							</li>
							<li>
								<span>2000-2004</span>
								<h4>Computer Science</h4>
								<h6>International University</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quidem, nemo? Omnis
									ratione rerum vero nulla?
								</p>
							</li>
							<li>
								<span>2000-2004</span>
								<h4>Computer Science</h4>
								<h6>International University</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quidem, nemo? Omnis
									ratione rerum vero nulla?
								</p>
							</li>
						</ul>
					</div>
				</div>

				<div className="skills">
					<h3>My Skills</h3>
					<div className="row">
						<ul>
							<li>
								<h6>
									<span>Web Design</span>
									<span>85%</span>
								</h6>
								<div className="progress">
									<span></span>
								</div>
							</li>
							<li>
								<h6>
									<span>Javascript</span>
									<span>85%</span>
								</h6>
								<div className="progress">
									<span></span>
								</div>
							</li>
							<li>
								<h6>
									<span>AngularJS</span>
									<span>85%</span>
								</h6>
								<div className="progress">
									<span></span>
								</div>
							</li>
						</ul>
						<ul>
							<li>
								<h6>
									<span>HTML/CSS</span>
									<span>85%</span>
								</h6>
								<div className="progress">
									<span></span>
								</div>
							</li>
							<li>
								<h6>
									<span>ReactJS</span>
									<span>85%</span>
								</h6>
								<div className="progress">
									<span></span>
								</div>
							</li>
							<li>
								<h6>
									<span>NextJS</span>
									<span>85%</span>
								</h6>
								<div className="progress">
									<span></span>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className="text-center">
					<button className="btn">
						Download CV <i className="fa-solid fa-download"></i>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Resume;
