import './Sidebar.css'
import { Link } from 'react-router-dom';
import podium from '../../assets/podium.svg'
import group from '../../assets/group.svg'

function Sidebar({ isOpen, onClose }) {
 return (
  <>
      <div className={`overlay ${isOpen ? 'overlay--visible' : ''}`} onClick={onClose} />
      <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div>
          <div>
            <h2>Maria Smith</h2>
            <div><i>Admin</i></div>
            <hr />
          </div>
          <nav className='nav-list'>
            <Link to="/" onClick={onClose}>
              <img src={podium} alt='podium'/>
              Leaderboard
            </Link>
            <Link to="/manage-members" onClick={onClose}>
              <img src={group} alt='user group'/>
              Manage Members
            </Link>
          </nav>
        </div>
        <div className='sidebar-bottom'>
          <hr />
          <button className='btn-logout'>Log Out</button>
        </div>
      </div>
  </>
 )
}

export default Sidebar;