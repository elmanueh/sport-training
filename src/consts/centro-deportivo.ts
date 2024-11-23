import { CentroDeportivo } from '@/types/centro-deportivo';

export const centrosDeportivos: CentroDeportivo[] = [
  {
    id: 1,
    titulo: 'Centro Deportivo Olímpico',
    descripcion:
      'Un centro moderno con instalaciones de alta calidad para todo tipo de deportes.',
    imagen:
      'https://alugom.es/wp-content/uploads/2017/11/30062021-vallehermoso_xoptimizadax-1350x900-1A.jpg',
    instalaciones: [
      {
        id: 1,
        titulo: 'Piscina Olímpica',
        descripcion:
          'Piscina de 50 metros, ideal para entrenamientos y competiciones.',
        categoria: 'Natación',
        imagen:
          'https://www.murcia.com/noticias/fotos//2014/09/03/030920141012221.jpg',
        valoracion: 4,
      },
      {
        id: 2,
        titulo: 'Cancha de Baloncesto',
        descripcion:
          'Cancha profesional con suelo de madera y tableros reglamentarios.',
        categoria: 'Baloncesto',
        imagen:
          'https://phantom-marca-us.unidadeditorial.es/10eac1dc80dec24145c3cc88747440ef/resize/828/f/jpg/assets/multimedia/imagenes/2022/03/21/16478751905102.jpg',
        valoracion: 1,
      },
      {
        id: 3,
        titulo: 'Campo de Fútbol',
        descripcion: 'Campo de césped artificial con medidas reglamentarias.',
        categoria: 'Fútbol',
        imagen:
          'https://arquine.com/wp-content/uploads/2021/10/sportscenterjules-10.jpg',
        valoracion: 2,
      },
      {
        id: 4,
        titulo: 'Gimnasio',
        descripcion:
          'Área equipada con máquinas de última generación para musculación y cardio.',
        categoria: 'Fitness',
        imagen:
          'https://www.fitnesstech.es/cdn/shop/articles/Equipamiento_gimnasio_accesorios_para_las_diferentes_salas-531093_1200x849.jpg',
        valoracion: 3,
      },
      {
        id: 5,
        titulo: 'Pista de Atletismo',
        descripcion:
          'Pista profesional de 400 metros, ideal para corredores de todos los niveles.',
        categoria: 'Atletismo',
        imagen:
          'https://calahorra.es/wp-content/uploads/6.-WhatsApp-Image-2022-04-27-at-3.43.35-PM-1.jpeg',
        valoracion: 2,
      },
    ],
    actividades: [
      {
        id: 1,
        titulo: 'Clase de Natación',
        descripcion:
          'Aprende técnicas de natación con entrenadores profesionales.',
        categoria: 'Natación',
        imagen:
          'https://cdlamarina.com/wp-content/uploads/2020/09/natacion.jpg',
        valoracion: 5,
      },
      {
        id: 2,
        titulo: 'Yoga para Todos',
        descripcion: 'Sesiones de yoga para mejorar flexibilidad y relajación.',
        categoria: 'Yoga',
        imagen:
          'https://albadanatural.es/wp-content/uploads/2018/06/yoga-e1545341611900.jpg',
        valoracion: 1,
      },
      {
        id: 3,
        titulo: 'Entrenamiento Funcional',
        descripcion:
          'Circuitos de ejercicios diseñados para mejorar tu rendimiento físico.',
        categoria: 'Fitness',
        imagen:
          'https://www.tagoya.com/blog/wp-content/uploads/2024/01/02-Post-Tagoya.jpg',
        valoracion: 4,
      },
      {
        id: 4,
        titulo: 'Liga de Fútbol',
        descripcion: 'Compite en nuestras ligas locales de fútbol.',
        categoria: 'Fútbol',
        imagen:
          'https://pbs.twimg.com/profile_images/545702389571784704/fYZ2mg85_400x400.png',
        valoracion: 1,
      },
      {
        id: 5,
        titulo: 'Clínica de Baloncesto',
        descripcion:
          'Mejora tus habilidades de baloncesto con entrenadores expertos.',
        categoria: 'Baloncesto',
        imagen:
          'https://vivabasquet.com/wp-content/uploads/2017/07/clinica.jpg',
        valoracion: 3,
      },
    ],
  },
  {
    id: 2,
    titulo: 'Club Deportivo El Lago',
    descripcion:
      'Un espacio para toda la familia con diversas actividades recreativas y deportivas.',
    imagen:
      'https://www.albarracin.es/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-01-at-22.27.19-1.jpeg',
    instalaciones: [
      {
        id: 6,
        titulo: 'Zona de Pádel',
        descripcion:
          'Pistas de pádel con césped artificial y buena iluminación.',
        categoria: 'Pádel',
        imagen:
          'https://padeloarso.com/wp-content/uploads/2022/09/padel-indoor-oarso-club-pistas.jpg',
        valoracion: 3,
      },
      {
        id: 7,
        titulo: 'Piscina Recreativa',
        descripcion: 'Piscina con áreas de juegos acuáticos para niños.',
        categoria: 'Natación',
        imagen:
          'https://www.murcia.com/noticias/fotos//2009/01/20/200120091209061.jpg',
        valoracion: 1,
      },
      {
        id: 8,
        titulo: 'Sala de Yoga',
        descripcion: 'Espacio tranquilo para sesiones de yoga y meditación.',
        categoria: 'Yoga',
        imagen:
          'https://perezinteriors.com/wp-content/uploads/2020/07/thumbnail_20200709_124144-1.jpg',
        valoracion: 2,
      },
      {
        id: 9,
        titulo: 'Parque de Escalada',
        descripcion: 'Zona de escalada en roca para adultos y niños.',
        categoria: 'Escalada',
        imagen:
          'https://www.indalchess.com/tienda/images/PARQUE_INFANTIL_ESCALADA_MADERA_CUERDAS_280-d5.jpg',
        valoracion: 4,
      },
      {
        id: 10,
        titulo: 'Cancha de Tenis',
        descripcion: 'Cancha profesional de tenis con superficie de arcilla.',
        categoria: 'Tenis',
        imagen: 'https://technosport.es/images/tenis1.jpg',
        valoracion: 4,
      },
    ],
    actividades: [
      {
        id: 6,
        titulo: 'Clases de Pádel',
        descripcion: 'Aprende pádel en clases grupales o individuales.',
        categoria: 'Pádel',
        imagen:
          'https://procenterpadel.com/wp-content/uploads/2023/08/clases-padel.png',
        valoracion: 4,
      },
      {
        id: 7,
        titulo: 'Natación para Niños',
        descripcion: 'Clases de natación para los más pequeños.',
        categoria: 'Natación',
        imagen: 'https://albanaturvida.es/wp-content/uploads/2023/12/561.png',
        valoracion: 3,
      },
      {
        id: 8,
        titulo: 'Escalada en Grupo',
        descripcion: 'Actividades guiadas de escalada en equipo.',
        categoria: 'Escalada',
        imagen:
          'https://puertocampamentos.es/wp-content/uploads/2017/10/Taller-de-escalada-y-tiro-con-arco-en-el-Parque-de-los-Torunos.png',
        valoracion: 1,
      },
      {
        id: 9,
        titulo: 'Torneos de Tenis',
        descripcion: 'Participa en torneos de tenis organizados mensualmente.',
        categoria: 'Tenis',
        imagen:
          'https://upload.wikimedia.org/wikipedia/commons/2/26/Wimbledon_2011_%2810%29_%2819038261754%29.jpg',
        valoracion: 3,
      },
      {
        id: 10,
        titulo: 'Meditación Guiada',
        descripcion: 'Sesiones de meditación para reducir el estrés.',
        categoria: 'Yoga',
        imagen:
          'https://content.cuerpomente.com/medio/2023/11/10/meditacion-guiada-grupo_c0367fd4_231110100818_1280x720.jpg',
        valoracion: 5,
      },
    ],
  },
  {
    id: 3,
    titulo: 'Complejo Deportivo Sierra Verde',
    descripcion:
      'Ubicado en plena naturaleza, ideal para actividades deportivas al aire libre.',
    imagen:
      'https://www.delpozoarquitectos.cl/imagenes/proyectos/zoom/p67_g58_6.jpg',
    instalaciones: [
      {
        id: 11,
        titulo: 'Campo de Tiro con Arco',
        descripcion:
          'Área equipada para tiro con arco con varios niveles de dificultad.',
        categoria: 'Tiro con Arco',
        imagen: 'campo_tiro_arco.jpg',
        valoracion: 4,
      },
      {
        id: 12,
        titulo: 'Pista de Ciclismo',
        descripcion:
          'Circuito cerrado para ciclismo de montaña y de carretera.',
        categoria: 'Ciclismo',
        imagen: 'pista_ciclismo.jpg',
        valoracion: 4,
      },
      {
        id: 13,
        titulo: 'Sendero de Trail Running',
        descripcion: 'Recorrido de 10 km diseñado para corredores de montaña.',
        categoria: 'Running',
        imagen: 'sendero_trail.jpg',
        valoracion: 4,
      },
      {
        id: 14,
        titulo: 'Zona de Calistenia',
        descripcion:
          'Espacio al aire libre con barras y estructuras para ejercicios de calistenia.',
        categoria: 'Fitness',
        imagen: 'zona_calistenia.jpg',
        valoracion: 4,
      },
      {
        id: 15,
        titulo: 'Cancha de Voleibol Playa',
        descripcion: 'Cancha de arena con medidas reglamentarias.',
        categoria: 'Voleibol',
        imagen: 'cancha_voley.jpg',
        valoracion: 4,
      },
    ],
    actividades: [
      {
        id: 11,
        titulo: 'Clases de Tiro con Arco',
        descripcion: 'Aprende técnicas básicas y avanzadas con expertos.',
        categoria: 'Tiro con Arco',
        imagen: 'clases_tiro_arco.jpg',
        valoracion: 4,
      },
      {
        id: 12,
        titulo: 'Ciclismo en Grupo',
        descripcion: 'Paseos en bicicleta guiados por rutas escénicas.',
        categoria: 'Ciclismo',
        imagen: 'ciclismo_grupo.jpg',
        valoracion: 4,
      },
      {
        id: 13,
        titulo: 'Entrenamiento de Calistenia',
        descripcion: 'Mejora tu fuerza con ejercicios de peso corporal.',
        categoria: 'Fitness',
        imagen: 'entrenamiento_calistenia.jpg',
        valoracion: 4,
      },
      {
        id: 14,
        titulo: 'Carrera de Trail',
        descripcion: 'Compite en nuestras carreras anuales por la montaña.',
        categoria: 'Running',
        imagen: 'carrera_trail.jpg',
        valoracion: 4.9,
      },
      {
        id: 15,
        titulo: 'Torneo de Voleibol Playa',
        descripcion: 'Participa en torneos de voleibol en equipo.',
        categoria: 'Voleibol',
        imagen: 'torneo_voley.jpg',
        valoracion: 4.7,
      },
    ],
  },
  {
    id: 4,
    titulo: 'Polideportivo Ciudad del Sol',
    descripcion: 'Un lugar integral para deportes urbanos y tradicionales.',
    imagen:
      'https://s1.ppllstatics.com/elcorreo/www/multimedia/2024/04/30/txurdinaga-kUhB--1920x1080@El%20Correo.jpg',
    instalaciones: [
      {
        id: 16,
        titulo: 'Skatepark',
        descripcion:
          'Zona para patinaje y trucos de skate con rampas y barandillas.',
        categoria: 'Patinaje',
        imagen: 'skatepark.jpg',
        valoracion: 4.6,
      },
      {
        id: 17,
        titulo: 'Cancha de Squash',
        descripcion: 'Espacio cerrado y acondicionado para partidos de squash.',
        categoria: 'Squash',
        imagen: 'cancha_squash.jpg',
        valoracion: 4.8,
      },
      {
        id: 18,
        titulo: 'Pista de Patinaje',
        descripcion: 'Pista lisa y amplia para patinaje sobre ruedas.',
        categoria: 'Patinaje',
        imagen: 'pista_patinaje.jpg',
        valoracion: 4.7,
      },
      {
        id: 19,
        titulo: 'Área de CrossFit',
        descripcion:
          'Instalaciones con todo lo necesario para entrenamientos intensivos de CrossFit.',
        categoria: 'Fitness',
        imagen: 'area_crossfit.jpg',
        valoracion: 4.9,
      },
      {
        id: 20,
        titulo: 'Cancha Multideportiva',
        descripcion:
          'Espacio versátil para fútbol sala, balonmano y otros deportes.',
        categoria: 'Multideporte',
        imagen: 'cancha_multideportiva.jpg',
        valoracion: 4.5,
      },
    ],
    actividades: [
      {
        id: 16,
        titulo: 'Competencia de Skate',
        descripcion: 'Participa en competencias y muestra tus habilidades.',
        categoria: 'Patinaje',
        imagen: 'competencia_skate.jpg',
        valoracion: 4.7,
      },
      {
        id: 17,
        titulo: 'Clases de Squash',
        descripcion: 'Aprende squash con entrenadores certificados.',
        categoria: 'Squash',
        imagen: 'clases_squash.jpg',
        valoracion: 4.8,
      },
      {
        id: 18,
        titulo: 'Patinaje Artístico',
        descripcion: 'Desarrolla tus habilidades de patinaje artístico.',
        categoria: 'Patinaje',
        imagen: 'patinaje_artistico.jpg',
        valoracion: 4.6,
      },
      {
        id: 19,
        titulo: 'CrossFit Intensivo',
        descripcion: 'Programas intensivos para mejorar fuerza y resistencia.',
        categoria: 'Fitness',
        imagen: 'crossfit_intensivo.jpg',
        valoracion: 4.9,
      },
      {
        id: 20,
        titulo: 'Liga Multideportiva',
        descripcion: 'Compite en equipos en diferentes deportes.',
        categoria: 'Multideporte',
        imagen: 'liga_multideportiva.jpg',
        valoracion: 4.6,
      },
    ],
  },
  {
    id: 5,
    titulo: 'Centro Deportivo Marina Azul',
    descripcion:
      'El centro ideal para deportes acuáticos y actividades junto al mar.',
    imagen:
      'https://s2.abcstatics.com/media/deportes/2023/01/23/lanzarote-k6KC--620x349@abc.jpg',
    instalaciones: [
      {
        id: 21,
        titulo: 'Muelle para Kayaks',
        descripcion: 'Zona segura para embarcar y desembarcar kayaks.',
        categoria: 'Kayak',
        imagen: 'muelle_kayak.jpg',
        valoracion: 4.7,
      },
      {
        id: 22,
        titulo: 'Piscina de Saltos',
        descripcion: 'Piscina profunda con plataformas de salto.',
        categoria: 'Natación',
        imagen: 'piscina_saltos.jpg',
        valoracion: 4.8,
      },
      {
        id: 23,
        titulo: 'Zona de Paddle Surf',
        descripcion: 'Espacio para practicar paddle surf en aguas tranquilas.',
        categoria: 'Paddle Surf',
        imagen: 'zona_paddle_surf.jpg',
        valoracion: 4.9,
      },
      {
        id: 24,
        titulo: 'Cancha de Voleibol Playa',
        descripcion: 'Cancha con arena junto al mar.',
        categoria: 'Voleibol',
        imagen: 'voley_playa.jpg',
        valoracion: 4.6,
      },
      {
        id: 25,
        titulo: 'Zona de Windsurf',
        descripcion: 'Área equipada para la práctica de windsurf.',
        categoria: 'Windsurf',
        imagen: 'zona_windsurf.jpg',
        valoracion: 4.7,
      },
    ],
    actividades: [
      {
        id: 21,
        titulo: 'Clases de Kayak',
        descripcion: 'Aprende a manejar un kayak con seguridad.',
        categoria: 'Kayak',
        imagen: 'clases_kayak.jpg',
        valoracion: 4.7,
      },
      {
        id: 22,
        titulo: 'Salto de Altura',
        descripcion: 'Entrenamientos y competiciones en salto de altura.',
        categoria: 'Natación',
        imagen: 'salto_altura.jpg',
        valoracion: 4.8,
      },
      {
        id: 23,
        titulo: 'Paddle Surf al Amanecer',
        descripcion: 'Sesiones de paddle surf en las primeras horas del día.',
        categoria: 'Paddle Surf',
        imagen: 'paddle_surf_amanecer.jpg',
        valoracion: 4.9,
      },
      {
        id: 24,
        titulo: 'Torneos de Voleibol Playa',
        descripcion: 'Compite en torneos junto al mar.',
        categoria: 'Voleibol',
        imagen: 'torneos_voley_playa.jpg',
        valoracion: 4.6,
      },
      {
        id: 25,
        titulo: 'Clases de Windsurf',
        descripcion: 'Aprende a dominar el viento y las olas.',
        categoria: 'Windsurf',
        imagen: 'clases_windsurf.jpg',
        valoracion: 4.8,
      },
    ],
  },
];
