document.addEventListener("DOMContentLoaded", function () {
  const moviesTabsButton = document.querySelectorAll("[data-tab-button]");

  // programação das abas;
  for (let i = 0; i < moviesTabsButton.length; i++) {
    moviesTabsButton[i].addEventListener("click", function (button) {
      const moviesListId = button.target.dataset.tabButton;
      const moviesList = document.querySelector(
        `[data-tab-id=${moviesListId}]`
      );
      hideAllMoviesList();
      moviesList.classList.add("movies__list--is-active");
      removeActiveButtonClass();
      button.target.classList.add("movies__tabs__button--is-active");
    });
  }
});

// remover classe is-active das divs
function hideAllMoviesList() {
  const moviesList = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < moviesList.length; i++) {
    moviesList[i].classList.remove("movies__list--is-active");
  }
}

// remover classe is-active dos botões
function removeActiveButtonClass() {
  const moviesTabsButton = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < moviesTabsButton.length; i++) {
    moviesTabsButton[i].classList.remove("movies__tabs__button--is-active");
  }
}
