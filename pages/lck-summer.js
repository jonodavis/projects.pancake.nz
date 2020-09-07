import Head from "next/head"
import LCKHeader from "../components/lck-summer/LCKheader"
import StandingsTable from "../components/lcs-summer/standingsTable"
import MatchList from "../components/lcs-summer/matchList"
import Header from "../components/index/header"
import fetch from "isomorphic-unfetch"

const LCKSpring = (props) => {
  let logos = {
    DRX:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/d3/DRXlogo_square.png?version=5e4c266d3d6e386f58b95f31b55c20e0",
    "Gen.G":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/e/e3/Gen.Glogo_square.png/123px-Gen.Glogo_square.png?version=3958dd9d38795d83f854b7286e445e3d",
    T1:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/a/a2/T1logo_square.png/123px-T1logo_square.png?version=8b367d7d4703b0f9413bfb3d3d75c1d1",
    "DAMWON Gaming":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/6/6d/DAMWON_Gaminglogo_square.png/123px-DAMWON_Gaminglogo_square.png?version=4d7ea689932d8cd48577361b3590c587",
    "KT Rolster":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/f/f8/KT_Rolsterlogo_square.png/123px-KT_Rolsterlogo_square.png?version=8601e35042b9779b272b50463b438d2f",
    "SeolHaeOne Prince":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/cc/SeolHaeOne_Princelogo_square.png?version=82c07b24e2aa21662881ee49bf64b3bf",
    "Team Dynamics":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/4/48/Team_Dynamicslogo_profile.png?version=affe39fec3859cdbfb7905c9384559dd",
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
        <title>2020 LCK Summer</title>
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
        ::selection {
          background: rgba(139, 139, 246, 0.565);
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const resTeams = await fetch(
    "https://raw.githubusercontent.com/jonodavis/lcs-elo-backend/master/out/summer/LCKteams.json"
  )
  const teams = await resTeams.json()

  const resMatches = await fetch(
    "https://raw.githubusercontent.com/jonodavis/lcs-elo-backend/master/out/summer/LCKmatches.json"
  )
  const matches = await resMatches.json()

  return { props: {teams: teams, matches: matches.reverse()} }
}

export default LCKSpring
