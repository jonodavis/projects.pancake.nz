const StandingsRow = ({ teamName, teamLogo, teamData }) => (
  <tr key={teamName}>
    <td className="eloRatingData">{teamData.elo}</td>
    <td className="changeData">
      {teamData.elo - teamData.oldElo > 0
        ? `+${teamData.elo - teamData.oldElo}`
        : teamData.elo - teamData.oldElo}
    </td>
    <td className="logoData">
      <img src={teamLogo}></img>
    </td>
    <td className="teamNameData">
      {teamName === "Cloud9" || teamName === "G2 Esports" || teamName === "T1"
        ? teamName + " (c)"
        : teamName}
    </td>
    <td className="recordData">
      {teamData.wins}-{teamData.loses}
    </td>
    <td className="killsData">{teamData.kills}</td>
    <td className="deathsData">{teamData.deaths}</td>

    <style jsx>{`
      td {
        border-top: 1px solid #333333;
        padding: 10px 0px 10px 0px;
      }

      img {
        width: 28px;
        height: 28px;
      }

      .eloRatingData {
        width: 8%;
        text-align: center;
      }

      .changeData {
        width: 6%;
        text-align: center;
        background: ${teamData.elo > teamData.oldElo
          ? `rgba(139, 246, 139, 0.565)`
          : `rgba(246, 139, 139, 0.565)`};
      }

      .logoData {
        width: 6%;
        text-align: center;
      }

      .teamNameData {
        text-align: left;
        font-family: CircularStd;
        font-weight: 600;
      }

      .recordData {
        width: 7%;
        text-align: right;
      }

      .killsData {
        width: 6%;
        text-align: right;
      }

      .deathsData {
        width: 6%;
        text-align: right;
      }
    `}</style>
  </tr>
)

export default StandingsRow
