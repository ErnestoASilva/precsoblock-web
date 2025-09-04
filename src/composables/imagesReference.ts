const images = [
    // BLOCK
    {
        id: 100,
        src: '/img/Block/block_gris_10.png',
        alt: 'Block gris',
        title: 'Block Estándar 10',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 101,
        src: '/img/Block/block_gris_12.png',
        alt: 'Block gris',
        title: 'Block Estándar 12',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 102,
        src: '/img/Block/block_gris_15.png',
        alt: 'Block gris',
        title: 'Block Estándar 15',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 103,
        src: '/img/Block/block_gris_20.png',
        alt: 'Block gris',
        title: 'Block Estándar 20',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 105,
        src: '/img/Block/block_gris_chaparro.png',
        alt: 'Block gris',
        title: 'Block Chaparro',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 104,
        src: '/img/Block/block_gris_medio.png',
        alt: 'Block gris',
        title: 'Block Medio',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 106,
        src: '/img/Block/block_adobe.png',
        alt: 'Block gris',
        title: 'Block Adobe',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 107,
        src: '/img/Block/block_adobe_medio.png',
        alt: 'Block gris',
        title: 'Block Medio Adobe',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 108,
        src: '/img/Block/block_arena.png',
        alt: 'Block gris',
        title: 'Block Arena',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 109,
        src: '/img/Block/block_termico.png',
        alt: 'Block gris',
        title: 'Block Termico',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 110,
        src: '/img/Block/block_termico_medio.png',
        alt: 'Block gris',
        title: 'Block Medio Termico',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 111,
        src: '/img/Block/block_gris_roca.png',
        alt: 'Block gris',
        title: 'Block Roca Gris',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 112,
        src: '/img/Block/block_adobe_roca.png',
        alt: 'Block gris',
        title: 'Block Roca Adobe',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 113,
        src: '/img/Block/block_gris_estriado_liso.png',
        alt: 'Block gris',
        title: 'Block Estriado Liso Gris',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 114,
        src: '/img/Block/block_adobe_estriado_liso.png',
        alt: 'Block gris',
        title: 'Block Estriado Liso Adobe',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 115,
        src: '/img/Block/block_arena_estriado_liso.png',
        alt: 'Block gris',
        title: 'Block Estriado Liso Arena',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 116,
        src: '/img/Block/dala_gris.png',
        alt: 'Block Dala Gris',
        title: 'Block Dala Gris',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 117,
        src: '/img/Block/dala_gris_medio.png',
        alt: 'Block Dala Gris',
        title: 'Block Dala Medio Gris',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 118,
        src: '/img/Block/dala_adobe.png',
        alt: 'Block dala adobe',
        title: 'Block Dala Adobe',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 119,
        src: '/img/Block/dala_termica.png',
        alt: 'Block dala termico',
        title: 'Block Dala Termico',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 120,
        src: '/img/Block/dala_gris_roca.png',
        alt: 'Block dala termico',
        title: 'Block Dala Roca Gris',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },
    {
        id: 121,
        src: '/img/Block/dala_adobe_roca.png',
        alt: 'Block dala termico',
        title: 'Block Dala Roca Adobe ',
        category: 'Block',
        categoryId: 'block',
        description: 'Nuestro block de concreto de máxima resistencia.'
    },

    // ADOQUIN
    {
        id: 200,
        src: '/img/Adoquin/adoquin_gris.png',
        alt: 'Adoquín decorativo',
        title: 'Adoquín Gris',
        category: 'Adoquín',
        categoryId: 'adoquin',
        description: 'Adoquín decorativo para exteriores, disponible en varios colores.'
    },
    {
        id: 201,
        src: '/img/Adoquin/adoquin_jazpeado.png',
        alt: 'Adoquín decorativo',
        title: 'Adoquín Jazpeado',
        category: 'Adoquín',
        categoryId: 'adoquin',
        description: 'Adoquín decorativo para exteriores, disponible en varios colores.'
    },
    {
        id: 202,
        src: '/img/Adoquin/adoquin_negro.png',
        alt: 'Adoquín decorativo',
        title: 'Adoquín Negro',
        category: 'Adoquín',
        categoryId: 'adoquin',
        description: 'Adoquín decorativo para exteriores, disponible en varios colores.'
    },
    {
        id: 203,
        src: '/img/Adoquin/adoquin_adobe.png',
        alt: 'Adoquín decorativo',
        title: 'Adoquín Adobe',
        category: 'Adoquín',
        categoryId: 'adoquin',
        description: 'Adoquín decorativo para exteriores, disponible en varios colores.'
    },
    {
        id: 204,
        src: '/img/Adoquin/adoquin_rojo.png',
        alt: 'Adoquín decorativo',
        title: 'Adoquín Rojo',
        category: 'Adoquín',
        categoryId: 'adoquin',
        description: 'Adoquín decorativo para exteriores, disponible en varios colores.'
    },
    {
        id: 205,
        src: '/img/Adoquin/ado_sienna_gris.png',
        alt: 'Adoquín decorativo',
        title: 'Adoquín Sienna Gris',
        category: 'Adoquín',
        categoryId: 'adoquin',
        description: 'Adoquín decorativo para exteriores, disponible en varios colores.'
    },
    {
        id: 206,
        src: '/img/Adoquin/ado_sienna_rojo.png',
        alt: 'Adoquín decorativo',
        title: 'Adoquín Sienna Rojo',
        category: 'Adoquín',
        categoryId: 'adoquin',
        description: 'Adoquín decorativo para exteriores, disponible en varios colores.'
    },
    {
        id: 207,
        src: '/img/Adoquin/ado_sienna_negro.png',
        alt: 'Adoquín decorativo',
        title: 'Adoquín Sienna Negro',
        category: 'Adoquín',
        categoryId: 'adoquin',
        description: 'Adoquín decorativo para exteriores, disponible en varios colores.'
    },
    {
        id: 208,
        src: '/img/Adoquin/ado_sienna_adobe.png',
        alt: 'Adoquín decorativo',
        title: 'Adoquín Sienna Adobe',
        category: 'Adoquín',
        categoryId: 'adoquin',
        description: 'Adoquín decorativo para exteriores, disponible en varios colores.'
    },
    // CELOSIA
    {
        id: 300,
        src: '/img/Celosia/celocia_gris.png',
        alt: 'Celosía moderna',
        title: 'Celosía Gris',
        category: 'Celosía',
        categoryId: 'celosia',
        description: 'Celosías para división de espacios y decoración.'
    },
    {
        id: 301,
        src: '/img/Celosia/celosia_adobe.png',
        alt: 'Celosía moderna',
        title: 'Celosía Adobe',
        category: 'Celosía',
        categoryId: 'celosia',
        description: 'Celosías para división de espacios y decoración.'
    },
    {
        id: 302,
        src: '/img/Celosia/celosia_negro.png',
        alt: 'Celosía moderna',
        title: 'Celosía Negro',
        category: 'Celosía',
        categoryId: 'celosia',
        description: 'Celosías para división de espacios y decoración.'
    },
    {
        id: 303,
        src: '/img/Celosia/celosia_roja.png',
        alt: 'Celosía moderna',
        title: 'Celosía Roja',
        category: 'Celosía',
        categoryId: 'celosia',
        description: 'Celosías para división de espacios y decoración.'
    },
    {
        id: 304,
        src: '/img/Celosia/cel_persiana_adobe.png',
        alt: 'Celosía persiana',
        title: 'Celosía Persiana Adobe',
        category: 'Celosía',
        categoryId: 'celosia',
        description: 'Celosías para división de espacios y decoración.'
    },
    {
        id: 305,
        src: '/img/Celosia/cel_persiana_gris.png',
        alt: 'Celosía persiana',
        title: 'Celosía Persiana Gris',
        category: 'Celosía',
        categoryId: 'celosia',
        description: 'Celosías para división de espacios y decoración.'
    },

    // LADRILLOS
    {
        id: 600,
        src: '/img/Ladrillo/ladrillo_termico.png',
        alt: 'Ladrillo Termico',
        title: 'Ladrillo Termico Blanco',
        category: 'Ladrillo',
        categoryId: 'ladrillo',
        description: 'Ladrillo termico blanco.'
    },

    // PROYECTOS
    {
        id: 400,
        src: '/img/Proyectos/proyectos_1.jpg',
        alt: 'Proyecto de construcción 1',
        title: 'Proyecto de construcción 1',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 401,
        src: '/img/Proyectos/proyectos_2.jpg',
        alt: 'Proyecto de construcción 2',
        title: 'Proyecto de construcción 2',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 402,
        src: '/img/Proyectos/proyectos_3.jpg',
        alt: 'Proyecto de construcción 3',
        title: 'Proyecto de construcción 3',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 403,
        src: '/img/Proyectos/proyectos_4.jpg',
        alt: 'Proyecto de construcción 4',
        title: 'Proyecto de construcción 4',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 404,
        src: '/img/Proyectos/proyectos_5.jpg',
        alt: 'Proyecto de construcción 5',
        title: 'Proyecto de construcción 5',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 405,
        src: '/img/Proyectos/proyectos_6.jpg',
        alt: 'Proyecto de construcción 6',
        title: 'Proyecto de construcción 6',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 406,
        src: '/img/Proyectos/proyectos_7.jpg',
        alt: 'Proyecto de construcción 7',
        title: 'Proyecto de construcción 7',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 407,
        src: '/img/Proyectos/proyectos_8.jpg',
        alt: 'Proyecto de construcción 8',
        title: 'Proyecto de construcción 8',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 408,
        src: '/img/Proyectos/proyectos_9.jpg',
        alt: 'Proyecto de construcción 9',
        title: 'Proyecto de construcción 9',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 409,
        src: '/img/Proyectos/proyectos_10.jpg',
        alt: 'Proyecto de construcción 10',
        title: 'Proyecto de construcción 10',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 410,
        src: '/img/Proyectos/proyectos_11.jpg',
        alt: 'Proyecto de construcción 11',
        title: 'Proyecto de construcción 11',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 411,
        src: '/img/Proyectos/proyectos_12.jpg',
        alt: 'Proyecto de construcción 12',
        title: 'Proyecto de construcción 12',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 412,
        src: '/img/Proyectos/proyectos_13.jpg',
        alt: 'Proyecto de construcción 13',
        title: 'Proyecto de construcción 13',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 413,
        src: '/img/Proyectos/proyectos_14.jpg',
        alt: 'Proyecto de construcción 14',
        title: 'Proyecto de construcción 14',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 414,
        src: '/img/Proyectos/proyectos_15.jpg',
        alt: 'Proyecto de construcción 15',
        title: 'Proyecto de construcción 15',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    {
        id: 415,
        src: '/img/Proyectos/proyectos_16.jpg',
        alt: 'Proyecto de construcción 16',
        title: 'Proyecto de construcción 16',
        category: 'Proyectos',
        categoryId: 'proyectos',
        description: 'Vivienda construida con nuestros materiales de alta calidad.'
    },
    // INSTALACIONES
    {
        id: 500,
        src: '/img/Instalaciones/instalacion_1.jpg',
        alt: 'Instalación profesional',
        title: 'Instalación Expertos 1',
        category: 'Instalaciones',
        categoryId: 'instalaciones',
        description: 'Nuestro equipo de instalación trabajando en proyecto comercial.'
    },
    {
        id: 501,
        src: '/img/Instalaciones/instalacion_2.jpg',
        alt: 'Instalación profesional',
        title: 'Instalación Expertos 2',
        category: 'Instalaciones',
        categoryId: 'instalaciones',
        description: 'Nuestro equipo de instalación trabajando en proyecto comercial.'
    },
    {
        id: 502,
        src: '/img/Instalaciones/instalacion_3.jpg',
        alt: 'Instalación profesional',
        title: 'Instalación Expertos 3',
        category: 'Instalaciones',
        categoryId: 'instalaciones',
        description: 'Nuestro equipo de instalación trabajando en proyecto comercial.'
    },
    {
        id: 503,
        src: '/img/Instalaciones/instalacion_4.jpg',
        alt: 'Instalación profesional',
        title: 'Instalación Expertos 4',
        category: 'Instalaciones',
        categoryId: 'instalaciones',
        description: 'Nuestro equipo de instalación trabajando en proyecto comercial.'
    },
    {
        id: 504,
        src: '/img/Instalaciones/instalacion_5.jpg',
        alt: 'Instalación profesional',
        title: 'Instalación Expertos 5',
        category: 'Instalaciones',
        categoryId: 'instalaciones',
        description: 'Nuestro equipo de instalación trabajando en proyecto comercial.'
    },
    {
        id: 505,
        src: '/img/Instalaciones/instalacion_6.jpg',
        alt: 'Instalación profesional',
        title: 'Instalación Expertos 6',
        category: 'Instalaciones',
        categoryId: 'instalaciones',
        description: 'Nuestro equipo de instalación trabajando en proyecto comercial.'
    },
    {
        id: 505,
        src: '/img/Instalaciones/instalacion_7.jpg',
        alt: 'Instalación profesional',
        title: 'Instalación Expertos 7',
        category: 'Instalaciones',
        categoryId: 'instalaciones',
        description: 'Nuestro equipo de instalación trabajando en proyecto comercial.'
    },

];

export default {
    images
}