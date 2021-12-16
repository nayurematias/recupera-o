const aparelhos = require("./aparelhos");

function listaManutencao() {

    console.log("Aguardando Manutenção");

    aparelhos.forEach(aparelhos => {
        if (aparelhos.pronto === false){        
            console.log(`Aparelho: ${aparelhos.aparelho}  - Situação:  ${aparelhos.pronto}`);            
        }
    });

};

function listaRetirada() {
    console.log("Prontos para retirada");

    aparelhos.forEach(aparelhos => {
        if (aparelhos.pronto === true){        
            console.log(`Aparelho: ${aparelhos.aparelho} - Situação: ${aparelhos.pronto}`);
            
            aparelhos.itensConsertados.forEach(itens => {
                console.log(`- ${itens}`);
            })

            console.log (`Total R$ ${somaItens(aparelhos)}`);
        }
    });

};

function somaItens(aparelho)
{
    const valortotal = aparelho.valores.reduce((valortotal, valor) => valortotal + valor);
    return valortotal;
};

listaRetirada();
listaManutencao();