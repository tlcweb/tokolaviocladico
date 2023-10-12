const slider = document.querySelector(".slider");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const totalSlides = 4; // Ubah jumlah total gambar sesuai dengan jumlah gambar yang Anda miliki

function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }
  currentIndex = index;
  slider.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;

  // Mengaktifkan/menonaktifkan tombol "Sebelumnya" dan "Berikutnya" sesuai dengan indeks saat ini
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === totalSlides - 1;
}

prevButton.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

showSlide(currentIndex);
