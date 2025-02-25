const form = document.querySelector(".top-banner form")
const input = document.querySelector(".top-banner input[type='text']")
const msg = document.querySelector(".top-banner .msg")
const list = document.querySelector(".ajax-section ul")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputVal = input.value
  const apiKey = "617024db2b23b9c575d0b9d32d9def86" //use env vars
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)

      if (data.cod === "404") {
        msg.textContent = "Please search for a valid city 😭"
        msg.style.visibility = "visible"
      }

      const {
        name,
        sys: { country },
        weather,
        main: { temp }
      } = data
      const {
        description,
        icon: weatherIcon,
      } = weather[0]
      const icon = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      const li = document.createElement("li")
      li.classList.add("city")
      const markup = `
      <h2 class="city-name" data-name=${name, country}>
      <span>${name}</span>
      <sup>${country}</sup>
      </h2>
      <span class="city-temperature">${Math.round(temp)} <sup> &deg; C </sup> </span>
      <figure>
      <img src=${icon} alt="weather-icon" class="city-icon">
      <figcaption>${(description.toUpperCase())}</figcaption>
      </figure>
      `
      li.innerHTML = markup
      list.appendChild(li)

      msg.textContent = ""
      form.reset()
      input.focus()
    })
    .catch(err => {
      console.error(err)
    })
})