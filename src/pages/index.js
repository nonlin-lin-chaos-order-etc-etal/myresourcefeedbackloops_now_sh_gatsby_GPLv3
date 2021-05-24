import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>🐸🚀🌌+∞¤myfeedbacksloops.now.sh</title>
      </Helmet>
      <h1>⊙🐸🚀🌌+∞¤💎🧙🐝💞🏡🌈🐁💚 et cetera et al 🠞 my resources feedbacks loops</h1>
      <p>(* <a href="https://myzone.now.sh/">the central site for this shepherd's ( vis vitalis ↝↠⇉ ±∞ ) outpost</a> *)</p>
      <p>(* <a href="https://myresourcesfeedbacksloops.now.sh/">this site's facade</a> *)</p>
      <p>(* <a href="https://github.com/nonlin-lin-chaos-order-etc-etal/myresourcefeedbackloops_now_sh_gatsby_GPLv3">this site's GPL3 source code repo at GitHub</a> *)</p>
      <p>(* <a href="https://vercel.com/linear-et-nonlinear-chaos-order-etc-etal/myresourcesfeedbacksloops">this site's now.sh dashboard at Vercel</a> *)</p>
      <h2>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        is a <a href="https://www.gatsbyjs.org/">Gatsby-based</a> app with two
        directories, <code>/src</code> for static content and <code>/api</code>{' '}
        which contains a serverless{' '}
        <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Node.js (TypeScript)
        </a>
        .
      </p>
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
