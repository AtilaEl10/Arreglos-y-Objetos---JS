// Arrays y objetos de cada item
let radiologia = [
    {
      "HORA": "11:00",
      "ESPECIALISTA": "IGNACIO SCHULZ",
      "PACIENTE": "FRANCISCA ROJAS",
      "RUT": "9878782-1",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "FEDERICO SUBERCASEAUX",
      "PACIENTE": "PAMELA ESTRADA",
      "RUT": "15345241-3",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:00",
      "ESPECIALISTA": "FERNANDO WURTHZ",
      "PACIENTE": "ARMANDO LUNA",
      "RUT": "16445345-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:30",
      "ESPECIALISTA": "ANA MARIA GODOY",
      "PACIENTE": "MANUEL GODOY",
      "RUT": "17666419-0",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "16:00",
      "ESPECIALISTA": "PATRICIA SUAZO",
      "PACIENTE": "RAMON ULLOA",
      "RUT": "14989389-K",
      "PREVISION": "FONASA"
    }
];
radiologia.push(
  {
    "HORA": "9:00",
    "ESPECIALISTA": "RENÉ POBLETE",
    "PACIENTE": "ANA GELLONA",
    "RUT": "13123329-7",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "9:30",
    "ESPECIALISTA": "MARIA SOLAR",
    "PACIENTE": "RAMIRO ANDRADE",
    "RUT": "12221451-K",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "10:00",
    "ESPECIALISTA": "RAUL LOYOLA",
    "PACIENTE": "CARMEN ISLA",
    "RUT": "10112348-3",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "10:30",
    "ESPECIALISTA": "ANTONIO LARENAS",
    "PACIENTE": "PABLO LOAYZA",
    "RUT": "13453234-1",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "12:00",
    "ESPECIALISTA": "MATIAS ARAVENA",
    "PACIENTE": "SUSANA POBLETE",
    "RUT": "14345656-6",
    "PREVISION": "FONASA"
  },
);
let traumatologia = [
    {
      "HORA": "08:00",
      "ESPECIALISTA": "MARIA PAZ ALTUZARRA",
      "PACIENTE": "PAULA SANCHEZ",
      "RUT": "15554774-5",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "10:00",
      "ESPECIALISTA": "RAUL ARAYA",
      "PACIENTE": "ANGÉLICA NAVAS",
      "RUT": "15444147-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "10:30",
      "ESPECIALISTA": "MARIA ARRIAGADA",
      "PACIENTE": "ANA KLAPP",
      "RUT": "17879423-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:00",
      "ESPECIALISTA": "ALEJANDRO BADILLA",
      "PACIENTE": "FELIPE MARDONES",
      "RUT": "1547423-6",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "CECILIA BUDNIK",
      "PACIENTE": "DIEGO MARRE",
      "RUT": "16554741-K",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "12:00",
      "ESPECIALISTA": "ARTURO CAVAGNARO",
      "PACIENTE": "CECILIA MENDEZ",
      "RUT": "9747535-8",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "12:30",
      "ESPECIALISTA": "ANDRES KANACRI",
      "PACIENTE": "MARCIAL SUAZO",
      "RUT": "11254785-5",
      "PREVISION": "ISAPRE"
    }
];
traumatologia.pop();
traumatologia.shift();

let dental = [
    {
      "HORA": "08:30",
      "ESPECIALISTA": "ANDREA ZUÑIGA",
      "PACIENTE": "MARCELA RETAMAL",
      "RUT": "11123425-6",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:00",
      "ESPECIALISTA": "MARIA PIA ZAÑARTU",
      "PACIENTE": "ANGEL MUÑOZ",
      "RUT": "9878789-2",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "SCARLETT WITTING",
      "PACIENTE": "MARIO KAST",
      "RUT": "7998789-5",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "13:00",
      "ESPECIALISTA": "FRANCISCO VON TEUBER",
      "PACIENTE": "KARIN FERNANDEZ",
      "RUT": "18887662-K",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "13:30",
      "ESPECIALISTA": "EDUARDO VIÑUELA",
      "PACIENTE": "HUGO SANCHEZ",
      "RUT": "17665461-4",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "14:00",
      "ESPECIALISTA": "RAQUEL VILLASECA",
      "PACIENTE": "ANA SEPULVEDA",
      "RUT": "14441281-0",
      "PREVISION": "ISAPRE"
    },
];

// Info ultimo y primer paciente
// RADIOLOGIA
document.write(`<h2>Radiología - Cantidad de consultas: ${radiologia.length}</h2> <p>Primera atención: <span>${radiologia[0].RUT} - ${radiologia[0].PREVISION}</span> | Última atención: <span>${radiologia[radiologia.length - 1].RUT} - ${radiologia[radiologia.length - 1].PREVISION}</span></p>`);
// TRAUMATOLOGIA
document.write(`<h2>Traumatologia - Cantidad de consultas: ${traumatologia.length}</h2> <p>Primera atención: <span>${traumatologia[0].RUT} - ${traumatologia[0].PREVISION}</span> | Última atención: <span>${traumatologia[traumatologia.length - 1].RUT} - ${traumatologia[traumatologia.length - 1].PREVISION}</span></p>`);
// DENTAL
// document.write(`<h2>Dental - Cantidad de consultas: ${dental.length} </h2> <p>Primera atención: <span>${dental[0].RUT} - ${dental[0].PREVISION}</span> | Última atención: <span>${dental[dental.length - 1].RUT} - ${dental[dental.length - 1].PREVISION}</span> </p>`);
document.write("<h2>Dental - Datos de Consultas</h2>")

dental.forEach(function(dataDental){
  document.write(`<p>${dataDental.HORA} - ${dataDental.ESPECIALISTA} - ${dataDental.PACIENTE} - ${dataDental.RUT} - ${dataDental.PREVISION}</p><br/>`)    
})

// Nombres de pacientes atendidos
let pacientes = radiologia.concat(traumatologia, dental);
//Todos los pacientes
document.write("<h3>Pacientes atendidos</h3> ")
pacientes.forEach(function(pacientesTotal) {
  document.write(`<p class=atendidos >${pacientesTotal.PACIENTE}</p><br>`)
})


// Cambio de previsión
const cambioIsapre = dental.map(function(elem){
  if(elem.PREVISION === "FONASA") elem.PREVISION = "ISAPRE"
  else if(elem.PREVISION === "ISAPRE") elem.PREVISION = "FONASA"

  return elem
})

document.write("<h3>Dental - Previsiones</h3> ")
dental.forEach(function(previsiones){
  document.write(`<p>Paciente: <span>${previsiones.PACIENTE}</span> - Previsión; <span>${previsiones.PREVISION}</span></p><br/>`)    
})



/*
/// Pacientes atendidos al detalle
//radiologia
document.write("<h3>Pacientes Radiología atendidos</h3> ")
radiologia.forEach(function(pacientesRadio) {
  document.write(`<p class=atendidos >${pacientesRadio.PACIENTE}</p><br>`)
})
//traumatologia
document.write("<h3>Pacientes Traumatología atendidos</h3> ")
traumatologia.forEach(function(pacientesTrauma) {
  document.write(`<p class=atendidos >${pacientesTrauma.PACIENTE}</p><br>`)
})
//dental
document.write("<h3>Pacientes Dental atendidos</h3> ")
dental.forEach(function(pacientesDent) {
  document.write(`<p class=atendidos >${pacientesDent.PACIENTE}</p><br>`)
})
*/