function Animacao(context) {
  this.context = context;
  this.sprites = [];
  this.ligado = false;
}

Animacao.prototype = {
  novoSprite : function(sprite) {
    this.sprites.push(sprite);
  },

  ligar : function() {
    this.ligado = true;
    this.proximoFrame();
  },

  desligar : function() {
    this.ligado = false;
  },

  proximoFrame :function() {
    if(!this.ligado) return;

    //A cada ciclo limpa a tela
    this.limparTela();

    //Atualiza o estado dos sprites
    for (var i in this.sprites) {
      this.sprites[i].atualizar();
    }
    //Desenha o sprite
    for (var i in this.sprites) {
      this.sprites[i].desenhar();
    }

    var animacao = this;
    requestAnimationFrame(function(){
      animacao.proximoFrame();
    });
  },

  limparTela : function() {
    var ctx = this.context;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
}
