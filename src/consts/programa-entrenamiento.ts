import {
  ProgramaEntrenamiento,
  ProgramaEntrenamientoEstado,
} from '@/types/programa-entrenamiento';

export const programaEntrenamiento: ProgramaEntrenamiento[] = [
  {
    id: 1,
    titulo: 'Potencia el Saque',
    precio: 40,
    entrenadorNombre: 'Pablo Peris Solano',
    entrenadorFoto:
      'https://img.a.transfermarkt.technology/portrait/header/20973-1696963165.jpg?lm=1',
    estado: ProgramaEntrenamientoEstado.FINALIZADO,
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
    precio: 50,
    entrenadorNombre: 'Pablo Peris Solano',
    entrenadorFoto:
      'https://img.a.transfermarkt.technology/portrait/header/20973-1696963165.jpg?lm=1',
    estado: ProgramaEntrenamientoEstado.FINALIZADO,
    imagen:
      'https://blog.cognifit.com/wp-content/uploads/2019/10/futbol-1-1200x766.jpg',
    reservas: [
      {
        id: 13,
        titulo: 'Clase de Técnica de Regate',
        descripcion: 'Clase para mejorar la técnica de regate en el fútbol.',
        fecha: 'Lunes 6 de enero del 2025',
        hora: '10:00 AM',
        monitor: 'Carlos Pérez',
        categoria: 'Actividad',
        imagen:
          'https://www.futbolgestion.com/wp-content/uploads/2021/07/tecnica-regate.jpg',
        valoracion: 5,
      },
      {
        id: 14,
        titulo: 'Entrenamiento de Tiros a Puerta',
        descripcion:
          'Entrenamiento para perfeccionar los tiros a puerta en fútbol.',
        fecha: 'Miércoles 8 de enero del 2025',
        hora: '4:00 PM',
        monitor: 'Ana Gómez',
        categoria: 'Actividad',
        imagen:
          'https://www.cosasdepadel.com/blog/wp-content/uploads/2021/06/futbol.jpg',
        valoracion: 4,
      },
      {
        id: 15,
        titulo: 'Entrenamiento de Pases Cortos y Largos',
        descripcion:
          'Entrenamiento para mejorar los pases de fútbol, tanto cortos como largos.',
        fecha: 'Viernes 10 de enero del 2025',
        hora: '11:00 AM',
        monitor: 'Juan Díaz',
        categoria: 'Actividad',
        imagen:
          'https://www.jornada.com.mx/ultimas/2021/07/29/futbol-12115.html',
        valoracion: 5,
      },
      {
        id: 16,
        titulo: 'Clase de Defensa y Anticipación',
        descripcion:
          'Clase para mejorar la técnica de defensa y anticipación en el fútbol.',
        fecha: 'Lunes 13 de enero del 2025',
        hora: '9:00 AM',
        monitor: 'Sergio Martínez',
        categoria: 'Actividad',
        imagen: 'https://www.sport.es/labaro/media/defensa.jpg',
        valoracion: 4,
      },
      {
        id: 17,
        titulo: 'Pista de Fútbol',
        descripcion: 'Acceso a una pista de fútbol de césped por 2 horas.',
        fecha: 'Viernes 10 de enero del 2025',
        hora: '6:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://www.elmundo.es/elmundo/imagenes/2020/12/18/1608263130986.jpg',
        valoracion: 5,
      },
      {
        id: 18,
        titulo: 'Campo de Fútbol 7',
        descripcion: 'Acceso a un campo de fútbol 7 para jugar por 2 horas.',
        fecha: 'Sábado 11 de enero del 2025',
        hora: '8:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://img.abc.es/20181030/abc01cbb72f249ae9970dfc611b71a70.jpg',
        valoracion: 4,
      },
      {
        id: 19,
        titulo: 'Campo de Fútbol 11',
        descripcion:
          'Acceso a un campo de fútbol 11 de césped natural para partidos de entrenamiento.',
        fecha: 'Miércoles 15 de enero del 2025',
        hora: '10:00 AM',
        categoria: 'Instalación',
        imagen:
          'https://www.elnacional.cat/es/futbol/futbol-europeo-2023-campeon_175829_102.html',
        valoracion: 5,
      },
      {
        id: 20,
        titulo: 'Cancha de Fútbol Sala',
        descripcion:
          'Acceso a una cancha de fútbol sala completamente equipada por 2 horas.',
        fecha: 'Viernes 17 de enero del 2025',
        hora: '7:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://upload.wikimedia.org/wikipedia/commons/4/4d/Futbol_sala.jpg',
        valoracion: 5,
      },
    ],
  },
  {
    id: 3,
    titulo: 'Baloncesto',
    precio: 50,
    entrenadorNombre: 'Pablo Peris Solano',
    entrenadorFoto:
      'https://img.a.transfermarkt.technology/portrait/header/20973-1696963165.jpg?lm=1',
    estado: ProgramaEntrenamientoEstado.PENDIENTE,
    imagen:
      'https://www.idsports.es/blogadmin/uploads/resize/3_1714655611-pexels-markusspiske-1752757.jpg',
    reservas: [
      {
        id: 21,
        titulo: 'Clase de Tiro Exterior',
        descripcion: 'Clase para mejorar el tiro exterior en baloncesto.',
        fecha: 'Lunes 6 de enero del 2025',
        hora: '11:00 AM',
        monitor: 'Juan Pérez',
        categoria: 'Actividad',
        imagen:
          'https://www.elsupernaranja.com/wp-content/uploads/2021/11/tiro-exterior.jpg',
        valoracion: 5,
      },
      {
        id: 22,
        titulo: 'Entrenamiento de Defensa en Balón',
        descripcion: 'Entrenamiento de defensa contra el balón en baloncesto.',
        fecha: 'Miércoles 8 de enero del 2025',
        hora: '5:00 PM',
        monitor: 'Ana Gómez',
        categoria: 'Actividad',
        imagen:
          'https://www.basket4all.com/wp-content/uploads/2021/02/defensa.jpg',
        valoracion: 4,
      },
      {
        id: 23,
        titulo: 'Entrenamiento de Pase y Movimiento',
        descripcion:
          'Entrenamiento enfocado en mejorar los pases y el movimiento sin balón.',
        fecha: 'Viernes 10 de enero del 2025',
        hora: '9:00 AM',
        monitor: 'Carlos Díaz',
        categoria: 'Actividad',
        imagen:
          'https://baloncesto-training.com/wp-content/uploads/2021/12/pase.jpg',
        valoracion: 5,
      },
      {
        id: 24,
        titulo: 'Clase de Rebotes y Posicionamiento',
        descripcion:
          'Clase para mejorar los rebotes y el posicionamiento en el baloncesto.',
        fecha: 'Lunes 13 de enero del 2025',
        hora: '10:00 AM',
        monitor: 'Pablo Rodríguez',
        categoria: 'Actividad',
        imagen:
          'https://www.basket4all.com/wp-content/uploads/2021/04/rebote.jpg',
        valoracion: 4,
      },
      {
        id: 25,
        titulo: 'Cancha de Baloncesto',
        descripcion: 'Acceso a una cancha de baloncesto por 2 horas.',
        fecha: 'Lunes 6 de enero del 2025',
        hora: '4:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://img.freepik.com/free-photo/empty-basketball-court_1150-848.jpg',
        valoracion: 5,
      },
      {
        id: 26,
        titulo: 'Pista de Baloncesto 3x3',
        descripcion: 'Acceso a una pista de baloncesto para 3x3 por 2 horas.',
        fecha: 'Miércoles 8 de enero del 2025',
        hora: '7:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://www.basketballplayer.com/wp-content/uploads/2021/10/3x3-basketball.jpg',
        valoracion: 4,
      },
      {
        id: 27,
        titulo: 'Pista de Baloncesto Cubierta',
        descripcion: 'Acceso a una pista de baloncesto cubierta para partidos.',
        fecha: 'Viernes 10 de enero del 2025',
        hora: '10:00 AM',
        categoria: 'Instalación',
        imagen:
          'https://www.basketballplayer.com/wp-content/uploads/2022/04/pista-cubierta.jpg',
        valoracion: 5,
      },
      {
        id: 28,
        titulo: 'Pista de Baloncesto Exterior',
        descripcion:
          'Acceso a una pista de baloncesto exterior durante 2 horas.',
        fecha: 'Lunes 13 de enero del 2025',
        hora: '5:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://www.freepik.com/free-photo/basketball-court_1150-848.jpg',
        valoracion: 4,
      },
    ],
  },
  {
    id: 4,
    titulo: 'Voleibol',
    precio: 50,
    entrenadorNombre: 'Pablo Peris Solano',
    entrenadorFoto:
      'https://img.a.transfermarkt.technology/portrait/header/20973-1696963165.jpg?lm=1',
    estado: ProgramaEntrenamientoEstado.PENDIENTE,
    imagen:
      'https://okdiario.com/img/2019/11/18/donde-se-invento-el-voley-655x368.jpg',
    reservas: [
      {
        id: 29,
        titulo: 'Clase de Bloqueo',
        descripcion:
          'Clase especializada en la técnica de bloqueo en voleibol.',
        fecha: 'Lunes 6 de enero del 2025',
        hora: '12:00 PM',
        monitor: 'Roberto García',
        categoria: 'Actividad',
        imagen:
          'https://www.volleyballs.com/wp-content/uploads/2021/07/bloqueo.jpg',
        valoracion: 5,
      },
      {
        id: 30,
        titulo: 'Entrenamiento de Saques Potentes',
        descripcion:
          'Entrenamiento para mejorar la técnica de saque potente en voleibol.',
        fecha: 'Miércoles 8 de enero del 2025',
        hora: '6:00 PM',
        monitor: 'Laura Díaz',
        categoria: 'Actividad',
        imagen:
          'https://www.sportingnews.com/wp-content/uploads/2020/10/saque.jpg',
        valoracion: 4,
      },
      {
        id: 31,
        titulo: 'Entrenamiento de Recepciones',
        descripcion:
          'Entrenamiento especializado en la recepción de saques y ataques.',
        fecha: 'Viernes 10 de enero del 2025',
        hora: '10:00 AM',
        monitor: 'Martín Fernández',
        categoria: 'Actividad',
        imagen: 'https://volley.info/wp-content/uploads/2021/03/recepcion.jpg',
        valoracion: 5,
      },
      {
        id: 32,
        titulo: 'Clase de Remates en Ataque',
        descripcion: 'Clase para mejorar los remates en ataque de voleibol.',
        fecha: 'Lunes 13 de enero del 2025',
        hora: '2:00 PM',
        monitor: 'María Rodríguez',
        categoria: 'Actividad',
        imagen: 'https://volley.com/wp-content/uploads/2021/08/remates.jpg',
        valoracion: 4,
      },
      {
        id: 33,
        titulo: 'Cancha de Voleibol Interior',
        descripcion: 'Acceso a una cancha de voleibol interior para partidos.',
        fecha: 'Lunes 6 de enero del 2025',
        hora: '2:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://www.sportland.com/wp-content/uploads/2021/10/cancha-voley.jpg',
        valoracion: 5,
      },
      {
        id: 34,
        titulo: 'Cancha de Voleibol Exterior',
        descripcion:
          'Acceso a una cancha de voleibol exterior para partidos o entrenamientos.',
        fecha: 'Miércoles 8 de enero del 2025',
        hora: '7:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://www.volleyfun.com/wp-content/uploads/2021/07/cancha-voley-exterior.jpg',
        valoracion: 4,
      },
      {
        id: 35,
        titulo: 'Cancha de Voleibol de Arena',
        descripcion:
          'Acceso a una cancha de voleibol de arena para partidos o entrenamientos.',
        fecha: 'Viernes 10 de enero del 2025',
        hora: '4:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://www.fivb.com/wp-content/uploads/2020/07/cancha-voley-arenas.jpg',
        valoracion: 5,
      },
      {
        id: 36,
        titulo: 'Cancha de Voleibol Playa',
        descripcion: 'Acceso a una cancha de voleibol de playa para partidos.',
        fecha: 'Lunes 13 de enero del 2025',
        hora: '3:00 PM',
        categoria: 'Instalación',
        imagen:
          'https://www.sportingnews.com/wp-content/uploads/2020/10/playa-voley.jpg',
        valoracion: 4,
      },
    ],
  },
  {
    id: 5,
    titulo: 'NUEVO',
    precio: 0,
    entrenadorNombre: '',
    entrenadorFoto: '',
    estado: ProgramaEntrenamientoEstado.NUEVO,
    imagen: '',
    reservas: [],
  },
];
