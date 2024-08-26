import React from "./react"
import "./Notifications.css"

export default function Notifications() {
  handleButtonClick= () => {
    console.log('Close button has been clicked');
  }
  return (
    <div className="Notifications">
      <button
        onClick={handleButtonClick=}
        aria-label="close"
        style={{
          position: 'absolute',
          top: 10px,
          right: 10px,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer'
	}}
      >
      <img src={closeIcon} alt="close icon"/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHtml={{_html: getLatestNotification() }} </li>
      </ul>
    </div>
  );
}
