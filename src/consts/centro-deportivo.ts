import { CentroDeportivo } from '../types/centro-deportivo';

export const centrosDeportivos: CentroDeportivo[] = [
  {
    id: 1,
    titulo: 'Centro Deportivo 1',
    descripcion: 'Descripción del centro deportivo 1',
    imagen: 'https://github.com/elmanueh.png',
    instalaciones: [
      {
        id: 1,
        titulo: 'Instalación 1',
        descripcion: 'Descripción de la instalación 1',
        categoria: 'Categoria 1',
        imagen: 'https://via.placeholder.com/150',
        valoracion: 4,
      },
    ],
    actividades: [
      {
        id: 1,
        titulo: 'Actividad 1',
        descripcion: 'Descripción de la actividad 1',
        categoria: 'Categoria 1',
        imagen: 'https://via.placeholder.com/150',
        valoracion: 4,
      },
    ],
  },
  {
    id: 2,
    titulo: 'Centro Deportivo 2',
    descripcion: 'Descripción del centro deportivo 2',
    imagen: 'https://github.com/elmanueh.png',
    instalaciones: [],
    actividades: [],
  },
];
