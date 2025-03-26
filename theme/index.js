const changeThemeHandler = (button) => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    button.innerText = "dark";
  } else {
    button.innerText = "light";
  }
};
