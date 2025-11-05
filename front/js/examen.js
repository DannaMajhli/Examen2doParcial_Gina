// preguntas.js
/*console.log("✅ Script examen.js cargado");

fetch("http://localhost:3000/api/exam/start")
  .then(res => {
    console.log("➡️ Estado:", res.status);
    return res.json();
  })
  .then(data => {
    console.log("📦 Preguntas recibidas:", data);
    const contenedor = document.getElementById("preguntas");
    if (!contenedor) return console.error("No se encontró el contenedor de preguntas");

    contenedor.innerHTML = data
      .map(
        (q, i) => `
        <div class="pregunta">
          <p><strong>${i + 1}.</strong> ${q.text}</p>
          ${q.options
            .map(opt => `<label><input type="radio" name="q${q.id}">${opt}</label>`)
            .join("<br>")}
        </div>`
      )
      .join("");
  })
  .catch(err => console.error("❌ Error al obtener preguntas:", err));
*/
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("🔑 Token almacenado:", token);

    const response = await fetch("http://localhost:3000/api/exam/start?idQuiz=1", {
      method: "GET",
      //credentials: "include" // si usas cookies para autenticación
      headers: {
        "Authorization": ` ${token}`,
        "Content-Type": "application/json"
      }

    });

    const data = await response.json();
    console.log("Preguntas recibidas:", data);

    if (!response.ok) {
      throw new Error(data.message || "Error al cargar preguntas");
    }

    const contenedor = document.getElementById("contenedor-preguntas");

    data.questions.forEach((pregunta, index) => {
      const div = document.createElement("div");
      div.className = "pregunta";

      const titulo = document.createElement("h3");
      titulo.textContent = `${index + 1}. ${pregunta.text}`;
      div.appendChild(titulo);

      pregunta.options.forEach((opcion, i) => {
        const label = document.createElement("label");
        label.className = "opcion";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = `pregunta-${pregunta.id}`;
        input.value = i;

        label.appendChild(input);
        label.appendChild(document.createTextNode(opcion));
        div.appendChild(label);
      });

      contenedor.appendChild(div);
    });
  } catch (error) {
    console.error("Error al cargar el examen:", error);
  }
});
