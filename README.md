# Desafio EQI - Frontend

Repositório do desafio de Frontend da empresa EQI Investimentos.

## Problema proposto

Para este desafio, a tarefa era construir o frontend para um simulador de investimentos, utilizando uma API fake disponibilizada pela empresa. 
Esta aplicação permite que o usuário realize simulações de cenários de investimento, baseado no tipo de rendimento e indexação. 

## Stack utilizada

As tecnologias utilizadas para a solução do desafio foram:
- HTML5
- CSS3
- JavaScript
- jQuery

Pluggins 
- [jQuery Mask Pluggin](https://igorescobar.github.io/jQuery-Mask-Plugin/) - Máscara para os inputs monetários e percentuais
- [Feather Icons](https://feathericons.com/) - Ícones utilizados na aplicação
- [ChartKick](https://chartkick.com/) - Biblioteca JS de gráficos

## Como utilizar?

- Requisitos: npm e Node.js para rodar a API Fake

### Iniciando a API de Investimentos

Acesse o repositório da API em [desafio-fake-api](https://github.com/eqi-investimentos/desafio-fake-api) e siga as instruções para execução.

### Iniciando o simulador 

1. Em seu terminal, acesse a pasta de preferência e clone o repositório executando: `git clone git@github.com:marisobreiro/desafio-frontend-eqi.git`
2. Ao finalizar, acesse a pasta do projeto e abra o arquivo "index.html" em seu navegador.

## O Simulador

O usuário pode realizar a simulação escolhendo os tipos de rendimento e indexação --em caso de dúvida, o mesmo pode verificar o significado dos tipos ao mover o mouse em cima do título dos botões e ícone de informação. 
Em seguida deve inserir o aporte inicial, aporte mensal, prazo e rentabilidade esperada.

(https://i.imgur.com/gR2uGFR.png)

 Os dados são obrigatórios e devem ser informados para a simulação.

 (https://i.imgur.com/eZMScPI.png)

Os campos de IPCA e CDI são pré-preenchidos através dos dados da API. 

Ao solicitar a simulação pelo botão "Simular", o usuário terá as informações de:
- Valor bruto final
- Alíquota do IR
- Valor pago do IR
- Valor final Líquido 
- Valor total investido 
- Ganho líquido 

(https://i.imgur.com/smV41k6.png)

O resultado também exibe um gráfico com os valores esperados ao longo dos meses obtidos pela API.

## Responsividade

As quebras responsivas foram pensadas para Desktops, conforme prints anteriores e também para:

### Smartphones

(https://i.imgur.com/7pOMdZt.png)

(https://i.imgur.com/MCYueZF.png)

(https://i.imgur.com/sNKt3sq.png)


### Tablets

(https://i.imgur.com/gjgVQcc.png)

(https://i.imgur.com/t4tOMQf.png)



