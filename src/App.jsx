import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LeaderboardPage from './pages/leaderboard/LeaderboardPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeaderboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
