import {
  ProgramaEntrenamiento,
  ProgramaEntrenamientoEstado,
} from '@/types/programa-entrenamiento';

export const programaEntrenamiento: ProgramaEntrenamiento[] = [
  {
    id: 1,
    titulo: 'Potencia el Saque',
    precio: 50,
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
    precio: 40,
    entrenadorNombre: 'Jose Canovas Garcia',
    entrenadorFoto:
      'https://www.josecano.fitness/wp-content/uploads/2019/05/Jos%C3%A9-Cano-Entrenador-Personal-Madrid.jpg',
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
          'https://cdn.resfu.com/media/img_news/un-jugador-trata-de-marcharse-de-otro-con-un-regate--en-un-partido-de-la-liga-bbva--efe.jpg',
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
          'https://aprendeentrenando.com/wp-content/uploads/2021/06/Calentamiento_de_tiro_a_puerta-1024x682.jpg',
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
          'https://celebreak.com/wp-content/uploads/2023/06/ruedas-de-pases-de-futbol-incluyelas-en-tus-entrenamientos.jpg',
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
        imagen:
          'https://cdn0.uncomo.com/es/posts/0/4/4/como_entrenar_a_un_defensa_40440_orig.jpg',
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
          'https://www.opsa.es/wp-content/uploads/2023/06/LA_HOYETA_ALGODONALES1.jpg',
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
          'https://fut7.pt/wp-content/uploads/2020/11/WhatsApp-Image-2022-05-06-at-09.36.51-1024x576.jpeg',
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
          'https://www.opsa.es/wp-content/uploads/2023/06/LA_HOYETA_ALGODONALES1.jpg',
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
          'https://deportes.ugr.es/sites/centros/cad/public/imagenes/parrafo/ficha-imagen/2019-09/DSC_0302_opt.jpg',
        valoracion: 5,
      },
    ],
  },
  {
    id: 3,
    titulo: 'Baloncesto',
    precio: 70,
    entrenadorNombre: 'Juan Pérez García',
    entrenadorFoto:
      'https://www.fitactiva.com/wp-content/uploads/2022/08/entrenador-1.png',
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
          'https://coachlorenzo.com/wp-content/uploads/2021/08/La-mecanica-de-tiro-en-baloncesto-Blog-Coach-Lorenzo.jpeg',
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
          'https://www.clubulb.es/wp-content/uploads/sites/70/2020/04/20200424_201921.jpg',
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
          'https://www.fbcv.es/blog/wp-content/uploads/2022/12/IMG_0202.jpg',
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
          'https://cdn.shopify.com/s/files/1/0752/5249/8730/articles/untitled-2240--900px-1687525541039.png',
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
          'https://static.elnortedecastilla.es/www/multimedia/202107/16/media/cancha-cuellar.jpg',
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
          'https://static.elnortedecastilla.es/www/multimedia/202107/16/media/cancha-cuellar.jpg',
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
          'https://floors-supreme.es/wp-content/uploads/2016/07/Dimensiones-oficiales-pista-baloncesto-medidas-cancha-baloncesto-Supreme-Floors.jpg',
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
          'https://urbancolex.com/wp-content/uploads/2019/03/cancha-de-baloncesto-1024x576.jpg',
        valoracion: 4,
      },
    ],
  },
  {
    id: 4,
    titulo: 'Voleibol',
    precio: 100,
    entrenadorNombre: 'Sergio Palomares Hernández',
    entrenadorFoto:
      'https://sergiopalomares.es/wp-content/uploads/2024/10/foto1.jpg',
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
          'https://ninoversace.com/wp-content/uploads/El-bloqueo-voleibol.jpeg',
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
          'https://aboutespanol.com/thmb/jjhzRD_qR0t_2AnjaXvOfMp3Az0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1198640037-dc3c1637127c48b9b78947b50dc2043d.jpg',
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
        imagen:
          'https://www.voleiboltotal.com/wp-content/uploads/2024/02/consejos-para-mejorar-tu-defensa-y-recepcion-en-el-voleibol.jpg',
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
        imagen:
          'https://www.dicaseducacaofisica.info/wp-content/uploads/2022/10/cortada-voleibol-hiperextensao.webp',
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
          'https://i0.wp.com/zsfloortech.com/wp-content/uploads/2022/12/cancha-de-voleibol-cubierta.jpg',
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
          'https://image.made-in-china.com/226f3j00IOKVGTAdlNrD/Cancha-de-Voleibol-exterior-Pintura-s-lice-PU-material-para-la-cancha-deportiva-Suelo.webp',
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
          'https://i.pinimg.com/originals/86/b7/2c/86b72c99602acc8ac7c05e46949f3a92.png',
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
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4z_VsyyfABjQYQ4Z8E6FoTrlJvDIxSVE0A&s',
        valoracion: 4,
      },
    ],
  },
  {
    id: 5,
    titulo: '',
    precio: 0,
    entrenadorNombre: '',
    entrenadorFoto: '',
    estado: ProgramaEntrenamientoEstado.NUEVO,
    imagen: '',
    reservas: [],
  },
];
