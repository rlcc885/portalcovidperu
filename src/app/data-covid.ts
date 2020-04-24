export interface DataLinkCovid{
  id: string;
  description: string;
  link: string;
  tags?: string[];
  image?: string;
};

export const data_link_covid: DataLinkCovid[] = [
  {
    id: "01",
    description: "Sacar Pase Laboral o de tránsito",
    link: "https://www.gob.pe/paselaboral",
    tags: ["permiso", "pase"],
    image: "/assets/img/01-pase-laboral.jpg",
  },
  {
    id: "02",
    description: "Si eres beneficiarios del subsidio de S/ 380",
    link: "https://bono.yomequedoencasa.pe/WEB/",
    tags: ["bono"],
    image: "/assets/img/02-bono-casa.jpg",
  },
  {
    id: "03",
    description: "Si eres beneficiario de descuento GLP",
    link: "https://fise.minem.gob.pe:23304/consulta-vales/pages/consultaVales/inicio",
    tags: ["bono", "glp"],
    image: "/assets/img/03-consulta-vale.jpg",
  },
  {
    id: "04",
    description: "Si aplicas al Bono Perú Unido",
    link: "https://www.bonoperuunido.com/beneficiarios-bono-peru-unido/",
    tags: ["bono", "peru unido"],
    image: "/assets/img/04-peruunido.jpg",
  },
  {
    id: "05",
    description: "Si aplicas al bono Independiente",
    link: "https://www.bonoindependiente.pe/",
    tags: ["bono", "independiente"],
    image: "/assets/img/05-independiente.jpg",
  },
  {
    id: "06",
    description: "Averigua cuál es tu AFP",
    link: "https://reportedeudas.sbs.gob.pe/reportesituacionprevisional/afil_consulta.aspx",
    tags: ["info", "afp"],
    image: "/assets/img/06-consulta-afp.jpg",
  },
  {
    id: "07",
    description: "Consulta si puede hacer retiro de AFP",
    link: "https://www.consultaretiroafp.pe/#/consulta",
    tags: ["retiro", "afp"],
    image: "/assets/img/07-retiro-afp.jpg",
  },
  {
    id: "08",
    description: "Conoce tus deudas con los bancos",
    link: "https://reportedeudas.sbs.gob.pe/reportedeudasSBS1/ReporteDeudaAlCliente.aspx",
    tags: ["info", "deudas", "banco"],
    image: "/assets/img/08-deudas-banco.jpg",
  },
  {
    id: "09",
    description: "Estadística oficial de contagios según Minsa en vivo",
    link: "https://covid19.minsa.gob.pe/sala_situacional.asp",
    tags: ["info", "minsa", "covid-19", "coronavirus", "cuadros estadísticos"],
    image: "/assets/img/09-sala-situacional.jpg",
  },
  {
    id: "10",
    description: "Autotest de COVID19 del Colegio Médico ",
    link: "https://www.cmp.org.pe/auto-evaluacion-covid-19/",
    tags: ["info", "autotest", "colegio médico", "covid-19", "coronavirus"],
    image: "/assets/img/10-autoevaluacion.jpg",
  },
  {
    id: "11",
    description: "Autotest de COVID19 del Minsa",
    link: "https://www.gob.pe/8665-sintomas-del-coronavirus-conocer-si-puedo-haber-contraido-el-covid-19",
    tags: ["info", "autotest", "minsa", "covid-19", "coronavirus"],
    image: "/assets/img/11-autoevaluacion.jpg",
  },
  {
    id: "12",
    description: "Clases Virtuales Colegios: Aprendo en Casa",
    link: "https://aprendoencasa.pe/#/",
    tags: ["info", "colegio", "clases"],
    image: "/assets/img/12-aprendoencasa.jpg",
  },
  {
    id: "13",
    description: "Mapa de zonas de contagiados en Perú",
    link: "http://covidperu.live/",
    tags: ["info", "mapa", "cuadros estadísticos"],
    image: "/assets/img/13-covidlive.jpg",
  },
  {
    id: "14",
    description: "Aquí tus resultados si tienes o no Coronavirus ",
    link: "https://www.ins.gob.pe/resultado_coronavirus/",
    tags: ["info", "resultados", "covid-19", "coronavirus"],
    image: "/assets/img/14-resultado-covid.jpg",
  },
  {
    id: "15",
    description: "App Android de zonas de riesgo del virus :",
    link: "https://play.google.com/store/apps/details?id=peruentusmanos.gob.pe",
    tags: ["info", "cuadros estadísticos", "android", "smartphone"],
    image: "/assets/img/15-app-covid.jpg",
  },
  {
    id: "16",
    description: "Se te perdió el DNI en estado de emergencia, obtén tu certificado C4 aquí",
    link: "https://apps.reniec.gob.pe/certins/validatos.do",
    tags: ["info", "dni", "c4", "certificado"],
    image: "/assets/img/16-reniec.jpg",
  },
  {
    id: "17",
    description: "Se te perdió tu clave de SOL SUNAT, aquí la puedes resetear",
    link: "https://www.sunat.gob.pe/ol-ti-itadminforuc-inscripcion/inscripcion",
    tags: ["info", "clave sol", "ruc"],
    image: "/assets/img/17-clave-sol.jpg",
  },
  {
    id: "18",
    description: "Si eres testigo o víctima de violencia familiar, haz tu denuncia aquí",
    link: "http://sistemas.pncvfs.gob.pe/contra-la-violencia/",
    tags: ["info", "denuncia", "violencia familiar"],
    image: "/assets/img/18-contraviolencia.jpg",
  },
  {
    id: "19",
    description: "Anuncios diarios del gobierno sobre Covid19",
    link: "https://www.gob.pe/institucion/pcm/colecciones/793-anuncios-diarios-del-gobierno-sobre-el-covid-19",
    tags: ["info", "anuncios oficiales", "covid-19", "coronavirus"],
    image: "/assets/img/19-anuncios-covid.jpg",
  },
  {
    id: "20",
    description: "Qué se puede hacer y qué no en estado de emergencia (cuarentena) por el #covid19",
    link: "https://www.gob.pe/8784",
    tags: ["info", "cuarentena"],
    image: "/assets/img/20-quehacer.jpg",
  },
];
