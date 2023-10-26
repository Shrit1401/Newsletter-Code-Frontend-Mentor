let form = document.querySelector(".card.form");
let success = document.querySelector(".card.success");

document.querySelector("button.sub").addEventListener("click", (e) => {
  e.preventDefault();

  const input = document.querySelector("input.email");

  if (!input.value.includes("@")) {
    alert("Please enter a valid email address");
  } else {
    form.classList.add("hide");
    success.classList.remove("hide");
  }
});

document.querySelector("button.back").addEventListener("click", (e) => {
  e.preventDefault();

  form.classList.remove("hide");
  success.classList.add("hide");
});
