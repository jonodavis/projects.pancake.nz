import Link from "next/link"
import Head from "next/head"

const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>pancake</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>hi i'm jono.</p>
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
          font-size: 3rem;
        }
        a {
          text-decoration: none;
          color: #333333;
          display: inline-block;
        }
        a:after {
          content: "";
          display: block;
          height: 30px;
          width: 98%;
          background: rgba(246, 139, 139, 0.565);
          margin-top: -30px;
          margin-left: 15px;
        }
      `}</style>
    </div>
  )
}

export default Index
