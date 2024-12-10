# Dados dos Atletas

Este repositório contém a solução para o projeto **Dados dos Atletas**, desenvolvido como parte do curso **DEV START** do **SENAI**. O objetivo do projeto é criar uma aplicação em JavaScript que receba informações de atletas, calcule parâmetros como IMC e média válida, determine a categoria do atleta, e exiba essas informações de forma estruturada.

---

## 📋 **Sobre o Projeto**

O projeto simula a análise de dados esportivos, onde as informações de atletas são processadas por meio de uma classe `Atleta`. A aplicação implementa métodos para realizar cálculos importantes e organizar as informações recebidas. 

---

## 🛠 **Funcionalidades**

1. **Recebimento de informações do atleta**:
   - Nome
   - Idade
   - Peso
   - Altura
   - Notas obtidas

2. **Cálculos implementados**:
   - **Categoria**:
     - Infantil: 9 a 11 anos
     - Juvenil: 12 a 13 anos
     - Intermediário: 14 a 15 anos
     - Adulto: 16 a 30 anos
     - Sem categoria: demais idades
   - **IMC**: Fórmula utilizada: `imc = peso / (altura * altura)`
   - **Média válida**: Calculada ignorando a maior e a menor nota.

3. **Exibição das informações**:
   - Nome
   - Idade
   - Peso
   - Altura
   - Notas
   - Categoria
   - IMC
   - Média válida

---

## 🧩 **Classe Atleta**

A classe `Atleta` concentra todos os atributos e métodos relacionados às operações necessárias. 

### **Atributos**:
- `nome`
- `idade`
- `peso`
- `altura`
- `notas`

### **Métodos**:
- `calculaCategoria()`
- `calculaIMC()`
- `calculaMediaValida()`
- `obtemNomeAtleta()`
- `obtemIdadeAtleta()`
- `obtemPesoAtleta()`
- `obtemNotasAtleta()`
- `obtemCategoria()`
- `obtemIMC()`
- `obtemMediaValida()`

---


## 📝 **Sobre o Curso**

Este projeto foi desenvolvido como parte do curso **DEV START** do **SENAI**, que visa capacitar desenvolvedores iniciantes em JavaScript e outras tecnologias relevantes para o mercado.

---

## 🏆 **Contribuição**

Se você encontrou algum problema ou tem sugestões de melhoria, fique à vontade para abrir uma issue ou enviar um pull request.

