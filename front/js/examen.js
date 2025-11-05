document.addEventListener("DOMContentLoaded", async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("🔑 Token almacenado:", token);

    const response = await fetch("http://localhost:3000/api/exam/start?idQuiz=1", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    console.log("📦 Preguntas recibidas:", data);

    if (!response.ok) {
      throw new Error(data.error || "Error al cargar preguntas");
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
