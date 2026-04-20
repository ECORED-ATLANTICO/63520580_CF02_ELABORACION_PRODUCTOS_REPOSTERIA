export default {
  global: {
    Name:
      'Técnicas de elaboración de productos de repostería y gestión administrativa ambiental',
    Description:
      'Este componente formativo tiene como objetivo fundamental que el aprendiz desarrolle habilidades prácticas para la elaboración de diversos productos de repostería, aplicando técnicas estandarizadas, controles de calidad e inocuidad, así como competencias administrativas para la gestión de costos, formatos de producción y manejo ambiental de residuos, según la normativa vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Terminología técnica en repostería',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Masas básicas: clasificación y técnicas de elaboración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Masas quebradas (masa brisa, masa sucrée, masa sablee)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Masas batidas (bizcochos, piononos, magdalenas)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Masas hojaldradas (hojaldre común, hojaldre invertido)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Masas escaldadas (pasta choux)',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Masas fermentadas (brioche, roscones)',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Jarabes, fondant, cremas, coberturas y salsas básicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Jarabes: simple, aromatizado, de azúcar invertido',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Cremas: pastelera, mantequilla, chantilly, diplomática, muselina',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Coberturas: chocolate, ganache, espejo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Salsas dulces: caramelo, frutos rojos, chocolate, inglesa',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Fondant: cubierta y modelable',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Productos de repostería: técnicas especializadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Budines y natillas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Bavarois, mousses y soufflés',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Postres helados (semifríos, helados, sorbetes)',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fundamentos de decoración en repostería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Círculo cromático: colores primarios, secundarios e intermedios',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Técnicas básicas de decoración: manga pastelera, boquillas, glaseado',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Presentación y emplatado de postres',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Control de calidad e inocuidad en la elaboración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Parámetros de calidad en productos de repostería',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Aplicación de BPM durante la elaboración',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Puntos críticos de control en procesos de repostería',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Normas de seguridad ocupacional en la cocina',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Normativa ambiental aplicada',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Costos de producción en repostería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Conceptos básicos: costo directo, indirecto, fijo, variable',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Cálculo de rendimientos y mermas',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Fijación de precios de venta',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Formatos y registros de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Tipos de formatos',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Diligenciamiento correcto de formatos',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Reporte de novedades e incidencias',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Manejo y disposición de residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Concepto y caracterización de residuos',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo:
              'Clasificación de residuos: orgánicos, inorgánicos, peligrosos',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo:
              'Técnicas de manejo: segregación en la fuente, almacenamiento temporal',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Legislación ambiental aplicable',
            hash: 't_9_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA2_00000__DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Actividad de agua (aw)',
      significado:
        'medida del agua disponible en un alimento para el crecimiento de microorganismos. valores bajos (< 0.85) inhiben el desarrollo microbiano.',
    },
    {
      termino: 'Almíbar',
      significado:
        'disolución de azúcar en agua, de diferentes concentraciones, utilizada para humedecer bizcochos, conservar frutas o como base para helados.',
    },
    {
      termino: 'Baño maría',
      significado:
        'técnica de cocción indirecta que consiste en colocar un recipiente dentro de otro con agua caliente, para una cocción suave y uniforme.',
    },
    {
      termino: 'Bavarois',
      significado:
        'postre moldeado de textura sedosa a base de crema inglesa, gelatina y crema chantilly montada.',
    },
    {
      termino: 'Boquilla',
      significado:
        'pieza metálica o plástica acoplada a la manga pastelera que da forma a la decoración (lisa, estrella, pétalo, hoja).',
    },
    {
      termino: 'BPM (buenas prácticas de manufactura)',
      significado:
        'conjunto de principios y procedimientos que garantizan la higiene e inocuidad en la producción de alimentos (decreto 3075 de 1997).',
    },
    {
      termino: 'Crema pastelera',
      significado:
        'crema espesa elaborada con leche, yemas, azúcar y almidón, utilizada como relleno en múltiples preparaciones de repostería.',
    },
    {
      termino: 'Cremar',
      significado:
        'técnica de batir mantequilla con azúcar hasta obtener una mezcla suave, esponjosa y de color pálido, incorporando aire.',
    },
    {
      termino: 'Desecación',
      significado:
        'proceso en la elaboración de pasta choux donde se cocina la harina con agua y mantequilla para eliminar el exceso de humedad.',
    },
    {
      termino: 'Emulsionar',
      significado:
        'mezclar dos líquidos inmiscibles (como grasa y agua) para obtener una mezcla homogénea y estable.',
    },
    {
      termino: 'Escandallo',
      significado:
        'hoja de costos donde se detallan todos los ingredientes de una receta, sus cantidades y costos, para determinar el precio de venta.',
    },
    {
      termino: 'Fondant',
      significado:
        'pasta de azúcar maleable utilizada para cubrir tortas (fondant de cobertura) o modelar figuras decorativas (fondant modelable).',
    },
    {
      termino: 'Ganache',
      significado:
        'mezcla de chocolate y crema de leche caliente, utilizada como relleno, cobertura o base para trufas.',
    },
    {
      termino: 'HACCP',
      significado:
        'enfoque preventivo para garantizar la inocuidad de los alimentos basado en el análisis de peligros y puntos críticos de control.',
    },
    {
      termino: 'Laminar',
      significado:
        'extender una masa en capas finas y uniformes mediante rodillo o laminadora, técnica fundamental en hojaldre.',
    },
    {
      termino: 'Macerar',
      significado:
        'dejar reposar frutas en azúcar, licor o especias para que absorban sabores y se ablanden.',
    },
    {
      termino: 'Merma',
      significado:
        'pérdida de materia prima durante el proceso productivo (cáscaras, recortes, evaporación), puede ser técnica o evitable.',
    },
    {
      termino: 'Mise en place',
      significado:
        'término francés que significa "poner en su lugar"; organización y preparación previa de todos los elementos necesarios antes de comenzar a cocinar.',
    },
    {
      termino: 'Montar',
      significado:
        'batir crema de leche o claras de huevo hasta que aumenten su volumen y adquieran textura espumosa y firme.',
    },
    {
      termino: 'Pasta choux',
      significado:
        'masa escaldada elaborada con agua, mantequilla, harina y huevos, que se infla en el horno creando un interior hueco.',
    },
    {
      termino: 'Punto de cinta',
      significado:
        'punto en el batido de huevos y azúcar donde la mezcla, al caer del batidor, forma una cinta que permanece visible en la superficie.',
    },
    {
      termino: 'Templar',
      significado:
        'técnica de estabilización del chocolate mediante control de temperatura para obtener brillo, textura crujiente y evitar el florecimiento.',
    },
    {
      termino: 'Vuelta (hojaldre)',
      significado:
        'cada uno de los plegados que se realizan a la masa de hojaldre para crear múltiples capas (vuelta simple o de tres, vuelta doble o de cuatro).',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (24 de enero de 1979). <em>Ley 9 de 1979, por la cual se dictan medidas sanitarias</em>. Diario Oficial No. 35308. https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1177',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1177',
    },
    {
      referencia:
        'Congreso de Colombia. (22 de diciembre de 1993). <em>Ley 99 de 1993, por la cual se crea el Ministerio del Medio Ambiente y se organiza el Sistema Nacional Ambiental (SINA)</em>. Diario Oficial No. 41.146. https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=297',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=297',
    },
    {
      referencia:
        'Congreso de Colombia. (19 de diciembre de 2008). <em>Ley 1259 de 2008, por medio de la cual se instaura en el territorio nacional la aplicación del comparendo ambiental</em>. Diario Oficial No. 47.208. https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34388',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34388',
    },
    {
      referencia:
        'Congreso de Colombia. (11 de julio de 2012). <em>Ley 1562 de 2012, por la cual se modifica el Sistema de Riesgos Laborales</em>. Diario Oficial No. 48.488. Recuperado de https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48365',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48365',
    },
    {
      referencia:
        'Figoni, P. (2012). <em>Cómo funciona la repostería: Fundamentos científicos de la repostería</em> (1ª ed.). Editorial Acribia.',
    },
    {
      referencia:
        'Friberg, B. (2013). <em>El pastelero profesional: Técnicas de pastelería y panadería</em> (1ª ed., 2 tomos). Ediciones Lecifood.',
    },
    {
      referencia:
        'Gisslen, W. (2014). <em>Panadería y repostería profesional</em> (2ª ed.). Editorial Acribia.',
    },
    {
      referencia:
        'INVIMA. (2020). <em>Lineamientos para la aplicación de las Buenas Prácticas de Manufactura en establecimientos de alimentos</em>. Instituto Nacional de Vigilancia de Medicamentos y Alimentos. https://www.invima.gov.co/biblioteca/lineamientos-certificados-bpm-cvl-registro-sanitario',
      link:
        'https://www.invima.gov.co/biblioteca/lineamientos-certificados-bpm-cvl-registro-sanitario',
    },
    {
      referencia:
        'McGee, H. (2017). <em>La cocina y los alimentos: Enciclopedia de la ciencia y la cultura de la comida</em> (1ª ed., 5ª reimpresión). Debate.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (26 de diciembre de 2019). <em>Resolución 2184 de 2019, por la cual se adopta el código de colores para la separación de residuos sólidos</em>. Diario Oficial No. 51.173. https://www.minambiente.gov.co/documento-normativa/resolucion-2184-de-2019/',
      link:
        'https://www.minambiente.gov.co/documento-normativa/resolucion-2184-de-2019/',
    },
    {
      referencia:
        'Ministerio de Salud. (10 de diciembre de 1997). <em>Decreto 3075 de 1997, por el cual se reglamenta parcialmente la Ley 09 de 1979 y se dictan otras disposiciones</em>. Diario Oficial No. 43.246. https://www.minsalud.gov.co/Normatividad_Nuevo/decreto%203075%20DE%201997.pdf',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/decreto%203075%20DE%201997.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (26 de mayo de 2015). <em>Decreto 1072 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo</em>. Diario Oficial No. 49.523. https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (20 de diciembre de 2013). <em>Decreto 2981 de 2013, por el cual se reglamenta la prestación del servicio público de aseo</em>. Diario Oficial No. 48.998. https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56035',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56035',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (26 de mayo de 2015). <em>Decreto 1076 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente</em>. Diario Oficial No. 49.523. https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
    },
    {
      referencia:
        'SENA. (2020). <em>Manual de Buenas Prácticas de Manufactura para servicios de alimentación</em>. Dirección de Formación Profesional, Servicio Nacional de Aprendizaje. [Disponible en plataforma Sofía Plus y Territorium para aprendices SENA]',
    },
    {
      referencia:
        'Suas, M. (2014). <em>Panadería y pastelería avanzadas: Enfoque profesional</em> (1ª ed.). Ediciones Lecifood.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yina Paola Castro Zarate',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
