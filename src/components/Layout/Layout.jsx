import './Layout.css'

function Layout({title, children}) {
  return (
    <div>
      <header>
        <h1>{title}</h1>
        <hr />
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;