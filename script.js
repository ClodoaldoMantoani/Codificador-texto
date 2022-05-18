/* transforma as letras inseridas em lowercase quando não estão */

document.getElementById('inputText').addEventListener('keyup', (ev) => {
  let input = ev.target;
  input.value = input.value.toLowerCase();

});

function efeitoMatrix(neo) {
  //	Variáveis globais
    let tela 	= window.screen;
    let largura = neo.width 	= tela.width;
    let altura 	= neo.height 	= tela.height;
    let letras 	= Array(256).join(1).split('');
  //	Desenha o efeito matrix na tela	
    let desenhaMatrix = function(){
    // Fundo Preto e transparência em .05
      neo.getContext('2d').fillStyle = 'rgba(0,0,0,.05)';
      neo.getContext('2d').fillRect(0,0,largura,altura);
    //	Letras
      neo.getContext('2d').fillStyle = '#0F0';
    //
      letras.map(function(posicao_y, index){
    //	Texto 
      let texto = String.fromCharCode(48 + Math.random() * 33);
      let posicao_x = index * 10;
      neo.getContext('2d').fillText(texto, posicao_x, posicao_y);
    //	Array index
      letras[index] = (posicao_y > 758 + Math.random() * 1e4) ? 0 : posicao_y + 10;	 
      });
    }
    setInterval(desenhaMatrix, 60);
  }
  
  //	Função de carregar a página e passar o id canvas para a função
  function carregar() {
    let canvas = document.getElementById('canvas')
    efeitoMatrix(canvas);
  }

function MostrarOcultarImg() {
  let MensagemVazia = document.getElementById("emptyMessage");
  let copyBtn = document.getElementById("btnCopy");
  
  MensagemVazia.classList.remove("showsEmptyMessage");
  MensagemVazia.classList.add("hiddenEmptyMensage");
  copyBtn.classList.remove("btnHiddenCopy");
  atualizar.classList.remove("btnHiddenCopy");
}

/* função que faz o encript ou avisa que o campo está vazio */
function Cryptography() {
  let InsereTexto = document.getElementById("inputText").value;
  if (InsereTexto != "") {
    let cryptography = InsereTexto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat').replace(/a/g, 'ai');
    document.getElementById("showMessage").innerHTML = cryptography;
    MostrarOcultarImg();
  } else {
    alert("Insira um texto não acentuado para continuar")
  }
}

/* função que retorna o texto original ou avisa que o campo está vazio */

function Decrypt() {
  let InsereTexto = document.getElementById("inputText").value;
  if (InsereTexto != "") {
    let decrypt = InsereTexto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ai/g, 'a').replace(/ufat/g, 'u');
    document.getElementById("showMessage").innerHTML = decrypt;
    MostrarOcultarImg();
  } else {
    alert("Insira um texto não acentuado para continuar")
  }
}

/* função que seleciona e copia o texto de saída */
function Copy() {
  let copyText = document.getElementById("showMessage");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  location.reload();
}

/* função que atualiza a página e limpa todos os campos */
function Reload() {
  location.reload();
}

