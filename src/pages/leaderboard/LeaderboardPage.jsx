import Layout from '../../components/Layout/Layout';
import './LeaderboardPage.css'
import LeaderboardRow from './LeaderboardRow';

function LeaderboardPage() {
  return (
    <>
      <Layout title="Leaderboard">
        <div className='lb-page'>
          <div className='lb-info'>
            <div className='lb-countdown'>
              <h2>Countdown</h2>
              <div className='lb-timer'>
                <div>43</div>
                <div>:</div>
                <div>11</div>
                <div>:</div>
                <div>28</div>
                <div>Days</div>
                <div></div>
                <div>Hours</div>
                <div></div>
                <div>Seconds</div>
              </div>
            </div>
            <div className='lb-updated'>
              <h2>Last Updated:</h2>
              <div>03/14/26 - 3:14pm</div>
            </div>
          </div>
          <div className='lb-list'>
            <LeaderboardRow rank="1" total="45 hrs" />
            <LeaderboardRow rank="2" total="25 hrs" />
            <LeaderboardRow rank="3" total="25 hrs" />
            <LeaderboardRow rank="4" total="25 hrs" />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default LeaderboardPage;