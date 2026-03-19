import './LeaderboardPage.css'

function LeaderboardRow({rank, total}) {
  return (
    <div className='lb-row'>
      <div className='lb-rank'>{rank}</div>
      <div>{total}</div>
    </div>
  )
}

export default LeaderboardRow;