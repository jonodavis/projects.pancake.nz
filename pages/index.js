import Link from "next/link"

const Index = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/lcs-spring">
          <a>LCS Spring</a>
        </Link>
      </li>
    </ul>
  )
}

export default Index
