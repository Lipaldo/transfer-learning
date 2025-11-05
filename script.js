
// -------------------------------
//  GRÁFICO
// -------------------------------
const ctx = document.getElementById('chart');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Época 1', 'Época 2', 'Época 3', 'Época 4', 'Época 5'],
        datasets: [{
            label: 'Acurácia',
            data: [0.82, 0.88, 0.92, 0.95, 0.97],
            borderWidth: 3
        }, {
            label: 'Loss',
            data: [0.45, 0.31, 0.22, 0.15, 0.10],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});


// -------------------------------
//  TESTE (SIMULAÇÃO)
// -------------------------------
const input = document.getElementById('imgUpload');
const preview = document.getElementById('preview');
const pred = document.getElementById('predicao');

input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
        preview.innerHTML = `<img src="${e.target.result}" alt="preview">`;

        const random = Math.random();
        pred.textContent = random > 0.5 
            ? "🐶 Cachorro detectado!" 
            : "🐱 Gato detectado!";
    };
    reader.readAsDataURL(file);
});


// -------------------------------
//  TEMA CLARO/ESCURO
// -------------------------------
const themeBtn = document.getElementById("themeToggle");

// Carregar estado salvo
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const darkModeAtivo = document.body.classList.contains("dark");

    themeBtn.textContent = darkModeAtivo ? "☀️" : "🌙";
    localStorage.setItem("theme", darkModeAtivo ? "dark" : "light");
});