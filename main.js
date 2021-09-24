var financiamento = new Object;
var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var n3 = document.getElementById('n3');
var m = document.getElementById('meses');
var j = document.getElementById('juros');
var a = document.getElementById('acum');

var vTot = 0;
var prazoAnos = 0;
var jurosAnuais = 0;
var prazoMeses = 0;
var amor = 0;
var jurosMensal = 0;
var juroAcum = 0;
var vAmor = 0;
var totalPago = 0;
var y = 0;

function opera(){
    vAmor = 0;
    totalPago = 0;
    juroAcum = 0;
    vTot = n1.valueAsNumber + 0;
    prazoAnos = n2.valueAsNumber + 0;
    jurosAnuais = n3.valueAsNumber + 0;
    prazoMeses = prazoAnos*12;
    amor = (vTot)/prazoMeses;
    jurosMensal = ((1 + (jurosAnuais)) ** (1.0/12)) -1 ;

    financiamento.juroNoMes = [prazoMeses];
    financiamento.prestas = [prazoMeses];
    financiamento.amort = [prazoMeses];
    financiamento.nPrestas = [prazoMeses];
    for( y=0; y<prazoMeses; y++){

        financiamento.juroNoMes[y] = jurosMensal * ((vTot)-vAmor);
        financiamento.prestas[y] = amor + financiamento.juroNoMes[y];
        financiamento.amort[y] = amor;
        financiamento.nPrestas[y] = y+1;
        juroAcum = juroAcum + financiamento.juroNoMes[y];
        vAmor = vAmor + amor;
        totalPago = totalPago + financiamento.prestas[y];

    }
    m.textContent = prazoMeses;
    j.textContent = jurosMensal.toFixed(5);
    a.textContent = juroAcum.toFixed(2);
    listaTabela();
}

function listaTabela(){
    var tbody = document.getElementById('tbody');
    for( var i=0; i< financiamento.prestas.length; i++){
        var tr = tbody.insertRow();
        var td1 = tr.insertCell();
        var td2 = tr.insertCell();
        var td3 = tr.insertCell();
        var td4 = tr.insertCell();

        td1.innerText = financiamento.nPrestas[i];
        td2.innerText = financiamento.amort[i].toFixed(2);
        td3.innerText = financiamento.juroNoMes[i].toFixed(2);
        td4.innerText = financiamento.prestas[i].toFixed(2);
    }
}



