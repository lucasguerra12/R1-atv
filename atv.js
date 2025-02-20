const personagem = [
    {
    nome: 'Steve Rogers',
    codinome: 'Capitão América',
    armaPrincipal: 'Escudo americano',
    armaSecundaria: '',
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function(){
        return 'Nome do personagem:  ' + this.nome + '\n'
            + 'Codinome do personagem: ' + this.codinome + '\n'
            + 'Arma principal: ' + this.armaPrincipal + '\n'
            + 'Arma secundaria: ' + this.armaSecundaria + '\n'
            + 'Nivel de força: ' + this.forca + '\n' 
            + 'Nivel de velocidade: ' + this.velocidade + '\n'
            + 'Nivel de resistencia: ' + this.resistencia + '\n'
        
    }},
    {
    nome: 'Tony Stark',
    codinome:'Homem de ferro',
    armaPrincipal:'Armadura stark',
    armaSecundaria:'repulsores',
    velocidade:90,
    forca:85,
    resistencia:85,
    descricao: function(){
        return 'Nome do personagem:  ' + this.nome + '\n'
            + 'Codinome do personagem: ' + this.codinome + '\n'
            + 'Arma principal: ' + this.armaPrincipal + '\n'
            + 'Arma secundaria: ' + this.armaSecundaria + '\n'
            + 'Nivel de força: ' + this.forca + '\n' 
            + 'Nivel de velocidade: ' + this.velocidade + '\n'
            + 'Nivel de resistencia: ' + this.resistencia + '\n'
        }},
        {
    nome:'Clint Barton',
    codinome:'Gavião Arqueiro',
    armaPrincipal:' Arco e flechas',
    armaSecundaria:'Facas e outros dispositivos',
    velocidade:80,
    forca:50,
    resistencia:60,
    descricao: function(){
        return 'Nome do personagem:  ' + this.nome + '\n'
            + 'Codinome do personagem: ' + this.codinome + '\n'
            + 'Arma principal: ' + this.armaPrincipal + '\n'
            + 'Arma secundaria: ' + this.armaSecundaria + '\n'
            + 'Nivel de força: ' + this.forca + '\n' 
            + 'Nivel de velocidade: ' + this.velocidade + '\n'
            + 'Nivel de resistencia: ' + this.resistencia + '\n'
        }},
        {
    nome:'Natasha Romanoff',
    codinome:'Viúva Negra',
    armaPrincipal:' Pistolas e armas de combate corpo a corpo',
    armaSecundaria:'Cordas e dispositivos de espionagem',
    velocidade:90,
    forca:60,
    resistencia:70,
    descricao: function(){
        return 'Nome do personagem:  ' + this.nome + '\n'
            + 'Codinome do personagem: ' + this.codinome + '\n'
            + 'Arma principal: ' + this.armaPrincipal + '\n'
            + 'Arma secundaria: ' + this.armaSecundaria + '\n'
            + 'Nivel de força: ' + this.forca + '\n' 
            + 'Nivel de velocidade: ' + this.velocidade + '\n'
            + 'Nivel de resistencia: ' + this.resistencia + '\n'
        }},
        {
    nome:'Thor Odinson',
    codinome:'Thor ',
    armaPrincipal:'Mjolnir',
    armaSecundaria:'',
    velocidade:80,
    forca:90,
    resistencia:85,
    descricao: function(){
        return 'Nome do personagem:  ' + this.nome + '\n'
            + 'Codinome do personagem: ' + this.codinome + '\n'
            + 'Arma principal: ' + this.armaPrincipal + '\n'
            + 'Arma secundaria: ' + this.armaSecundaria + '\n'
            + 'Nivel de força: ' + this.forca + '\n' 
            + 'Nivel de velocidade: ' + this.velocidade + '\n'
            + 'Nivel de resistencia: ' + this.resistencia + '\n'
        }},
        {
    nome:'Bruce Banner',
    codinome:'Hulk  ',
    armaPrincipal:'Força bruta',
    armaSecundaria:'',
    velocidade:60,
    forca:100,
    resistencia:95,
    descricao: function(){
        return 'Nome do personagem:  ' + this.nome + '\n'
            + 'Codinome do personagem: ' + this.codinome + '\n'
            + 'Arma principal: ' + this.armaPrincipal + '\n'
            + 'Arma secundaria: ' + this.armaSecundaria + '\n'
            + 'Nivel de força: ' + this.forca + '\n' 
            + 'Nivel de velocidade: ' + this.velocidade + '\n'
            + 'Nivel de resistencia: ' + this.resistencia + '\n'
        }},
        {
    nome:'Thanos',
    codinome:'Thanos  ',
    armaPrincipal:'Luva do Infinito',
    armaSecundaria:'',
    velocidade:70,
    forca:95,
    resistencia:100,
    descricao: function(){
        return 'Nome do personagem:  ' + this.nome + '\n'
            + 'Codinome do personagem: ' + this.codinome + '\n'
            + 'Arma principal: ' + this.armaPrincipal + '\n'
            + 'Arma secundaria: ' + this.armaSecundaria + '\n'
            + 'Nivel de força: ' + this.forca + '\n' 
            + 'Nivel de velocidade: ' + this.velocidade + '\n'
            + 'Nivel de resistencia: ' + this.resistencia + '\n'
        }}]

        function calcularSomaAtributo(personagem){
            return personagem.velocidade + personagem.resistencia + personagem.forca;
        }

        function compararPersonagens(personagem) {
            for (let i = 0; i < personagem.length; i++) {
                const personagemAtual = personagem[i];
                const somaAtual = calcularSomaAtributo(personagemAtual);
        
                console.log(personagemAtual.descricao());
                console.log('Soma dos Atributos: ' + somaAtual);
                console.log('-------------------------');

                for (let j = 0; j < personagem.length; j++) {
                    if (i !== j) {
                        const personagemComparado = personagem[j];
                        const somaComparado = calcularSomaAtributo(personagemComparado);
        
                        if (somaAtual > somaComparado) {
                            console.log(personagemAtual.nome + " vence " + personagemComparado.nome + "!");
                        } else if (somaAtual < somaComparado) {
                            console.log(personagemComparado.nome + " vence " + personagemAtual.nome + "!");
                        } else {
                            console.log(personagemAtual.nome + " empata com " + personagemComparado.nome + ".");
                        }
                        console.log('-------------------------');
                    }
                }
            }
        }
        
    
        compararPersonagens(personagem);