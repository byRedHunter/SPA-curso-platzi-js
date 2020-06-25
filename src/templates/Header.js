const Header = () => {
	const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/">100tifi.com</a>
        </h1>
      </div>

      <div class="Header-nav">
        <a href="#/about">About</a>
      </div>

      <div class="type">
        <div class="option" id="modePage" onclick="changeMode()"></div>
      </div>
    </div>
  `

	return view
}

export default Header
