/* fxn returns current year */
function getFullYear() {
  return new Date().getFullYear()
}

/**/
function getFooterCopy(isIndex) {
  return (isIndex ? "Holberton School"
	  : "Holberton School main dashboard")
}
