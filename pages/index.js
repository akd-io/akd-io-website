import Head from 'next/head';
import './index.scss';

export default () => (
  <>
    <Head>
      <title>Anders Kjær Damgaard</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta
        name="description"
        content="The website of Anders Kjær Damgaard, a Software Developer based in Copenhagen."
      />
      <meta
        name="keywords"
        content="Anders Kjær Damgaard,frontend,web,software,developer,development"
      />
      <meta name="robots" content="index,follow" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" />
    </Head>
    <div className="card">
      <div className="profile-picture-container">
        <img src="static/picture.png" />
      </div>
      <h1 className="name">Anders Kjær Damgaard</h1>
      <h2 className="position">Software Developer</h2>
      <h3 className="location">Copenhagen, Denmark</h3>
      <p className="description">
        Software development and computer science is an old, long-lasting passion of mine. A passion
        that my curiosity has always led me to, and one that I am currently enjoying, doing frontend
        development using modern web technologies.
      </p>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/anders-damgaard/">LinkedIn</a>
        <a href="https://github.com/akd-io">GitHub</a>
        <a href="mailto:akd@akd.io">Email</a>
      </div>
    </div>
  </>
);
