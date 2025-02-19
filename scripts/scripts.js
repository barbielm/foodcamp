let n_pratos = 0
let n_bebidas = 0
let n_sobremesas = 0

let nome_prato
let nome_bebida
let nome_sobremesa

let valor_prato
let valor_bebida
let valor_sobremesa

let message = ""
let valor_total

let telefone = "5585985633070"
let nome 
let endereco





function marcar_opcao(id, classe){
    frase = "." + classe + "s" + " " + "." + classe
    const opcoes = document.querySelectorAll(frase)
    let check
    for(let i=0; i<opcoes.length; i++){
        opcoes[i].classList.remove("borda-verde")   
        check = opcoes[i].querySelector(".ion-icon") 
        check.classList.add("oculto")
    }

    const opcao = document.getElementById(id)
    opcao.classList.add("borda-verde")
    check = opcao.querySelector(".ion-icon")
    check.classList.remove("oculto")
    if(classe==="prato"){
        n_pratos++
        nome_prato = opcao.querySelector(".nome").innerHTML
        valor_prato = opcao.querySelector(".preco").innerHTML
        valor_prato = valor_prato.replace(",",".")
        valor_prato = valor_prato.slice(3,)
        valor_prato = parseFloat(valor_prato)
    }
    if(classe==="bebida"){
        n_bebidas++
        nome_bebida = opcao.querySelector(".nome").innerHTML
        valor_bebida = opcao.querySelector(".preco").innerHTML
        valor_bebida = valor_bebida.replace(",",".")
        valor_bebida = valor_bebida.slice(3,)
        valor_bebida = parseFloat(valor_bebida)
    }
    if(classe==="sobremesa"){
        n_sobremesas++
        nome_sobremesa = opcao.querySelector(".nome").innerHTML
        valor_sobremesa = opcao.querySelector(".preco").innerHTML
        valor_sobremesa = valor_sobremesa.replace(",",".")
        valor_sobremesa = valor_sobremesa.slice(3,)
        valor_sobremesa = parseFloat(valor_sobremesa)
    }
    habilitar_pedido()

}


function habilitar_pedido(){
    if(n_pratos>0 && n_bebidas>0 && n_sobremesas>0){
        
        let desabilitado = document.getElementById("desabilitado")
        let habilitado = document.getElementById("habilitado")
        desabilitado.classList.add("oculto")
        habilitado.classList.remove("oculto")

    }    
}

function confirmar(){
    const confirma = document.querySelector(".confirmar-pedido")
    const conteudo = document.querySelector(".conteudo")
    confirma.classList.remove("oculto")
    conteudo.classList.add("borrado")

    valor_total = valor_prato + valor_bebida + valor_sobremesa
    valor_total = valor_total.toFixed(2)

    document.getElementById("nome_prato").innerText = nome_prato
    document.getElementById("nome_bebida").innerText = nome_bebida
    document.getElementById("nome_sobremesa").innerText = nome_sobremesa

    document.getElementById("valor_prato").innerText = valor_prato.toFixed(2).replace(".",",")
    document.getElementById("valor_bebida").innerText = valor_bebida.toFixed(2).replace(".",",")
    document.getElementById("valor_sobremesa").innerText = valor_sobremesa.toFixed(2).replace(".",",")
    document.getElementById("valor_total").innerText = "R$ " + valor_total.replace(".",",")

}

function solicitar(){
    nome = prompt("Digite o seu nome: ")
    endereco = prompt("Digite o seu endereço: ")
    message = message + "Olá, gostaria de fazer o pedido:" + "\n" + "- Prato: " + nome_prato + "\n"
    message = message + "- Bebida: " + nome_bebida + "\n"
    message = message + "- Sobremesa: " + nome_sobremesa + "\n" 
    message = message + "Total: R$ " + valor_total
    let link = encodeURIComponent(message)
    link = "https://wa.me/" + telefone + "?text=" + link
    link = link + encodeURIComponent("\n\n\n" + "Nome: " + nome + "\n" +"Endereço: " + endereco)
    
    location.replace(link)
}

function recarregar(){
    const confirma = document.querySelector(".confirmar-pedido")
    const conteudo = document.querySelector(".conteudo")
    confirma.classList.add("oculto")
    conteudo.classList.remove("borrado")
    message = ""
}

