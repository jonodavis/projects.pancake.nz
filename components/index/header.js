import Link from "next/link"

const Header = () => (
  <div className="sticky">
    <p>
      <Link href="/">
        <a>projects.pancake.nz</a>
      </Link>
    </p>

    <style jsx>{`
      .sticky {
        position: sticky;
        top: 0;
        background: #ffffff;
        border-bottom: 1px solid #333333;
        width: 100%;
        margin: 0 0 0 0;
        font-size: 18px;
      }
      .sticky p {
        margin: 0 0 0 0;
        padding: 20px 0 20px 0;
      }
      a {
        text-decoration: none;
        color: #333333;
        display: inline-block;
      }
    `}</style>
  </div>
)

export default Header
