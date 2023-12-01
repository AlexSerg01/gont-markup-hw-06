(() => {
  const refs = {
    openModalBtn: document.querySelector("open-modal"), // Add the appropriate ID or class for open-modal
    closeModalBtn: document.querySelector("close-modal"), // Add the appropriate class for close-modal
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("visually-hidden");
  }
})();
