document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token"); // Recupera el JWT guardado
  const contenedor = document.getElementById("contenedor-preguntas");

  try {
    const response = await fetch("http://localhost:3000/api/exam/start?idQuiz=1", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`, // ✅ Enviamos token
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al cargar preguntas");
    }

    contenedor.innerHTML = "";

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
    contenedor.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
});
