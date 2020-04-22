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
            <a className="highlightLink">LCS spring predictions</a>
          </Link>
        </li>
        <li>
          <Link href="/lec-spring">
            <a className="highlightLink">LEC spring predictions</a>
          </Link>
        </li>
        <li>
          <Link href="/lck-spring">
            <a className="highlightLink">LCK spring predictions</a>
          </Link>
        </li>
        <li>
          <a href="https://stayhome.nz" className="highlightLink">
            stayhome.nz
          </a>
        </li>
        <li>
          <a href="https://stayhome.nz/dashboard" className="highlightLink">
            nz coronavirus dashboard
          </a>
        </li>
      </ul>

      <style jsx>{`
        .container {
          font-family: CircularStd;
          color: #333333;
          max-width: 950px;
          margin: auto;
          font-size: 3rem;
        }
        a {
          text-decoration: none;
          color: #333333;
          display: inline-block;
        }
        .highlightLink:after {
          content: "";
          display: block;
          height: 30px;
          width: 98%;
          background: rgba(246, 139, 139, 0.565);
          margin-top: -30px;
          margin-left: 15px;
        }
        img {
          height: 18px;
          width: 18px;
          margin-right: 10px;
          display: none;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          font-family: CircularStd;
          color: #333333;
          margin: 0;
          padding: 0;
        }
        body {
          overflow-y: scroll;
        }
        a {
          color: rgb(139, 139, 246);
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        ::selection {
          background: rgba(139, 139, 246, 0.565);
        }
      `}</style>
    </div>
  )
}

export default Index
