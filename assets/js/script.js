const toggleTheme = document.getElementById("theme-icon");
const buttonTheme = document.querySelector(".button-theme");
const html = document.documentElement;
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme() {
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "dark") {
    html.setAttribute("data-theme", "light");
    toggleTheme.textContent = "light_mode";

    buttonTheme.style.justifyContent = "end";
  } else {
    html.setAttribute("data-theme", "dark");
    toggleTheme.textContent = "bedtime";

    buttonTheme.style.justifyContent = "initial";
  }
}

buttonTheme.addEventListener("click", changeTheme);

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
