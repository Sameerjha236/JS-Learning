const colors = [
  "blue",
  "red",
  "green",
  "black",
  "purple",
  "yellow",
  "cyan",
  "grey",
];

const changeTheme = (color) => {
  const classes = document.documentElement.classList;
  colors.forEach((c) => classes.remove(c));
  classes.add(color);
  localStorage.setItem("theme", color);
  console.log("set");
};

(() => {
  const previous = localStorage.getItem("theme");
  console.log("run");
  if (previous) {
    changeTheme([previous]);
  }
})();
