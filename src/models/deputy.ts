import AdministrativeRecord from "./administrative-record";
import CommiteeRecord from "./commitee-record";

interface Deputy {
  name: string,
  email: string,
  "legislature": string,
  "active": boolean,
  "party": string,
  "birth_date": Date,
  "telephone": string,
  "contact_details": [],
  "photo_urls": string[],
  "legislative_experience": string,
  "swearing_date": Date,
  "academic_preparation": string,
  "location": "",
  "last_degree_of_studies": string,
  "state": string,
  "district": string,
  "city": string,
  "relative_majority": boolean,
  "committee_history": CommiteeRecord[],
  "administrative_history": AdministrativeRecord[],
  "legislative_history": [
    {
      "start_year": "2004",
      "end_year": "2007",
      "description": {
        "es_MX": "Diputada local en la LXI Legislatura del Congreso de Chihuahua."
      }
    },
    {
      "start_year": "2012",
      "end_year": "2015",
      "description": {
        "es_MX": "Diputada federal en la LXII Legislatura. Vicecoordinadora del Grupo Parlamentario del PT. Secretaría de las comisiones de Economía; Justicia; Especial para Conocer y Dar Seguimiento Puntual y Exhaustivo a las Acciones que han Emprendido las Autoridades Competentes en relación a los Feminicidios registrados en México. Integrante de las comisiones de Transparencia y Anticorrupción; Especial de Industria Manufacturera y Maquiladora de Exportación; Para Revisar el Proceso de Licitación, Emisión del Fallo y su Cancelación, para la Construcción del Tren México – Querétaro; Seguimiento a la problemática generada por el derrame de diversas sustancias contaminantes en el río Sonora; Seguimiento a las Investigaciones relacionadas con los hechos ocurridos en Iguala, Guerrero, a alumnos de la Escuela Normal Rural de Ayotzinapa Raúl Isidro Burgos; Investigación de Contratos Celebrados por Petróleos Mexicanos, sus Empresas Subsidiarias y Filiales de 2006 a la Fecha; y, Comité de Estudios Sociales y de Opinión Pública"
      }
    }
  ],
  "political_history": [
    {
      "start_year": null,
      "end_year": null,
      "description": {
        "es_MX": "Integrante fundador del PT."
      }
    },
    {
      "start_year": null,
      "end_year": null,
      "description": {
        "es_MX": "Integrante fundador del Comité de Defensa Popular."
      }
    },
    {
      "start_year": "2000",
      "end_year": null,
      "description": {
        "es_MX": "Integrante del CEN del PT."
      }
    },
    {
      "start_year": "2001",
      "end_year": null,
      "description": {
        "es_MX": "Coordinadora estatal del PT en Chihuahua."
      }
    },
    {
      "start_year": "2002",
      "end_year": "2004",
      "description": {
        "es_MX": "Consultora de la Comisión Ejecutiva Nacional (CEN) y Comisión Estatal del PT."
      }
    },
    {
      "start_year": "2004",
      "end_year": "2007",
      "description": {
        "es_MX": "Representante del PT ante el IEE de Chihuahua."
      }
    },
    {
      "start_year": "2006",
      "end_year": "2006",
      "description": {
        "es_MX": "Coordinadora de la Campaña de AMLO, para presidente de la Republica, en Chihuahua. "
      }
    },
    {
      "start_year": "2007",
      "end_year": "2008",
      "description": {
        "es_MX": "Asesora del PT en la Comisión Especial para la Reforma del Estado (CENCA)."
      }
    },
    {
      "start_year": "2009",
      "end_year": "2009",
      "description": {
        "es_MX": "Precandidata a diputada federal."
      }
    },
    {
      "start_year": "2012",
      "end_year": "2012",
      "description": {
        "es_MX": "Coordinadora de la Campaña de AMLO, para presidente de la Republica, en Chihuahua. "
      }
    },
    {
      "start_year": "2015",
      "end_year": null,
      "description": {
        "es_MX": "Representante propietario del Poder Legislativo de la LXII Legislatura, ante el Consejo General del INE, por el PT."
      }
    },
    {
      "start_year": "2015",
      "end_year": "2015",
      "description": {
        "es_MX": "Representante suplente del Poder Legislativo de la LXII Legislatura, ante el Consejo General del INE, por el PT."
      }
    },
    {
      "start_year": "2016",
      "end_year": "2016",
      "description": {
        "es_MX": "Coordinadora de campaña del PT en Michoacán y Tamaulipas."
      }
    },
    {
      "start_year": "2018",
      "end_year": "2018",
      "description": {
        "es_MX": "Coordinadora de Campaña del PT para la 1era. Circunscripción."
      }
    }
  ],
  "academic_history": [
    {
      "start_year": "1996",
      "end_year": "2000",
      "description": {
        "es_MX": "Licenciatura en Administración Financiera por el ITESM."
      }
    },
    {
      "start_year": "2004",
      "end_year": "2006",
      "description": {
        "es_MX": "Maestría en Gestión Pública Aplicada por el Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)."
      }
    },
    {
      "start_year": "2004",
      "end_year": "2007",
      "description": {
        "es_MX": "Docente asistente Adaptive Leadership Masterclass en Harvard University. "
      }
    },
    {
      "start_year": "2010",
      "end_year": "2012",
      "description": {
        "es_MX": "Maestría en Administración Pública por la Harvard University, John F. Kennedy School of Government."
      }
    },
    {
      "start_year": "2017",
      "end_year": "2018",
      "description": {
        "es_MX": "Docente en la Facultad de Ciencias Políticas y Sociales de la UNAM."
      }
    }
  ],
  "private_experience": [
    {
      "start_year": null,
      "end_year": null,
      "description": {
        "es_MX": "Articulista del Heraldo de Chihuahua. "
      }
    }
  ],
  "other_experience": [
    {
      "start_year": null,
      "end_year": null,
      "description": {
        "es_MX": "Integrante del Programa de Becas de Posgrado del Japón/ Banco Mundial."
      }
    },
    {
      "start_year": null,
      "end_year": null,
      "description": {
        "es_MX": "Reconocida como una de las Estrellas Harvard."
      }
    },
    {
      "start_year": "2000",
      "end_year": "2000",
      "description": {
        "es_MX": "Seminario en Gestión Estratégica."
      }
    },
    {
      "start_year": "2010",
      "end_year": "2012",
      "description": {
        "es_MX": "Integrante del Grupo Editorial Harvard Latin-American Journal."
      }
    },
    {
      "start_year": "2010",
      "end_year": "2012",
      "description": {
        "es_MX": "Vicepresidenta de la Asociación de Estudiantes Mexicanos de Harvard (HUMA)."
      }
    },
    {
      "start_year": "2010",
      "end_year": "2012",
      "description": {
        "es_MX": "Vicepresidenta de la Asociación de Estudiantes Latinoamericanos (LACAU)."
      }
    },
    {
      "start_year": "2011",
      "end_year": "2011",
      "description": {
        "es_MX": "Seminario en Prevención y Resolución de Conflictos."
      }
    },
    {
      "start_year": "2012",
      "end_year": "2012",
      "description": {
        "es_MX": "Candidata al premio de la Función Pública de la Universidad de Harvard en 2012."
      }
    },
    {
      "start_year": "2016",
      "end_year": null,
      "description": {
        "es_MX": "Fundadora de LIBRE -La Visión de un País-."
      }
    },
    {
      "start_year": "2016",
      "end_year": "2016",
      "description": {
        "es_MX": "Participó en el foro Inclusive Security: Standing Up To Violence del Instituto de Política de Universidad de Harvard."
      }
    },
    {
      "start_year": "2016",
      "end_year": "2016",
      "description": {
        "es_MX": "Panelista en Women in the World’s 7th Annual Summit en New York con el tema: WOMEN ON THE RUN: Why the women and girls of Central America are fleeing to the United States."
      }
    },
    {
      "start_year": "2016",
      "end_year": "2016",
      "description": {
        "es_MX": "Fundadora y presidenta honorifica de Cibre A. C."
      }
    }
  ]
}
