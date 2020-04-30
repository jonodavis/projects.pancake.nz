import Link from "next/link"
import Head from "next/head"
import Header from "../components/index/header"

const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>pancake</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <p>
        Welcome to projects.pancake.nz. If you are looking for my main website
        head over to <a href="https://pancake.nz">pancake.nz</a>. I use this
        website as an index of all the projects I have worked on. Some of the
        projects below are hosted on this site whilst others on their own
        domains or just github repos. This site is built using Next.js and is
        hosted on Netlify. You can see the source code{" "}
        <a href="https://github.com/jonodavis/projects.pancake.nz">here</a>.
      </p>
      <p>here are some of the projects i have worked on:</p>
      <ul>
        <li>
          <Link href="/lcs-spring">
            <a>LCS spring predictions</a>
          </Link>
        </li>
        <li>
          <Link href="/lec-spring">
            <a>LEC spring predictions</a>
          </Link>
        </li>
        <li>
          <Link href="/lck-spring">
            <a>LCK spring predictions</a>
          </Link>
        </li>
        <li>
          <a href="https://stayhome.nz">stayhome.nz</a>
        </li>
        <li>
          <a href="https://stayhome.nz/dashboard">nz coronavirus dashboard</a>
        </li>
        <li>
          <a href="https://github.com/jonodavis/nectar">
            nectar - cryptocurrency trading bot
          </a>
        </li>
        <li>
          <a href="https://github.com/jonodavis/spotifylyrics">spotifylyrics</a>
        </li>
        <li>
          <a href="https://github.com/jonodavis/dgg-client">
            destiny.gg chat client
          </a>
        </li>
        <li>
          <a href="https://pancake.nz/hexclock.html">hexclock</a>
        </li>
        <li>
          <a href="https://pancake.nz/life">life - clicker game</a>
        </li>
      </ul>

      <style jsx>{`
        .container {
          font-family: CircularStd;
          color: #333333;
          max-width: 950px;
          margin: auto;
        }
        .highlightLink:after {
          content: "";
          display: block;
          height: 0.5em;
          width: 98%;
          background: rgba(246, 139, 139, 0.565);
          margin-top: -0.5em;
          margin-left: 0.2em;
        }
        a {
          color: rgb(139, 139, 246);
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
      <style jsx global>{`
        body {
          overflow-y: scroll;
          margin: 0;
          padding: 0;
        }
        ::selection {
          background: rgba(139, 139, 246, 0.565);
        }
      `}</style>
    </div>
  )
}

export default Index
