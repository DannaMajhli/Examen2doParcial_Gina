document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  const contenedor = document.getElementById("contenedor-preguntas");

  try {
    const response = await fetch("http://localhost:3000/api/exam/start?idQuiz=1", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.message || "Error al cargar preguntas");

    contenedor.innerHTML = "";

    data.questions.forEach((pregunta, index) => {
      const div = document.createElement("div");
      div.className = "pregunta";

      div.innerHTML = `
        <h3>${index + 1}. ${pregunta.text}</h3>
        ${pregunta.options.map((opt, i) => `
          <label class="opcion">
            <input type="radio" name="pregunta-${pregunta.id}" value="${i}">
            ${opt}
          </label>
        `).join("")}
      `;
      contenedor.appendChild(div);
    });
  } catch (error) {
    console.error("Error al cargar el examen:", error);
    contenedor.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
});
