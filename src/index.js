function searchElement(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityNameElement = document.querySelector("#city-name");
  cityNameElement.innerHTML = searchInputElement.value;
}

let formElement = document.querySelector("#form-info");
formElement.addEventListener("submit", searchElement);
