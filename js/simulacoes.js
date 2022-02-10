var rendimento = document.getElementsByName('rendimento');
var indexacao = document.getElementsByName('indexacao');

function simular() {
    var indexacaoSelecionada = document.querySelector('input[name="indexacao"]:checked').value;
    var rendimentoSelecionado = document.querySelector('input[name="rendimento"]:checked').value;

    fetch("http://localhost:3000/simulacoes?tipoIndexacao=" + indexacaoSelecionada + "&tipoRendimento=" + rendimentoSelecionado)
    .then(response => response.json())
    .then(data => {
        
        var cenarioAtual = data[0];
        var valorBruto = document.getElementById('valorbruto');
        var aliquota = document.getElementById('aliquota');
        var ir = document.getElementById('ir');
        var valorLiq = document.getElementById('valorliq');
        var ganhoLiq = document.getElementById('ganholiq');
        var valorTotal = document.getElementById('valortotal');


        valorBruto.innerHTML = (cenarioAtual.valorFinalBruto.toLocaleString('pt-br', {style: 'currency', currency:'BRL'}));
        aliquota.innerHTML = (cenarioAtual.aliquotaIR.toFixed(0) + `%`);
        ir.innerHTML = (cenarioAtual.valorPagoIR.toLocaleString('pt-br', {style: 'currency', currency:'BRL'}));
        valorLiq.innerHTML = (cenarioAtual.valorFinalLiquido.toLocaleString('pt-br', {style: 'currency', currency:'BRL'}));
        valorTotal.innerHTML = (cenarioAtual.valorTotalInvestido.toLocaleString('pt-br', {style: 'currency', currency:'BRL'}));
        ganhoLiq.innerHTML = (cenarioAtual.ganhoLiquido.toLocaleString('pt-br', {style: 'currency', currency:'BRL'}));


        //Gráfico

        var chartData = [
            {name: "Sem aporte", data: cenarioAtual.graficoValores['semAporte'], stack: "graficoValores"},
            {name: "Com aporte", data: cenarioAtual.graficoValores['comAporte'], stack: "graficoValores"},
            ]
        new Chartkick.ColumnChart("chart-1", chartData,  {stacked: true, colors:["#000000","#ed8e53"], discrete: true, xtitle:"Tempo (meses)" , ytitle: "Valor (R$)", legend: "bottom"})


    })
}
