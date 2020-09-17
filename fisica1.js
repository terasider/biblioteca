/*Buscar os metodos para tratamento de numeros muito grandes.*/


// CTP = Carga para n particulas
function CTP(charge){
const C=(1.6)*(10**(-19));
var charge=prompt("Digite um valor para coulomb e tenha a quantidade de particulas");
var qEletrons=charge/C;

console.log((qEletrons/10**20).toFixed(2)+" X 10 * 20 "+"Partículas");
}

// PTC = n Particulas para Carga

function PTC(n){
const C=(1.6)*(10**(-19));
var n=prompt("Digite a quantidade de particulas e tenha a carga");
Number(n);
var carga=n*C;

console.log(carga.toFixed(2));
}

/* getIntense = obtem intensidade da corrente mediante promp da carga em coulumbs e intervalo de tempo em segundos
*/
function getIntense(){
var carga=prompt("Digite a carga em coulomb (sem exponenciação)");
var tempo=prompt("Digite o intervalo de tempo em segundos");
var Int=carga/tempo;
console.log("A intensidade em ampére é "+Int+" ampéres");
}


/* Obtem intervalo em segundos de uma corrente com n de carga e m de intensidade */
function getInterv(){
var amp=prompt("Digite amperagem");
var carga=prompt("Digite a carga");
var intervalo=carga/amp;
console.log("O intervalo decorrido de "+carga+" coulombs com "+amp+" ampéres é de "+intervalo+" segundos");
}

/* Obtem a carga em coulomb partindo da intensidade vezes intervalo de tempo */
function getCharge(){
var intensidade=prompt("Digite a intensidade da corrente aplicada");
var intervalo=prompt("Digite o intervalo decorrido durante a corrente");
console.log("A Carga da corrente em "+ intervalo +" segundos e de intensidade "+intensidade+" ampéres é de: "+intensidade*intervalo+" Coulombs");
}

/* a função potencial() obtem através da quantidade de joules sobre uma carga específica o valor da voltagem, do potencial elétrico */ 
function potencial(){
var energia=prompt("Digite a energia em joules envolvida na corrente");
var carga=prompt("Digite a carga que recebeu energia");
console.log("O potencial elétrico da corrente com carga de "+carga+" coulombs e recebendo "+energia+" joules é de: "+energia/carga+" Volts");
}



/* Obter energia consumida em watts através de Volts Vezes Ampéres */
function toWatt(){
var potencial=prompt("Digite o potencial elétrico em Volts");
var intensidade=prompt("Digite a intensidade em ampéres");
console.log("A potência de energia ou consumo gerado por uma corrente de "+potencial+" Volts com intensidade de "+intensidade+" ampéres é de: "+potencial*intensidade+" Watts");
}


/*  Converte wats em joules fornecendo o wat e o tempo da corrente */
function energiaJ(){
var intensidade=prompt("Digite a potencia consumida em Watts");
var intervalo=prompt("Digite o intervalo de tempo em segundos");
console.log("A quantidade de energia física ou consumo gerado por uma corrente de "+intensidade+" watts em um intervalo de "+intervalo+" segundos é de: "+intervalo*intensidade+" Joules");
}


/* Converte joules em kW/h */
function getConsumo(){
var joule=prompt("Digite a quantidade de joules");
const kwth=3600000;
console.log("O consumo gerado por: "+joule+" joules em 1 hora é de "+joule/kwth+"  kilowatts por hora");
}

/* Converte kW/h em joules*/
function getJoule(){
var kwth=prompt("Digite a quantidade de consumo em kilowat/hora");
const joules=3600000;
console.log("A energia física gerada por: "+kwth+" kilowats/h é de "+joules/kwth+"  Joules");
}

/* Obtem o custo financeiro de energia  a partir da taxa vezes a quantidade de kilowat/h */
function getCusto(){
var kwth=prompt("Quantidade de kilowats/h consumidos");
const tarifa=0.32883000;
console.log("O custo energetico na conta de luz foi de: "+kwth*tarifa+"   Reais");
}

/* função que partindo da potencia do consumo de um eletrodomestico em função do tempo retorna o custo na conta de luz  */
function getCustoUnit(){
var potencia=prompt("Digite a potencia consumida pelo aparelho");
var intervalo=prompt("Quantidade de tempo em horas em que ele fica ligado");
const tarifa=0.32883000;
var cust=((potencia*intervalo)/1000)*tarifa;
console.log("O custo para se manter ligado um aparelho que consome "+potencia+" Wats por "+intervalo+" hora(s) é de "+cust.toFixed(2)+ " Reais, sendo que a demanda consumida foi de "+((potencia*intervalo)/1000)+"kWh hora");
}


/* obtem resistencia em ohms pela divisao do Volt/ampere */
function getRes(){
var Volt=prompt("Digite a diferença potencial em Volt");
var Ampere=prompt("Digite a intensidade elétrica em Ampere");
var r=Volt/Ampere;
console.log("A resistência encontrada é de "+r+" Ohms dado um diferencial de "+Volt+" volts e amperagem de :"+Ampere);

}























