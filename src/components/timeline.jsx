import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Working at Tata Consultancy Services <span>2014-present</span></h2>
                        <p>It's been a 5yr journey with TCS, I got good opportunities to explore on multiple technologies for building web and mobile based applications. We have a build a solution called mMortgage which involves helping lenders, banking and financial institution to digitize the customer touch points providing a frictionless consumer experience.</p>
                        <p>Most of the applications are focused latest IT trends like Artificial Inteligence, Machine Learning, Deep Learning and Cloud Computing.</p><p>We have movied to Business 4.0 focusing on disruptive and innovative technologies like Internet of Things (IoT), artificial intelligence (AI), cloud, analytics and others are changing business models and driving exponential growth </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduated from Dhanalakshmi College of Engineering <span>2010-2014</span></h2>
                        <p>I graduated from Dhanalakshmi Engineering College, affliated to Anna University. It was very challenging journey I did lot of self learning to understand the engineering concepts. My interest towards Computers helped me to learn a lot about new technologies.</p>
                        <p>I researched on Network Security, Ethical Hacking , Web Programing and particpated in lot of workshops which helped me what is expected from IT Industry.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education @ Chinmaya Vidyala <span>1995-2010</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Computer Science,Physics,Chemistry & Maths with 92 merit. School Days were the best days of my life, Annual Day Function Practices , Sports Day Events, English Literature School Plays, Band Practice and Inter school Cultural Events were good memories to cherish.  </p>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
