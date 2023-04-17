document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll("[data-tab-button]");

  // programação das abas;
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function (button) {
      const targetContainer = button.target.dataset.tabButton;
      const container = document.querySelector(
        `[data-tab-id=${targetContainer}]`
      );
      hideAllSheets();
    });
  }
});

function hideAllSheets() {
  const tabsContainer = document.querySelectorAll("[data-tab-id");
  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("movies__list--is-active");
  }
}
