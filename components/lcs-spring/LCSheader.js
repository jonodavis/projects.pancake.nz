const LCSHeader = () => (
  <div className="LCSHeader">
    <h1>2020 LCS Spring Predictions</h1>
    <p className="timestamp">Updated: Thursday, 23 April 2020</p>
    <p>
      LCS predictions are based of a slightly modified version of the{" "}
      <a href="https://en.wikipedia.org/wiki/Elo_rating_system" target="_blank">
        Elo rating system
      </a>
      . An average team will have an Elo rating of 1500. Elo ratings at the
      start of the 2020 spring split are determined by the win/loss record from
      the 2020 summer split regular season matches (not a full Elo calculation)
      and have been reverted towards the mean by 50%. This is to reflect that
      many LCS teams have major roster changes between seasons.
    </p>
    <p>
      The methodology used is largely derived from{" "}
      <a
        href="https://projects.fivethirtyeight.com/2019-nfl-predictions/"
        target="_blank"
      >
        FiveThirtyEight's
      </a>{" "}
      NFL predictions, slightly adapted for the LCS.
    </p>

    <style jsx>{`
      .timestamp {
        font-family: Roboto Mono;
        color: #999999;
        font-size: 12px;
      }
    `}</style>
  </div>
)

export default LCSHeader
