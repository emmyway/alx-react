import logo from "./holbertonLogo.jpg"
import "./App.css"

export default function App() {
  return(
    <div className="App">
      {/*header div*/}
      <div className="App-header">
        <img className="App-logo" src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      {/*body div*/}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      {/*footer div*/}
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  )
}
