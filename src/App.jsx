import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LeaderboardPage from './pages/leaderboard/LeaderboardPage'
import ManageMembersPage from './pages/manage-members/ManageMembersPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeaderboardPage />} />
        <Route path="/manage-members" element={<ManageMembersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
