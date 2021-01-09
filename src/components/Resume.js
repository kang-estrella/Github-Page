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
                                    <i className="fab fa-2x fa-css3-alt"></i>
                                </span>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <h1 className="title is-size-4">Bulma?</h1>
                                    <p className="is-size-5">
                                        Bulma is a modern CSS framework from @jgthms, based on Flexbox.
										Using Bulma, we can describe our website's design using just classes. <span class="emoticon">ᕕ( ᐛ )ᕗ</span>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="column">
                        <article className="media notification is-primary">
                            <figure className="media-left">
                                <span className="icon is-medium">
                                    <i className="fas fa-2x fa-align-justify"></i>
                                </span>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <h1 className="title is-size-4">…Flexbox?</h1>
                                    <p className="is-size-5">
                                        Flexbox is a CSS spec that makes sectioning and aligning more natural.
										We don't need to know Flexbox but it's how Bulma works behind-the-scenes. <span class="emoticon">⦤(^ー^)⦥</span>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="column">
                        <article className="media notification is-warning">
                            <figure className="media-left">
                                <span className="icon is-medium">
                                    <i className="fas fa-2x fa-shield-alt"></i>
                                </span>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <h1 className="title is-size-4">…Classes?</h1>
                                    <p className="is-size-5">
                                        Instead of writing our CSS per-element, we can use predefined classes.
										With enough classes, we can describe our website design using semantics. <span class="emoticon">٩(^ᴗ^)۶</span>
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