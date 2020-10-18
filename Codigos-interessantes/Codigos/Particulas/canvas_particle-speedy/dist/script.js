(function(){

  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;

  var canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight;

  var ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = "source-over"; //合成方法

  //stats.js
  var stats = new Stats();
  document.body.appendChild( stats.dom );

  var particles = [];
  var pIndex = 0;
  var x, y, frameId;

  //Particle作成
  function Particle(height,color,vx,gravity,life){
    this.x = getRandom(-canvas.width/4,canvas.width);
    this.y = canvas.height*Math.random()
    this.vx = vx;
    this.gravity = gravity;
    particles[pIndex] = this;
    this.id = pIndex;
    pIndex++;
    this.life = 0;
    this.height = height;
    this.width = 0;
    this.color = color;
    this.maxlife = life;
  };
  Particle.prototype.draw = function(){
    this.vx *= this.gravity;
    this.width += this.vx;
    this.x += this.vx;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x+this.width, this.y);
    ctx.closePath();
    ctx.stroke();
    ctx.lineWidth = this.height;

    this.life++;
    if(this.life >= this.maxlife){
      delete particles[this.id];
    }
  }


  //GUI
  var params;
  function setGUI(){

    params = {
      'amount': 2,
      'bg_color' : "#004ea7",
      'height': 3,
      'color': "#ffffff",
      'vx': 3,
      'gravity': 1.2
    };

    var gui = new dat.GUI();
    gui.add( params, 'amount', 1.0, 10 ).step( 1 );
    gui.addColor( params, 'bg_color');
    gui.add( params, 'height', 1.0, 10 ).step( 1 );
    gui.addColor( params, 'color');
    gui.add( params, 'vx', 1.0, 10 ).step( 1 );
    gui.add( params, 'gravity', 1.0, 1.5 ).step( 0.01 );

  }
  setGUI();

  function rotate(){
    ctx.rotate(params.rotate);
    console.log("2");
  }

  //アニメーション
  function loop(){
    ctx.fillStyle = params.bg_color;
    ctx.globalAlpha = 0.4;
    ctx.fillRect(0,0, canvas.width, canvas.height);
    canvas.style.background = params.bg_color;//背景色変更
    for (var i = 0; i <params.amount; i++) {
      new Particle(getRandom(1,params.height),params.color,getRandom(1,params.vx),params.gravity,300);//height,color,vx,life
    }
    for(var i in particles){
      particles[i].draw();
    }
    frameId = requestAnimationFrame(loop);
    if(frameId % 2 == 0) { return; }//60fpsを30fpsにする
    stats.update();
  }
  loop();

  //全画面リサイズ
  window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    x = canvas.width / 2;
    y = canvas.height / 2;
  });

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

})();