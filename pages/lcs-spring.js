import Head from "next/head"
import LCSHeader from "../components/lcs-spring/LCSheader"
import StandingsTable from "../components/lcs-spring/standingsTable"
import MatchList from "../components/lcs-spring/matchList"
import fetch from "isomorphic-unfetch"

const LCSSpring = (props) => {
  let logos = {
    "100 Thieves":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/b/b9/100_Thieveslogo_square.png/123px-100_Thieveslogo_square.png?version=c213f0c025c3e0131fb1d2686e755265",
    Cloud9:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/8/88/Cloud9logo_square.png/123px-Cloud9logo_square.png?version=cf6cfc032cf4716cc08d8afd0cffc17c",
    FlyQuest:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/e/e5/FlyQuestlogo_square.png/123px-FlyQuestlogo_square.png?version=931f506920bb8e9cbf56cb4f8aee8c2a",
    "Counter Logic Gaming":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/3/37/Counter_Logic_Gaminglogo_square.png/123px-Counter_Logic_Gaminglogo_square.png?version=7d3fd885069648129e83ff698924dff6",
    "Golden Guardians":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/9/98/Golden_Guardianslogo_square.png/123px-Golden_Guardianslogo_square.png?version=58e8e988d4d9b770d3592c77b9523d75",
    Immortals:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/b/b5/Immortalslogo_square.png/123px-Immortalslogo_square.png?version=e5bb1e0ed3b1b0be57096444449ece4c",
    "Team Liquid":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/f/f4/Team_Liquidlogo_square.png/123px-Team_Liquidlogo_square.png?version=8512c61e9d78715b323da1a987548819",
    "Evil Geniuses":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/f/fc/Evil_Geniuses_2019logo_square.png/123px-Evil_Geniuses_2019logo_square.png?version=59b087572623330efd2bbef682951ce0",
    "Team SoloMid":
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/8/83/Team_SoloMidlogo_square.png/123px-Team_SoloMidlogo_square.png?version=706cd58f81e78e76b4298657bf3cae3c",
    Dignitas:
      "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/f/f3/Dignitaslogo_square.png/123px-Dignitaslogo_square.png?version=8f8a4f520c199c0214d57936142cbd08",
  }
  return (
    <div className="container">
      <Head>
        <title>2020 LCS Spring</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <LCSHeader />
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
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
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

LCSSpring.getInitialProps = async function () {
  const resTeams = await fetch(
    "https://raw.githubusercontent.com/jonodavis/lcs-elo-backend/master/out/LCSteams.json"
  )
  const teams = await resTeams.json()

  const resMatches = await fetch(
    "https://raw.githubusercontent.com/jonodavis/lcs-elo-backend/master/out/LCSmatches.json"
  )
  const matches = await resMatches.json()

  return { teams: teams, matches: matches.reverse() }
}

export default LCSSpring
