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
        font-size: 1.25rem;
      }
      p {
        margin: 0 0 0 0;
        padding: 20px 0 20px 0;
      }
      a {
        text-decoration: none;
        color: #333333;
        display: inline-block;
      }
      a:hover:after {
        content: "";
        display: block;
        height: 0.5em;
        width: 98%;
        background: rgba(246, 139, 139, 0.565);
        margin-top: -0.5em;
        margin-left: 0.2em;
      }
    `}</style>
  </div>
)

export default Header
