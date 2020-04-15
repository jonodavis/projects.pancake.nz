import MatchCard from "./matchCard"

const MatchList = ({ matches, logos }) => {
  // get individual match data
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  let dates = Array.from(
    new Set(
      matches.map((match) =>
        new Date(match["100"].date).toLocaleDateString("en-US", options)
      )
    )
  )
  let matchesGroupedByDate = {}
  dates.forEach((date) => {
    matchesGroupedByDate[date] = []
  })
  matches.forEach((match) => {
    let date = new Date(match["100"].date).toLocaleDateString("en-US", options)
    matchesGroupedByDate[date].push(match)
  })

  return (
    <div className="matchList">
      {Object.keys(matchesGroupedByDate).map((date) => {
        return (
          <div key={date}>
            <h3 className="dateString">{date}</h3>
            <div className="bar"></div>
            <div className="matchDay">
              {matchesGroupedByDate[date].map((match) => {
                return (
                  <MatchCard
                    key={match["100"].gameid}
                    match={match}
                    logos={logos}
                  />
                )
              })}
            </div>
          </div>
        )
      })}

      <style jsx>{`
        .matchDay {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
        }
        .matchDay::after {
          content: "";
          width: 30%;
        }
        .dateString {
          font-weight: 100;
          margin-bottom: 0;
        }
        .bar {
          border-top: 1px solid #3e3e3e;
          margin: 0 auto 3% auto;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
export default MatchList
