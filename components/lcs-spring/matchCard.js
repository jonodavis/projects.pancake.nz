const MatchCard = ({ match, logos }) => (
  <div className="matchCard">
    <table>
      <tbody>
        <tr>
          <td className="logo">
            <img src={logos[match["100"].team]}></img>
          </td>
          <td className="teamName">{match["100"].team}</td>
          <td className="predictionBlue">
            {(match["100"].prediction * 100).toFixed()}%
          </td>
          <td className="resultBlue">{match["100"].result}</td>
        </tr>
        <tr>
          <td className="logo">
            <img src={logos[match["200"].team]}></img>
          </td>
          <td className="teamName">{match["200"].team}</td>
          <td className="predictionRed">
            {(match["200"].prediction * 100).toFixed()}%
          </td>
          <td className="resultRed">{match["200"].result}</td>
        </tr>
      </tbody>
    </table>

    <style jsx>{`
      .matchCard {
        min-width: 30%;
        max-width: 30%;
        margin-bottom: 30px;
        border-radius: 12px;
        border: 1px solid #333333;
      }

      .matchCard td {
        padding 10px;
      }

      .teamName {
        width: 60%;
      }

      .predictionBlue {
        font-family: Roboto Mono;
        background: rgba(139, 139, 246, ${match["100"].prediction});
        width: 20%;
        text-align: center;
      }
      .predictionRed {
        font-family: Roboto Mono;
        background: rgba(139, 139, 246, ${match["200"].prediction});
        width: 20%;
        text-align: center;
      }

      .resultBlue {
        font-family: Roboto Mono;
        background: ${
          match["100"].result === `1`
            ? `rgba(139, 246, 139, 0.565)`
            : `rgba(246, 139, 139, 0.565)`
        };
        border-radius: 0px 12px 0px 0px;
        width: 20%;
        text-align: center;
      }
      .resultRed {
        font-family: Roboto Mono;
        background: ${
          match["200"].result === `1`
            ? `rgba(139, 246, 139, 0.565)`
            : `rgba(246, 139, 139, 0.565)`
        };
        border-radius: 0px 0px 12px 0px;
        width: 20%;
        text-align: center;
      }

      img {
        width: 28px;
        height: 28px;
      }

      table {
        border-collapse: collapse;
      }
    `}</style>
  </div>
)

export default MatchCard
