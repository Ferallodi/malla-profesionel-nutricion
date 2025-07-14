const ramos = [
  { id: 'quimica_general', nombre: 'Química general', requisitos: [], desbloquea: ['quimica_organica', 'bioquimica_general'] },
  { id: 'matematica', nombre: 'Matemática', requisitos: [], desbloquea: ['quimica_organica', 'bioquimica_general'] },
  { id: 'histologia', nombre: 'Histología', requisitos: [], desbloquea: ['fisiologia_sistemas'] },
  { id: 'anatomia', nombre: 'Anatomía', requisitos: [], desbloquea: ['fisiologia_sistemas'] },
  { id: 'biologia_celular', nombre: 'Biología celular y molecular', requisitos: [], desbloquea: ['quimica_organica', 'bioquimica_general', 'fisiologia_general', 'agentes_vivos'] },
  { id: 'introduccion_profesion', nombre: 'Introducción a la profesión', requisitos: [], desbloquea: [] },
  { id: 'alimentos_1', nombre: 'Alimentos I', requisitos: [], desbloquea: ['alimentos_2'] },
  { id: 'formacion_general_1', nombre: 'Formación general', requisitos: [], desbloquea: [] },
  { id: 'ingles_1', nombre: 'Inglés I', requisitos: [], desbloquea: ['ingles_2'] },

  { id: 'quimica_organica', nombre: 'Química orgánica y Bioquímica general', requisitos: ['quimica_general', 'matematica', 'biologia_celular'], desbloquea: ['bioquimica_nutricional'] },
  { id: 'fisiologia_general', nombre: 'Fisiología general', requisitos: ['biologia_celular'], desbloquea: ['fisiologia_sistemas'] },
  { id: 'agentes_vivos', nombre: 'Agentes vivos de enfermedad', requisitos: ['biologia_celular'], desbloquea: ['higiene'] },
  { id: 'ciencias_sociales', nombre: 'Ciencias sociales y salud', requisitos: [], desbloquea: ['educacion_salud'] },
  { id: 'alimentos_2', nombre: 'Alimentos II', requisitos: ['alimentos_1'], desbloquea: ['cultura_seguridad', 'tecnologia_alimentos', 'tecnicas_culinarias_1', 'evaluacion_nutricional'] },
  { id: 'busqueda_cientifica', nombre: 'Búsqueda científica', requisitos: [], desbloquea: [] },
  { id: 'ingles_2', nombre: 'Inglés II', requisitos: ['ingles_1'], desbloquea: ['ingles_3'] }
];

const mallaDiv = document.getElementById('malla');

function crearElementoRamo(ramo) {
  const el = document.createElement('div');
  el.className = 'ramo bloqueado';
  el.id = ramo.id;
  el.textContent = ramo.nombre;

  el.addEventListener('click', () => {
    el.classList.add('aprobado');
    ramo.desbloquea.forEach(id => {
      const desbloqueado = document.getElementById(id);
      if (desbloqueado) {
        const requisitosOk = ramos.find(r => r.id === id).requisitos.every(req => document.getElementById(req).classList.contains('aprobado'));
        if (requisitosOk) {
          desbloqueado.classList.remove('bloqueado');
        }
      }
    });
  });

  return el;
}

function renderMalla() {
  ramos.forEach(ramo => {
    const elemento = crearElementoRamo(ramo);
    if (ramo.requisitos.length === 0) {
      elemento.classList.remove('bloqueado');
    }
    mallaDiv.appendChild(elemento);
  });
}

renderMalla();