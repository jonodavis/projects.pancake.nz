const LCKHeader = () => (
  <div className="LCKHeader">
    <h1>2020 LCK Summer Predictions</h1>
    <p className="timestamp">Updated: Monday, 20 July 2020</p>
    <p>
      The LCK is the top level of professional League of Legends in South
      Korea. Predictions are based of a slightly modified version of the{" "}
      <a href="https://en.wikipedia.org/wiki/Elo_rating_system" target="_blank">
        Elo rating system
      </a>
      . An average team will have an Elo rating of 1500. Elo ratings at the
      start of the 2020 spring split are set to 1500. Teams retain two thirds of their rating between splits.
    </p>
    <p>
      The methodology used is largely derived from{" "}
      <a
        href="https://projects.fivethirtyeight.com/2019-nfl-predictions/"
        target="_blank"
      >
        FiveThirtyEight's
      </a>{" "}
      NFL predictions, slightly adapted for professional League of Legends.
      Match data is provided by{" "}
      <a href="https://oracleselixir.com/" target="_blank">
        Oracle's Elixir
      </a>
      .
    </p>

    <style jsx>{`
      .timestamp {
        font-family: Roboto Mono;
        color: #999999;
        font-size: 12px;
      }
      a {
        color: rgb(139, 139, 246);
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
)

export default LCKHeader
