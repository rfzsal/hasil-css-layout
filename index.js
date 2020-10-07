document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalBtn = document.querySelector("#modal a.close");

  modalBtn.addEventListener("click", (e) => {
    e.preventDefault();

    modal.classList.add("hide");
  });
});
