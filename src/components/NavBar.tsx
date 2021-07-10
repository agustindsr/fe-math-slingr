
export default function NavBar() {
  return (

    <nav className="navbar navbar-light bg-light px-4">
      <div className="container">
        <span className="navbar-brand mb-0 h1 ml-4">
          <img src="https://images.squarespace-cdn.com/content/v1/607dd7d3deada37bf265299c/1623399796046-G5CVJJXVT3YHXFFZ6RNB/Asset%2B391.png?format=1500w" alt="" width="40" height="40" />
          <strong> Math Solver</strong>
        </span>
        <a target="_blank" href="https://slingr-math-api.herokuapp.com/swagger/">
          <img src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" alt="" width="150" height="40" />
        </a>
      </div>
    </nav>
  )
}
