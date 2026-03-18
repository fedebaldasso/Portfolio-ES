export const projects = [
  {
    id: 'aconcagua',
    title: 'Website Alojamiento',
    bannerTitle: 'Website para Alquiler Temporal',
    descriptionTitle: 'Sitio Web Aconcagua Apartment',
    category: 'Diseño Web',
    img: '/assets/img/portfolio/banner1.png',
    zoomImg: '/assets/img/portfolio/banner.png',
    client: 'Aconcagua Apartment',
    date: 'Octubre, 2024',
    url: 'https://aconcagua-apartment.web.app/',
    urlType: 'button',
    description: `
            <p>
              Proyecto desarrollado mediante una plantilla de
              <span>Bootstrap</span> a la cual se le realizaron varias
              modificaciones para adaptarla a las necesidades del cliente.
              El sitio web cuenta con un formulario de contacto, galería de
              imágenes, mapa con la ubicación del departamento y calendario
              de disponibilidad.
            </p>
            <p>
              El sitio web fue desarrollado en
              <span>HTML, CSS y JavaScript</span>. Los contactos telefónicos
              están enlazados a WhatsApp y el calendario está integrado con
              un calendario de Airbnb a través de Google Calendar.
            </p>
        `,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    sliderImages: [
      '/assets/img/portfolio/banner.png',
      '/assets/img/portfolio/servicios.png',
      '/assets/img/portfolio/galeria.png',
      '/assets/img/portfolio/contacto.png'
    ],
    testimonial: {
      quote: 'Muy contentos con el trabajo de Federico! El sitio tiene una estética agradable y muy buena funcionalidad',
      author: 'Liliana Martínez',
      role: 'Dueña de Aconcagua Apartment',
      img: '/assets/img/testimonials/lili.jpeg'
    }
  },
  {
    id: 'destpago',
    title: 'Destinatario de Pagos',
    bannerTitle: 'Inscripción Destinatario de Pagos',
    descriptionTitle: 'Automatización del trámite de Destinatario de Pagos',
    category: 'Automatización de Trámite',
    img: '/assets/img/portfolio/destPago1.png',
    zoomImg: '/assets/img/portfolio/destPago.png',
    client: 'Gobierno',
    date: '2023',
    description: '<p>Automatización del trámite de Destinatario de Pagos.</p>',
    sliderImages: ['/assets/img/portfolio/destPago.png'],
    hideLink: true
  },
  {
    id: 'permisopesca',
    title: 'Permiso de Pesca',
    bannerTitle: 'Trámite de Permiso de Pesca',
    descriptionTitle: 'Automatización del trámite de Permiso de Pesca',
    category: 'Automatización de Trámite',
    img: '/assets/img/permiso-pesca.png',
    zoomImg: '/assets/img/permiso-pesca.png',
    client: 'Gobierno de San Juan',
    date: '2024',
    description: '<p>Automatización del trámite de Permiso de Pesca para la Secretaría de Estado de Ambiente y Desarrollo Sustentable.</p>',
    sliderImages: ['/assets/img/permiso-pesca.png']
  },
  {
    id: 'dashboard1',
    title: 'Dashboard 1',
    bannerTitle: 'Dashboard para Análisis de Datos',
    descriptionTitle: 'Tablero para análisis de Trasplantes',
    category: 'Análisis de Datos',
    img: '/assets/img/portfolio/trasplantes1.jpeg',
    zoomImg: '/assets/img/portfolio/trasplantes.jpeg',
    client: 'Coderhouse',
    date: 'Diciembre, 2021',
    url: 'https://drive.google.com/drive/folders/15bDLOy0vti78lUaQG5am2k3ERN_zUqv5',
    urlType: 'link',
    urlLabel: 'URL Proyecto',
    linkText: 'Link',
    description: `
            <p>
              Éste proyecto, realizado en el curso de Data Analytics en
              Coderhouse, consistió en el desarrollo de un dashboard de
              control en <span>Power BI</span>, con el fin de analizar
              indicadores estratégicos y operativos.
            </p>
            <p>
              Como temática, se decidió analizar los datos de pacientes
              trasplantados en efectores públicos y privados, de la Ciudad
              de Buenos Aires, desde el año 2012 al año 2020, con datos
              provenientes de bases de datos del gobierno de la Ciudad.
            </p>
            <p>
              El objetivo del análisis es determinar cuáles son las
              principales características de las personas que fueron
              trasplantadas en el período del año 2012 al año 2020 (grupos
              etarios, promedio de edad, género), cuáles fueron los tipos y
              motivos del trasplante (órganos implantados) y cuál será la
              evolución de los pacientes trasplantados, con el fin de
              prevenir los factores determinantes que ocasionan dichos
              trasplantes.
            </p>
        `,
    sliderImages: ['/assets/img/portfolio/trasplantes.jpeg']
  },
  {
    id: 'dashboard2',
    title: 'Dashboard 2',
    bannerTitle: 'Dashboard para Análisis de Datos',
    descriptionTitle: 'Tablero para Defensa al Consumidor San Juan',
    category: 'Análisis de Datos',
    img: '/assets/img/portfolio/tablero_DefCons.png',
    zoomImg: '/assets/img/portfolio/tablero_DefCons1.png',
    client: 'Defensa al Consumidor San Juan',
    date: 'Diciembre, 2024',
    description: `
            <p>
              Éste dashboard se realizó para brindar una visualización
              rápida de la gestión de expedientes que maneja la repartición.
              Se utilizó la plataforma <span>Knowage</span>, con el fin de
              analizar la dinámica de las denuncias que ingresan.
            </p>
            <p>
              El objetivo del análisis es llevar un control de la cantidad
              de denuncias que ingresan por los distintos canales (forma
              presencial o a través de Ciudadano Digital). Ésto permite
              tener una visión clara del movimiento de las denuncias y
              observar tendencias, para poder tomar decisiones estratégicas
              y operativas en base a éstos datos.
            </p>
        `,
    sliderImages: [
      '/assets/img/portfolio/tablero_DefCons1.png',
      '/assets/img/portfolio/tablero_DefCons2.png',
      '/assets/img/portfolio/tablero_DefCons3.png',
      '/assets/img/portfolio/tablero_DefCons4.png'
    ]
  },
  {
    id: 'rupe',
    title: 'Proveedor RUPE',
    bannerTitle: 'RUPE',
    descriptionTitle: 'Gestión de proveedores RUPE',
    category: 'Automatización de Trámite',
    img: '/assets/img/portfolio/rupe1.png',
    zoomImg: '/assets/img/portfolio/rupe.png',
    client: 'Gobierno',
    date: '2023',
    description: '<p>Gestión de proveedores RUPE.</p>',
    sliderImages: ['/assets/img/portfolio/rupe.png'],
    hideLink: true
  },
  {
    id: 'cumple',
    title: 'Invitación Cumpleaños',
    bannerTitle: 'Invitación de Cumpleaños',
    descriptionTitle: 'Invitación de Cumpleaños Web',
    category: 'Diseño Web',
    img: '/assets/img/portfolio/cumple6.png',
    zoomImg: '/assets/img/portfolio/cumple.png',
    client: 'Matteo',
    date: 'Julio, 2024',
    url: 'https://cumple-matteo.web.app/',
    urlType: 'button',
    description: `
            <p>
              El sitio web fue desarrollado en
              <span>HTML, CSS y JavaScript</span>. Cuenta con un contador de
              días que faltan para el evento, mapa con ubicación del lugar
              del festejo, confirmación de asistencia mediante WhatsApp y un
              glider de imágenes.
            </p>
        `,
    sliderImages: [
      '/assets/img/portfolio/cumple.png',
      '/assets/img/portfolio/cumple1.png',
      '/assets/img/portfolio/cumple2.png',
      '/assets/img/portfolio/cumple3.png',
      '/assets/img/portfolio/cumple4.png',
      '/assets/img/portfolio/cumple5.png'
    ],
    testimonial: {
      quote: '¡Los invitados quedaron fascinados con ésta hermosa invitación de cumpleaños!',
      author: 'Daniela Estévez',
      role: 'Madre de Matteo',
      img: '/assets/img/testimonials/dani.jpeg'
    }
  },
  {
    id: 'defcons',
    title: 'Denuncia en Defensa al Consumidor',
    bannerTitle: 'Denuncia en Defensa al Consumidor',
    descriptionTitle: 'Automatización de Denuncia para Defensa al Consumidor San Juan',
    category: 'Automatización de Trámite',
    img: '/assets/img/portfolio/defCons1.png',
    zoomImg: '/assets/img/portfolio/defCons.png',
    client: 'Gobierno de San Juan',
    date: 'Marzo, 2024',
    description: `
            <p>
              El objetivo del proyecto fue brindar la posibilidad al
              ciudadano de realizar la denuncia a través de Ciudadano
              Digital por medio de un formulario, el cual debe completarse
              con sus datos personales y los del denunciado. Además, se debe
              adjuntar documentación requerida. Los datos ingresados y la
              documentación, son insertados en un sistema interno de gestión
              para su revisión y toma de la denuncia.
            </p>
            <p>
              Para el desarrollo del proceso de automatización del trámite
              de denuncia se utilizó la plataforma
              <span>Bonita Soft (BPM)</span> dentro de la cual se hicieron
              algunos desarrollos en
              <span>HTML, CSS, JS, Groovy (Java)</span> y, además, el manejo
              de una API de integración desarrollada en <span>Node.js</span>
            </p>
        `,
    sliderImages: [
      '/assets/img/portfolio/defCons2.png',
      '/assets/img/portfolio/defCons.png',
      '/assets/img/portfolio/defCons3.png',
      '/assets/img/portfolio/defCons4.png'
    ]
  },
  {
    id: 'novex',
    title: 'Novedades de Sueldo',
    bannerTitle: 'Novedades de Sueldo',
    descriptionTitle: 'Automatización del proceso para informar Novedades de Sueldo',
    category: 'Automatización de Trámite',
    img: '/assets/img/portfolio/formulario_novex1.png',
    zoomImg: '/assets/img/portfolio/formulario_novex.png',
    client: 'Gobierno de San Juan',
    date: 'Septiembre, 2023',
    description: `
            <p>
              El proyecto consistió en automatizar el proceso para informar
              las Novedades de Sueldo de diversas organizaciones. Se diseñó
              un formulario que se conecta, mediante APIs, a distintos
              servicios. Éstos nos permiten obtener el dato de la
              organización a la cuál representa un determinado apoderado,
              previamente logueado en Ciudadano Digital, y el período en
              curso.
            </p>
            <p>
              Por último, permite adjuntar un archivo en formato .txt con
              las novedades que se desean informar. Una vez completado el
              formulario, se genera un expediente en un sistema de gestión
              interno y se envían, al apoderado, las notificaciones
              correspondientes con el estado del trámite.
            </p>
            <p>
              Para llevar a cabo éste proyecto, se utilizó la metodología
              <span>BPM (Bussiness Process Management)</span> mediante el
              uso de la plataforma <span>Bonita</span>, y se diseñó una API,
              en <span>Node.Js</span>, que posibilita la conexión con
              distintos servicios.
            </p>
        `,
    sliderImages: ['/assets/img/portfolio/formulario_novex.png']
  },
  {
    id: 'portfolio-ap',
    title: 'Portfolio Personal',
    bannerTitle: 'Portfolio Personal',
    descriptionTitle: 'Portfolio Personal para Argentina Programa',
    category: 'Diseño Web',
    img: '/assets/img/portfolio/ap1.png',
    zoomImg: '/assets/img/portfolio/ap.png',
    client: 'Argentina Programa',
    date: 'Julio, 2022',
    url: 'https://front-my-portfolio.web.app/',
    urlType: 'link',
    urlLabel: 'URL Proyecto',
    linkText: 'https://front-my-portfolio.web.app/',
    description: `
            <p>
              Proyecto realizado en el curso de Full Stack Jr. brindado por
              Argentina Programa. El objetivo de éste proyecto fue
              desarrollar un Portfolio con <span>Login</span> que nos
              permita Agregar, Borrar y Modificar <span>(ABM)</span> la
              información que deseamos, solo si estamos logueados.
            </p>
            <p>
              Para llevar a cabo éste proyecto, en la parte de Front End se
              utilizó <span>HTML, CSS, Bootstrap y Typescript</span> a
              través del desarrollo en el framework <span>Angular</span>. En
              la parte de Back End se diseñó la base de datos en
              <span>MySQL</span> y se utilizó el lenguaje <span>Java</span>
              para realizar el CRUD.
            </p>
            <p>
              El diseño de la API para conectar con el Front se realizó
              mediante <span>Java Spring Boot</span>.
            </p>
            <p>
              Finalmente, el deploy del Front se realizó mediante
              <span>Firebase</span> y el del Back a través de
              <span>Render</span> conectando la base de datos con
              <span>Clever Cloud</span>.
            </p>
        `,
    sliderImages: [
      '/assets/img/portfolio/ap.png',
      '/assets/img/portfolio/ap2.png',
      '/assets/img/portfolio/ap3.png',
      '/assets/img/portfolio/ap4.png',
      '/assets/img/portfolio/ap5.png',
      '/assets/img/portfolio/ap6.png',
      '/assets/img/portfolio/ap7.png'
    ]
  }
];
