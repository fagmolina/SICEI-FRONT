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
  stepFive: boolean;
  stepSix: boolean;
  stepSeven: boolean;
}

export interface SemilleroStepper {
  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;
  stepFour: boolean;
  stepFive: boolean;
  stepSix: boolean;
  stepSeven: boolean;
}

// Generated by https://quicktype.io

export interface TheForm {
  yearControl: string;
  tituloControl: string;
  direccionControl: Control;
  escuelasControl: Control;
  participantesControl: ParticipantesControl;
  areasLineasform: AreasLineasform;
  investigadores: Investigadore[];
  producInves: ProducInves;
  detalles: Detalles;
  estimulos: Estimulos;
  eventos: Eventos;
  presupuestoAsignado: any;
}

export interface FormSemillero {
  // grupoSemillero: GrupoSemillero;
  nombreSemillero: string;
  escuelasControl: Control;
  investigadores: Investigadore[];
  eventos: Eventos;
  estimulos: Estimulos;
  //acá voy
}

export interface GrupoSemillero {
  nombreSemillero: string;
  unidadEscuela: any;
  area: any;
  linea: any;
}

export interface Eventos {
  tipo: string;
  participacion: string;
  departamento: string;
  ciudad: string;
  fecha: string;
  lugar: string;
  pais: string;
}

export interface PresupuestoAsignado {
  colcienciasCheck: boolean;
  colcienciasDescripcionControl: string;
  colcienciasAporteControl: number;
  ministeriosCheck: boolean;
  ministerioDescripcionControl: string;
  ministerioAporteControl: number;
  eIntCheck: boolean;
  eIntDescripcionControl: string;
  eIntAporteControl: number;
  oInstCheck: boolean;
  oInstDescripcionControl: string;
  oInstAporteControl: number;
  OFPLACheck: boolean;
  OFPLAControl: number;
  DINAECheck: boolean;
  DINAEControl: number;
  convExtCheck: boolean;
  convenioExDescControl: string;
  convenioExAporteControl: number;
  totalExterno: number;
  totalInterno: number;
  totalGeneral: number;
}

export interface AreasLineasform {
  lineasControl: LineasControl[];
  areasControl: AreasControl[];
}

export interface AreasControl {
  id: number;
  name: string;
  lineas: number[];
}

export interface LineasControl {
  id: number;
  name: string;
}

export interface Control {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Investigadore {
  grade: string;
  id: number;
  name: string;
}

export interface ParticipantesControl {
  dataControl: Control[];
}

export interface ProducInves {
  guiaControl: boolean;
  cartillaControl: boolean;
  prototipoControl: boolean;
  articuloControl: boolean;
  libroControl: boolean;
  capituloControl: boolean;
  manualesControl: boolean;
  procedimientoControl: boolean;
  instructivoControl: boolean;
}

export interface Estimulos {
  condecoraciones: boolean;
  felicitaciones: boolean;
  personajeMes: boolean;
  permisos: boolean;
  estatuillas: boolean;
  monedas: boolean;
  capacitaciones: boolean;
  capacitacionesDetalles: DetallesCapacitaciones;
}
export interface DetallesCapacitaciones {
  becas: boolean;
  diplomados: boolean;
  seminarios: boolean;
  cursos: boolean;
}

export interface Detalles {
  procedimientoInputControl: string;
  cartillaInputControl: string;
  guiaInputControl: string;
  manualesInputControl: string;
  prototipoInputControl: string;
  instructivoInputControl: string;
  articuloFormGroupControl: ArticuloFormGroupControl;
  libroFormGroupControl: LibroFormGroupControl;
}

export interface ArticuloFormGroupControl {
  yearControl: string;
  publishedMagazineNameControl: string;
  articleNameControl: string;
  issnCodeControl: string;
  authorControl: string;
}

export interface LibroFormGroupControl {
  yearControl: string;
  bookNameControl: string;
  startPageControl: string;
  endPageControl: string;
  editorialControl: string;
  isbnCodeControl: string;
  authorControl: string;
}

export interface Colombia {
  id: number;
  departamento: string;
  ciudades: string[];
}

export interface NewUser {
  Tipo_Doc: string;
  Documento: string;
  Nombres: string;
  Apellido: string;
  Tlf: string;
  Grado: string;
  Unidad: string;
  Email: string;
  Perfil: string;
  PSI: string;
  passwdControl: string;
}

export interface NewInvestigador {
  Apellidos: string;
  Categ: boolean;
  Dir: string;
  Documento: string;
  Email: string;
  Estudiante: boolean;
  Estudios: string[];
  Otros: string;
  Grado: string;
  Investigador: boolean;
  Nombres: string;
  Tlf: string;
}

