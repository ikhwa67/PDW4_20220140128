function Login() {
  alert("Login Berhasil");
}

const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
  button.addEventListener("click", function() {
    if (this.type === "submit") {
      Login();
    }
  });
}


function updateDate() {
  let tanggal = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  document.getElementById("date").innerHTML = tanggal.toLocaleString('id-ID', options);
}

// Set waktu update, misalnya setiap 1 detik
let interval = setInterval(updateDate, 1000);

// Jangan lupa untuk mematikan interval ketika halaman di-unload
window.addEventListener('beforeunload', () => {
  clearInterval(interval);
});