import logo from "./holbertonLogo.jpg"
import "./App.css"
import { getFullYear, getFooterCopy } from "./utils.js"

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

	<label htmlFor="email">Email:</label>
	<input type="email" id="email" name="email"/>

	<label htmlFor="password">Password:</label>
	<input type="password" id="password" name="password"/>

	<button>Ok</button>
      </div>
      {/*footer div*/}
      <div className="App-footer">
        <p>Copyright {getFullYear} - {getFooterCopy}</p>
      </div>
    </div>
  )
}
