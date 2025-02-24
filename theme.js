//can place this script in the <head> sec, as it will only run after DOM-content-loaded
//alternatively, use the css version: css-code/theme.css
//since this file runs after DOM-content-loaded, it will always override the background-color & color styles set in the css files

document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementsByTagName("body")[0]
  const style = body.style

  function addTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      style.backgroundColor = "black"
      style.color = "white"

    } else {
      style.backgroundColor = "rgb(241, 241, 241)";
      style.color = "black"
    }
  }
  addTheme()

  // observe & adapt to theme changes automatically
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", addTheme)

})
