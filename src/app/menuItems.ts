import { MenuItem } from './interfaces/interfaces';

export const REAL_MENU_ITEMS: MenuItem[] = [
    // {
    //     title: 'Login',
    //     heigth: 24,
    //     icon: 'lock',
    //     width: 24,
    //     link: 'login'
    // },
    {
        title: 'Página principal',
        heigth: 24,
        icon: 'home',
        width: 24,
        link: 'home'
    },
    {
        title: 'GRIFT',
        heigth: 24,
        icon: 'playlist_add_check',
        width: 24,
        link: 'investigacion-institucional',
        submenu: [
            {
                link: 'investigacion-institucional',
                title: 'Investigación Institucional'
            },
            {
                link: 'investigacion-implementada',
                title: 'Investigación Implementada'
            },
            {
                link: 'caso-emblematico',
                title: 'Caso emblemático'
            },
            {
                link: 'semilleros-investigacion',
                title: 'Semilleros de investigación'
            },
            {
                link: 'redes-investigacion',
                title: 'Redes de investigación'
            },
            {
                link: 'categorizacion-colciencias',
                title: 'Categorización Colciencias'
            },
            {
                link: 'grafica-productos',
                title: 'Grafica Producto Investigacion'
            },
            {
                link: 'grafica-investigaciones',
                title: 'Grafica Investigaciones Institucionales'
            },
        ]
    },
    {
        title: 'GREIT',
        heigth: 24,
        icon: 'fingerprint',
        width: 24,
        link: 'propiedad-intelectual',
        submenu: [
            {
                link: 'propiedad-intelectual',
                title: 'Propiedad intelectual'
            },
            {
                link: 'greit-investigcion-institucional',
                title: 'Investigación institucional'
            },
            {
                link: 'greit-investigacion-implementada',
                title: 'Investigción implementada'
            }
        ]
    },
    {
        title: 'GRIND',
        heigth: 24,
        icon: 'local_library',
        width: 24,
        link: 'rlct',
        submenu: [
            {
                title: 'Revistas, logos, ciencia y tecnología',
                link: 'rlct'
            },
            {
                title: 'Investigaciones Policia',
                link: 'https://policia.edu.co/investigacion/',
                external: true
            },
            {
                title: 'Libros resultado de investigación',
                link: 'lri'
            }
        ]
    },
    {
        title: 'Adminstración',
        heigth: 24,
        icon: 'settings_applications',
        width: 24,
        link: 'administracion'
    }
];
