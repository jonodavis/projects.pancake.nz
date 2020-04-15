import StandingsRow from "./standingsRow"

const StandingsTable = ({ teams, logos }) => {
  let sortedTeams = Object.keys(teams).sort((a, b) =>
    teams[a].elo > teams[b].elo ? -1 : 1
  )
  return (
    <div>
      <table className="standingsTable">
        <thead>
          <tr>
            <th className="eloRatingHeader">Elo Rating</th>
            <th className="changeHeader">1-Week Change</th>
            <th className="logoHeader"></th>
            <th className="teamNameHeader">Team</th>
            <th className="recordHeader">Regular Season Record</th>
            <th className="killsHeader">Kills</th>
            <th className="deathsHeader">Deaths</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team) => (
            <StandingsRow
              teamName={team}
              teamLogo={logos[team]}
              teamData={teams[team]}
              key={team}
            />
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .standingsTable {
          width: 100%;
          font-family: Roboto Mono;
          border-collapse: collapse;
        }

        thead {
          text-transform: uppercase;
          vertical-align: bottom;
        }

        th {
          font-size: 12px;
          font-weight: 400;
        }

        .eloRatingHeader {
          width: 8%;
          text-align: left;
        }

        .changeHeader {
          width: 6%;
          text-align: left;
        }

        .logoHeader {
          width: 6%;
        }

        .teamNameHeader {
          text-align: left;
        }

        .recordHeader {
          width: 7%;
          text-align: right;
        }

        .killsHeader {
          width: 6%;
          text-align: right;
        }

        .deathsHeader {
          width: 6%;
          text-align: right;
        }
      `}</style>
    </div>
  )
}

export default StandingsTable
