# transfer-learning
🧠 Transfer Learning — Projeto do Bootcamp DIO

Este projeto foi desenvolvido como parte do Desafio de Transfer Learning do Bootcamp de Deep Learning da DIO. O objetivo foi aplicar o conceito de transferência de aprendizado, aproveitando os pesos de um modelo já pré-treinado e adaptando-o para uma nova tarefa de classificação.

Inicialmente, o projeto foi implementado utilizando uma Rede Neural Convolucional (CNN) completa em Python. Mais tarde, para tornar o processo visual, didático e acessível, transformei toda a lógica em um projeto Web, executado diretamente no navegador.

🚀 Objetivo do Projeto

Utilizar Transfer Learning para treinar um novo modelo com desempenho superior.

Aproveitar pesos de um modelo pré-treinado (ex.: MobileNet, EfficientNet, VGG etc.).

Realizar ajustes finos (fine-tuning) para obter melhores resultados.

Criar uma interface visual para demonstrar todo o processo.

Visualizar métricas e prever imagens diretamente no navegador.

🛠️ Tecnologias Utilizadas
✅ TensorFlow / Keras (no desenvolvimento inicial)

Carregamento do modelo pré-treinado

Congelamento e descongelamento de camadas

Ajuste do classificador final

Treinamento supervisionado

✅ Python

Tratamento dos dados

Treinamento e avaliação inicial

Pré-processamento das imagens

✅ TensorFlow.js

Recriação do modelo em JavaScript

Execução do Transfer Learning diretamente no navegador

Inferência em tempo real no lado do cliente

✅ HTML + CSS + JavaScript

Interface amigável e didática para visualização

Carregamento de imagens pelo usuário

Exibição de métricas e previsões

Layout limpo e funcional

✅ Chart.js (caso aplicável)

Visualização da evolução do treinamento

Gráficos de loss e accuracy

📘 O que eu aprendi

Durante a construção deste projeto, consolidei conhecimentos importantes:

✅ Como funciona o Transfer Learning na prática

✅ Diferença entre:

Treinar um modelo do zero

Ajustar um modelo pré-treinado (fine-tuning)

Congelar camadas para aproveitar representações já aprendidas

✅ Como preparar imagens corretamente para modelos preexistentes

✅ Como converter um projeto Python para Web usando TensorFlow.js

✅ Como construir uma interface educacional que demonstra:

Preprocessamento

Predição

Resultado final

✅ Como executar Machine Learning 100% no navegador, sem backend

✅ Resultado Final

O resultado é um projeto Web funcional que:

Realiza Transfer Learning diretamente no navegador

Permite ao usuário enviar imagens e obter previsões instantâneas

Mostra o processo de forma visual e didática

Funciona sem necessidade de servidor

Demonstra na prática como o aprendizado prévio melhora resultados

Este projeto também serve como referência educacional, mostrando como transformar um modelo de Deep Learning em uma aplicação acessível e visual.
