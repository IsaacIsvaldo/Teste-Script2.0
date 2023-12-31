import Holidays from 'date-holidays';
const acronymcountry = new Holidays('AO');

export function getDataAtual(): string {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}
export function getHoraAtual(): string {
    const dataAtual = new Date();
    const hora = String(dataAtual.getHours()).padStart(2, '0');
    const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
    const segundos = String(dataAtual.getSeconds()).padStart(2, '0');
    return `${hora}:${minutos}:${segundos}`;
}
export function getHoliday(data: any): any {
    return acronymcountry.isHoliday(data)
}
const dataFormatada = getDataAtual();
const horaAtual = getHoraAtual();
const Holiday = getHoliday(dataFormatada)
console.log(dataFormatada);
console.log(horaAtual);
if (Holiday){// caso for feriado
    console.log('É feriado em Angola!');
   
}else{// caso Não for feriado
  
}
