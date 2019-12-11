export interface Submenu {
    title: string;
    link: string;
    external?: boolean;
}
export interface MenuItem {
    icon: string;
    title: string;
    width: number;
    heigth: number;
    link?: string;
    submenu?: Submenu[];
}

export interface CarouselItem {
    img: string;
    title: string;
    text: string;
}

export interface InputData {
    placeholder: string;
    data: any[];
    icon: string;
}

export interface AutoCompleteData {
    placeholder: string;
    data: any[];
    icon: string;
    argument: string;
}

export interface Investigador {
    grade: string;
    id: number;
    name: string;
}

export interface Area {
    id: number;
    name: string;
    lineas: number[];
}

export interface Linea {
    id: number;
    name: string;
}

export interface GriftStepper {
    stepOne: boolean;
    stepTwo: boolean;
    stepThree: boolean;
    stepFour: boolean;
}
