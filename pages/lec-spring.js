import Head from "next/head"
import LECHeader from "../components/lec-spring/LECheader"
import StandingsTable from "../components/lcs-spring/standingsTable"
import MatchList from "../components/lcs-spring/matchList"
import Header from "../components/index/header"
import fetch from "isomorphic-unfetch"

const LECSpring = (props) => {
  let logos = {
    "G2 Esports":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/7/77/G2_Esportslogo_square.png/123px-G2_Esportslogo_square.png?version=46f8bd541c056356584b6209379cf7a9",
    Fnatic:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/f/fc/Fnaticlogo_square.png/123px-Fnaticlogo_square.png?version=0c79180962b7260f04ee01104086e6a8",
    Origen:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/1/12/Origenlogo_square.png/123px-Origenlogo_square.png?version=84338bcc101e315c2c75696250babb7e",
    "MAD Lions":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/3/3c/MAD_Lionslogo_square.png/123px-MAD_Lionslogo_square.png?version=690efa5db34af59d2ae0fc59900dc959",
    Rogue:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/a/a4/Rogue_%28European_Team%29logo_square.png/123px-Rogue_%28European_Team%29logo_square.png?version=f8c7a01963654a0edc32db8ac6c50003",
    "Misfits Gaming":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/9/9a/Misfits_Gaminglogo_square.png/123px-Misfits_Gaminglogo_square.png?version=be4f32c356da77c32a457241fbef8ef8",
    "FC Schalke 04 Esports":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/0/0f/FC_Schalke_04_Esportslogo_square.png/123px-FC_Schalke_04_Esportslogo_square.png?version=75b2ac49243b8c4c7fa0f072a45fb6f1",
    "Excel Esports":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/9/91/Excel_Esportslogo_square.png/123px-Excel_Esportslogo_square.png?version=d36c97a673a11c47923de5850375c7a5",
    "SK Gaming":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/4/4f/SK_Gaminglogo_square.png/123px-SK_Gaminglogo_square.png?version=ac867fe6ccb226a337fd0005928ba99f",
    "Team Vitality":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/8/86/Team_Vitalitylogo_square.png/123px-Team_Vitalitylogo_square.png?version=64ccfea7cf7b23f9261ecf0778bcfed2",
  }
  return (
    <div className="container">
      <Head>
        <title>2020 LEC Spring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <LECHeader />
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

LECSpring.getInitialProps = async function () {
  const resTeams = await fetch(
    "https://raw.githubusercontent.com/jonodavis/lcs-elo-backend/master/out/LECteams.json"
  )
  const teams = await resTeams.json()

  const resMatches = await fetch(
    "https://raw.githubusercontent.com/jonodavis/lcs-elo-backend/master/out/LECmatches.json"
  )
  const matches = await resMatches.json()

  return { teams: teams, matches: matches.reverse() }
}

export default LECSpring
