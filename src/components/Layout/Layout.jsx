import './Layout.css'
import menu from '../../assets/menu.svg'
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

function Layout({title, children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <header>
        <div className='header'>
          <h1>{title}</h1>
          <img 
            className="menu-icon" 
            src={menu} 
            alt="menu"
            onClick={() => setSidebarOpen(true)} />
        </div>
        <hr />
      </header>
      <main>
        {children}
      </main>
      <Sidebar
      isOpen={sidebarOpen}
      onClose={() => setSidebarOpen(false)} />
    </div>
  )
}

export default Layout;