import React from 'react'
export default class NavBar extends React.Component {

    todo = () => {}

    render() {

        return <nav className="navbar" id="nav-bar">
    {/* TODO - implement NavLeft component */}
    <div id="nav-left" style={{display: `flex`, gap: `32px`}}>
        
         {/* TODO - apply inline style object */}
      <a href="#" className="nav-link">Documentation</a>
      <a href="#" className="nav-link">Playground</a>
    </div>
        <div id="nav-right" style={{display: `flex`, alignItems: `center`}}>
        {/* TODO - implement NavRight component */}
         {/* TODO - apply inline style object */}
            <form className="login-form" id="login-form">
                {/* TODO - implement LoginForm component */}
                <input className="login-input" type="text" placeholder="Username" required />
                <input className="login-input" type="password" placeholder="Password" required />
                <button className="login-btn" type="submit" onClick={this.todo}>Login</button>
                {/* TODO - implement button handler function */}
            </form>
        </div>
    </nav>
    }

    

}
