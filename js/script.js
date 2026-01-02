function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "none";

  const iframe = modal.querySelector("iframe");
  if (iframe) iframe.src = "";
}

function openCertModal(modalId, pdfPath) {
  const modal = document.getElementById(modalId);
  const iframe = modal.querySelector("iframe");

  iframe.src = pdfPath;
  modal.style.display = "flex";
}