class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas

        console.log(this.obtemNomeAtleta(), 
                    this.obtemIdadeAtleta(), 
                    this.obtemPesoAtleta(), 
                    this.obtemAlturaAtleta(), 
                    this.obtemNotasAtleta(),
                    this.obtemCategoria(),
                    this.obtemIMC(), 
                    this.obtemMediaValida())
    }

    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return "Infantil"
        }
        else if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil"
        }
        else if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário"
        }
        else if(this.idade >= 16 && this.idade <= 130){
            return "Adulto"
        }
        return "Sem categoria"
    }

    calculaIMC(){
        return this.peso / (this.altura * this.altura)
    }

    calculaMediaValida(notas){
        
        let somaNotas = 0;
        notas.forEach(nota => {
            
            
            somaNotas += nota;
            
        });
        
        return somaNotas / notas.length
    
    }

    obtemNomeAtleta(){
        return `Nome: ${this.nome}\n`
    }

    obtemIdadeAtleta(){
        return `Idade: ${this.idade}\n`
    }

    obtemPesoAtleta(){
        return `Peso: ${this.peso}\n`
    }

    obtemAlturaAtleta(){
        return `Altura: ${this.altura}\n`
    }

    obtemNotasAtleta(){
        return `Notas: ${this.notas}\n`
    }

    obtemCategoria(){
        return `Categoria: ${this.calculaCategoria()}\n`
    }

    obtemIMC(){
        return `IMC: ${this.calculaIMC()}\n`
    }

    obtemMediaValida(){
        let notasOrdenadas = this.notas.sort((a, b) => a - b);
        let notasRecortadas = notasOrdenadas.slice(1,4);

        return `Média válida: ${this.calculaMediaValida(notasRecortadas)}\n`
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);