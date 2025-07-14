const ramos = {
  "Química general": [],
  "Matemática": [],
  "Histología": [],
  "Anatomía": [],
  "Biología celular y molecular": [],
  "Introducción a la profesión": [],
  "Alimentos I": [],
  "Formación general": [],
  "Inglés I": [],

  "Química orgánica y Bioquímica general": ["Química general", "Matemática", "Biología celular y molecular"],
  "Fisiología general": ["Biología celular y molecular"],
  "Agentes vivos de enfermedad": ["Biología celular y molecular"],
  "Ciencias sociales y salud": [],
  "Alimentos II": ["Alimentos I"],
  "Búsqueda y sistematización de información científica": [],
  "Inglés II": ["Inglés I"],

  "Bioquímica nutricional": ["Química orgánica y Bioquímica general"],
  "Fisiología de sistemas": ["Histología", "Anatomía", "Fisiología general"],
  "Evaluación del estado nutricional": ["Alimentos II"],
  "Epidemiología y Bioestadística": [],
  "Tecnología de los alimentos": ["Alimentos II"],
  "Técnicas culinarias I": ["Alimentos II"],
  "Inglés III": ["Inglés II"],

  "Fundamentos de alimentación": ["Bioquímica nutricional"],
  "Genética y Nutrigenómica": ["Bioquímica nutricional"],
  "Dietética infanto juvenil": ["Bioquímica nutricional", "Fisiología de sistemas", "Evaluación del estado nutricional"],
  "Sistema de salud pública": ["Epidemiología y Bioestadística"],
  "Bromatología": ["Tecnología de los alimentos"],
  "Técnicas culinarias II": ["Técnicas culinarias I"],
  "Educación, conducta y salud": ["Ciencias sociales y salud"],

  "Inmunología": ["Genética y Nutrigenómica"],
  "Dietética del adulto y adulto mayor": ["Dietética infanto juvenil"],
  "Gestión en salud": ["Sistema de salud pública"],
  "Higiene en la producción de alimentos": ["Agentes vivos de enfermedad"],
  "Planificación en servicios de alimentación colectiva": ["Técnicas culinarias II"],
  "Cultura y seguridad alimentaria": ["Alimentos II"],
  "Comunicación y educación en alimentos y nutrición": ["Educación, conducta y salud"],
  "Modulo integrado interdisciplinario multiprofesional I": [],

  "Fisiopatología y Farmacología I": ["Inmunología"],
  "Dietoterapia I": ["Inmunología", "Dietética del adulto y adulto mayor"],
  "Desarrollo social y comunitario": ["Cultura y seguridad alimentaria"],
  "Organización en servicios de alimentación colectiva": ["Planificación en servicios de alimentación colectiva"],
  "Metodología de investigación": [],
  "Planificación de programas educativos": ["Comunicación y educación en alimentos y nutrición", "Dietética del adulto y adulto mayor"],
  "Formación general 2": [],

  "Fisiopatología y Farmacología II": ["Fisiopatología y Farmacología I"],
  "Dietoterapia II": ["Dietoterapia I"],
  "Nutrición comunitaria I": ["Desarrollo social y comunitario", "Planificación de programas educativos"],
  "Calidad e inocuidad alimentaria": ["Higiene en la producción de alimentos"],
  "Dirección en servicios de alimentación colectiva": ["Organización en servicios de alimentación colectiva"],
  "Diseño de proyecto de investigación": ["Metodología de investigación"],

  "Ejercicio y salud": ["Dietoterapia II"],
  "Nutrición clínica": ["Fisiopatología y Farmacología II", "Dietoterapia II"],
  "Nutrición comunitaria II": ["Nutrición comunitaria I"],
  "Seminario alimentos y nutrición": ["Calidad e inocuidad alimentaria", "Dietoterapia II"],
  "Control de servicios de alimentación colectiva": ["Dirección en servicios de alimentación colectiva"],
  "Ejecución proyecto de investigación": ["Diseño de proyecto de investigación"],
  "Módulo integrado interdisciplinario multiprofesional II": ["Modulo integrado interdisciplinario multiprofesional I"],

  "Práctica profesional en nutrición clínica infanto juvenil": ["Ejercicio y salud", "Nutrición clínica", "Nutrición comunitaria II", "Seminario alimentos y nutrición", "Control de servicios de alimentación colectiva", "Ejecución proyecto de investigación", "Módulo integrado interdisciplinario multiprofesional II"],
  "Práctica profesional en nutrición clínica adulto y adulto mayor": ["Ejercicio y salud", "Nutrición clínica", "Nutrición comunitaria II", "Seminario alimentos y nutrición", "Control de servicios de alimentación colectiva", "Ejecución proyecto de investigación", "Módulo integrado interdisciplinario multiprofesional II"],
  "Práctica profesional en nutrición comunitaria": ["Ejercicio y salud", "Nutrición clínica", "Nutrición comunitaria II", "Seminario alimentos y nutrición", "Control de servicios de alimentación colectiva", "Ejecución proyecto de investigación", "Módulo integrado interdisciplinario multiprofesional II"],
  "Practica profesional en gestión de servicios de alimentación": ["Ejercicio y salud", "Nutrición clínica", "Nutrición comunitaria II", "Seminario alimentos y nutrición", "Control de servicios de alimentación colectiva", "Ejecución proyecto de investigación", "Módulo integrado interdisciplinario multiprofesional II"]
};

const estado = {};

const mallaDiv = document.getElementById("malla");

function actualizarRamos() {
  mallaDiv.innerHTML = "";

  for (const ramo in ramos) {
    const bloqueado = ramos[ramo].some(req => !estado[req]);
    const aprobado = estado[ramo];

    const div = document.createElement("div");
    div.className = "ramo";
    if (bloqueado) div.classList.add("bloqueado");
    if (aprobado) div.classList.add("aprobado");

    div.textContent = ramo;

    if (!bloqueado) {
      div.addEventListener("click", () => {
        estado[ramo] = !estado[ramo];
        actualizarRamos();
      });
    }

    mallaDiv.appendChild(div);
  }
}

actualizarRamos();
