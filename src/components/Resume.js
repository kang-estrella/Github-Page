import React from 'react';
import 'bulma/css/bulma.css';

function ResumeHead() {
    return (
        <section className="hero is-dark">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        I am a Consultant
                    </h1>
                    <h2 className="subtitle">
                        ...with following skills.
                    </h2>
                </div>
            </div>
        </section>
    )
}
function ResumeSection() {
    return (
        <section className="section has-background-light">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <article className="media notification is-info">
                            <figure className="media-left">
                                <span className="icon is-medium">
                                    <i className="fas fa-2x fa-cogs"></i>
                                </span>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <h1 className="title is-size-4">Logical Thinking</h1>
                                    <p className="is-size-5">
                                        AAAAA AAAAA AAAAA AAAAA AAAAA AAAAA AAAAA AAAAA AAAAA AAAAA
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="column">
                        <article className="media notification is-primary">
                            <figure className="media-left">
                                <span className="icon is-medium">
                                    <i className="fas fa-2x fa-comments"></i>
                                </span>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <h1 className="title is-size-4">Communication</h1>
                                    <p className="is-size-5">
                                        BBBBB BBBBB BBBBB BBBBB BBBBB BBBBB BBBBB BBBBB BBBBB BBBBB
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="column">
                        <article className="media notification is-warning">
                            <figure className="media-left">
                                <span className="icon is-medium">
                                    <i className="fas fa-2x fa-code"></i>
                                </span>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <h1 className="title is-size-4">Development</h1>
                                    <p className="is-size-5">
                                        CCCCC CCCCC CCCCC CCCCC CCCCC CCCCC CCCCC CCCCC CCCCC CCCCC
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Resume() {
    return (
        <div>
            <ResumeHead />
            <ResumeSection />
        </div>
    )
}

export default Resume;