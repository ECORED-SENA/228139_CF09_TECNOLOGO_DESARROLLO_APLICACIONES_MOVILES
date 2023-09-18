export default {
  global: {
    componenteFormativo: 'Aplicaciones móviles híbridas',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves sobre aplicaciones móviles híbridas. Estas, funcionan en cualquier plataforma y dispositivo. Son rápidas de desarrollar, pero no permiten acceder a todos los recursos de un <i>smartphone</i>, lo que hace indispensable un análisis del producto a desarrollar antes de elegir el tipo de plataforma de desarrollo (nativa, híbrida).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        titulo: 'Introducción aplicaciones móviles híbridas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de aplicaciones móviles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La monetización de las <i>apps</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          '<i>Frameworks</i> para el desarrollo de aplicaciones móviles híbridas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Etapas en el desarrollo de <i>apps</i>',
        desarrolloContenidos: true,
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228139-CF09-DU.pdf',
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
      tema:
        '<i>Framworks</i> para el desarrollo de aplicaciones móviles híbridas',
      referencia:
        'Web app, nativa o híbrida: Cadenas, R. (2019). ¿Qué necesito? ¿Web Apps, App Nativa o App Híbrida? GSoft.',
      tipo: 'Página web',
      link:
        'https://www.gsoft.es/articulos/que-necesito-web-apps-app-nativa-o-app-hibrida/?cli_action=1626116601.578',
    },
  ],
  glosario: [
    {
      termino: '<em>BackEnd</em>',
      significado:
        'es un conjunto de acciones que permiten la integración a las bases de datos o la conexión por medio de API a los dispositivos o servicios.',
    },
    {
      termino: 'Interface (interfaz)',
      significado:
        'Zona de contacto, conexión entre dos componentes de hardware, entre dos aplicaciones o entre un usuario y una aplicación. [WEB]. También apariencia externa de una aplicación informática. Ver también: "application". [RFCALVO]',
    },
    {
      termino: 'JavaScript',
      significado:
        'Lenguaje de programación para WWW, desarrollado por Netscape. Al igual que VBScript, pertenece a la familia Java, pero se diferencia de este último en que los programas están incorporados en el fichero HTML. Ver también: "Java", "script", "VBScript". [RFCALVO]',
    },
    {
      termino: '<em>Operating System</em> - OS(sistema operativo)',
      significado:
        'Un sistema operativo es un programa especial que se carga en un ordenador o dispositivo móvil tras ser encendido, cuya función es gestionar los programas, o aplicaciones, que se ejecutarán en dicho dispositivo, como un procesador de texto o una hoja de cálculo, o la impresión de un texto en una impresora o una conexión a Internet.',
    },
    {
      termino: '<em>Source Code</em> (código fuente)',
      significado:
        'Conjunto de instrucciones que componen un programa informático. Estos programas se escriben en determinados lenguajes, según la necesidad a solucionar. Cada lenguaje tiene características que facilitan el desarrollo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cadenas, R. (2019). ¿Qué necesito? <i>¿Web Apps, App Nativa o App Híbrida?</i> GSoft.',
      link:
        'https://www.gsoft.es/articulos/que-necesito-web-apps-app-nativa-o-app-hibrida/?cli_action=1626116601.578',
    },
    {
      referencia: 'CuponU. (2021). Uber ¿Cómo funciona? CuponU.com.',
      link: 'https://cuponu.com/uber-como-funciona/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Wilson Andrés Cuervo Nieto',
          cargo: 'Instructor',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluador instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Uriel Darío González Montoya',
          cargo: 'Revisión y corrección de estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Fabian Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Calor Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
