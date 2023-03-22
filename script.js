const searchBarOne = document.querySelector(".searchBarOne");
const searchBarTwo = document.querySelector(".searchBarTwo");
const countryFlagOne = document.querySelector(".countryFlagOne");
const countryFlagTwo = document.querySelector(".countryFlagTwo");
const cCV = document.querySelector(".countryComparisonView");
const submitButton = document.querySelector(".submitButton");

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
                    <!-- End of SearchBarView -->

                    <img class="countryFlagOne" src="${data.flags.png}"/>
                    <div class="countryDetail">
                        <span>Country : ${data.name.common}</span>
                        <span>Population : ${data.population}</span>
                    </div>

  `;
    cCV.insertAdjacentHTML("beforeend", html);
  });
};

submitButton.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    getCountryData(searchBarOne.value);
  }
  searchBarOne.value = "";
});

submitButton.addEventListener("click", function () {
  getCountryData(searchBarOne.value);
  searchBarOne.value = "";
});
