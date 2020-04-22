import Head from "next/head"
import LCKHeader from "../components/lck-spring/LCKheader"
import StandingsTable from "../components/lcs-spring/standingsTable"
import MatchList from "../components/lcs-spring/matchList"
import Header from "../components/index/header"
import fetch from "isomorphic-unfetch"

const LCKSpring = (props) => {
  let logos = {
    DragonX:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/4/4c/DragonXlogo_square.png/123px-DragonXlogo_square.png?version=a00ca9eb743db46718d5b3b1a0942f18",
    "Gen.G":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/e/e3/Gen.Glogo_square.png/123px-Gen.Glogo_square.png?version=3958dd9d38795d83f854b7286e445e3d",
    T1:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/a/a2/T1logo_square.png/123px-T1logo_square.png?version=8b367d7d4703b0f9413bfb3d3d75c1d1",
    "DAMWON Gaming":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/6/6d/DAMWON_Gaminglogo_square.png/123px-DAMWON_Gaminglogo_square.png?version=4d7ea689932d8cd48577361b3590c587",
    "KT Rolster":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/f/f8/KT_Rolsterlogo_square.png/123px-KT_Rolsterlogo_square.png?version=8601e35042b9779b272b50463b438d2f",
    "APK Prince":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/f/f7/APK_Princelogo_square.png/123px-APK_Princelogo_square.png?version=371b7cddf4ecddc5e06309e6fd2b93ff",
    Griffin:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/6/6a/Griffinlogo_square.png/123px-Griffinlogo_square.png?version=5e954676335234b9f3e44c12b0185a5c",
    "Hanwha Life Esports":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/a/a6/Hanwha_Life_Esportslogo_square.png/123px-Hanwha_Life_Esportslogo_square.png?version=952129656d8c0f16fbaaffa9f88c822a",
    "Afreeca Freecs":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/7/70/Afreeca_Freecslogo_square.png/123px-Afreeca_Freecslogo_square.png?version=3e7b76188026856871f1851af6e6eac1",
    "SANDBOX Gaming":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/0/0c/SANDBOX_Gaminglogo_square.png/123px-SANDBOX_Gaminglogo_square.png?version=3dd9277194f7d9c1c97bbbca8468d7d5",
  }
  return (
    <div className="container">
      <Head>
        <title>2020 LCK Spring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <LCKHeader />
        <h2>Standings</h2>
        <StandingsTable teams={props.teams} logos={logos} />
        <h2>Matches</h2>
        <MatchList matches={props.matches} logos={logos} />
      </div>

      <style jsx>{`
        .container {
          max-width: 950px;
          margin: auto;
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

LCKSpring.getInitialProps = async function () {
  const resTeams = await fetch(
    "https://raw.githubusercontent.com/jonodavis/lcs-elo-backend/master/out/LCKteams.json"
  )
  const teams = await resTeams.json()

  const resMatches = await fetch(
    "https://raw.githubusercontent.com/jonodavis/lcs-elo-backend/master/out/LCKmatches.json"
  )
  const matches = await resMatches.json()

  return { teams: teams, matches: matches.reverse() }
}

export default LCKSpring
