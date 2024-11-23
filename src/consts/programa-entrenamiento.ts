import { ProgramaEntrenamiento } from '../types/programa-entrenamiento';

export const programaEntrenamiento: ProgramaEntrenamiento[] = [
  {
    id: 1,
    titulo: 'Potencia el Saque',
    estado: 'Pendiente',
    imagen:
      'https://media.brainly.com.br/image/rs:fill/w:640/q:75/plain/https://pt-static.z-dn.net/files/d0b/ef3056a1ee53eb3d4a11687f0019559f.jpg',
    reservas: [
      {
        id: 1,
        titulo: 'Clase de Técnica de Saque',
        descripcion:
          'Clase enfocada en mejorar la técnica y potencia del saque.',
        fecha: 'Lunes 6 de enero del 2025',
        hora: '10:00 AM',
        monitor: 'Carlos Rodríguez',
        categoria: 'Actividad',
        imagen: 'https://i.ytimg.com/vi/ZAU4JSQenv4/sddefault.jpg',
        valoracion: 5,
      },
      {
        id: 2,
        titulo: 'Gimnasio',
        descripcion:
          'Uso del gimnasio con máquinas y pesas para mejorar tu fuerza física.',
        fecha: 'Martes 7 de enero del 2025',
        hora: '6:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://www.fitnesstech.es/cdn/shop/articles/Equipamiento_gimnasio_accesorios_para_las_diferentes_salas-531093_1200x849.jpg',
        valoracion: 4,
      },
      {
        id: 3,
        titulo: 'Clase de Entrenamiento General',
        descripcion:
          'Entrenamiento para perfeccionar habilidades básicas y movimientos en la pista.',
        fecha: 'Miércoles 8 de enero del 2025',
        hora: '4:00 PM',
        monitor: 'Ana Gómez',
        categoria: 'Actividad',
        imagen:
          'https://media-cdn.tripadvisor.com/media/photo-s/1b/8c/89/04/clases-de-tenis.jpg',
        valoracion: 4,
      },
      {
        id: 4,
        titulo: 'Pista de Tenis',
        descripcion:
          'Acceso a una pista de tenis completamente equipada por 2 horas.',
        fecha: 'Viernes 10 de enero del 2025',
        hora: '5:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://niberma.es/wp-content/uploads/2022/05/trazado-de-campo-niberma.jpg',
        valoracion: 5,
      },
      {
        id: 9,
        titulo: 'Clase de Técnica de Revés a Dos Manos',
        descripcion: 'Clase práctica para perfeccionar el revés a dos manos.',
        fecha: 'Lunes 13 de enero del 2025',
        hora: '3:00 PM',
        monitor: 'Carlos Rodríguez',
        categoria: 'Actividad',
        imagen:
          'https://www.onlytenis.com/blog/wp-content/uploads/2022/08/mejorar-el-reves-en-el-tenis.jpg',
        valoracion: 5,
      },
      {
        id: 10,
        titulo: 'Entrenamiento de Fondo en Pista',
        descripcion:
          'Entrenamiento específico para mejorar el fondo de pista en tenis.',
        fecha: 'Martes 14 de enero del 2025',
        hora: '9:00 AM',
        monitor: 'Ana Gómez',
        categoria: 'Actividad',
        imagen:
          'https://tennistrainingpro.com/wp-content/uploads/2024/04/cuerda-en-cancha-ttp.jpg',
        valoracion: 4,
      },
      {
        id: 11,
        titulo: 'Pista de Tenis Césped',
        descripcion:
          'Acceso a una pista de tenis de césped completamente equipada por 2 horas.',
        fecha: 'Miércoles 15 de enero del 2025',
        hora: '4:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://www.verdepadel.com/wp-content/uploads/2013/02/Pista-tenis.jpg',
        valoracion: 5,
      },
      {
        id: 12,
        titulo: 'Pista de Tenis Tierra Batida',
        descripcion:
          'Acceso a una pista de tenis de tierra batida para jugar por 2 horas.',
        fecha: 'Viernes 17 de enero del 2025',
        hora: '10:00 AM',
        categoria: 'Instalación',
        imagen:
          'https://sportmegias.com/wp-content/uploads/2012/12/pistas-de-tierra-batida-41.jpg',
        valoracion: 5,
      },
    ],
  },
  {
    id: 2,
    titulo: 'Futbol',
    estado: 'Pendiente',
    imagen:
      'https://blog.cognifit.com/wp-content/uploads/2019/10/futbol-1-1200x766.jpg',
    reservas: [],
  },
  {
    id: 3,
    titulo: 'Baloncesto',
    estado: 'Pendiente',
    imagen:
      'https://www.idsports.es/blogadmin/uploads/resize/3_1714655611-pexels-markusspiske-1752757.jpg',
    reservas: [],
  },
  {
    id: 4,
    titulo: 'Voleibol',
    estado: 'Pendiente',
    imagen:
      'https://okdiario.com/img/2019/11/18/donde-se-invento-el-voley-655x368.jpg',
    reservas: [],
  },
];
