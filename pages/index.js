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
