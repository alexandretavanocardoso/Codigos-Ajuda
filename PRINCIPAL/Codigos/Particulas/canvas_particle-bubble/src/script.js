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
  function Particle(radius,color,vy,gravity,life){
    this.x = canvas.width*Math.random();
    this.y = canvas.height+getRandom(0,canvas.height/8);
    this.vx = Math.cos(Math.PI/180*getRandom(0,360)) * Math.sin(Math.PI/180*getRandom(0,360));
    this.vy = vy;
    this.gravity = gravity;
    particles[pIndex] = this;
    this.id = pIndex;
    pIndex++;
    this.life = 0;
    this.radius = radius;
    this.color = color;
    this.maxlife = life;
  };
  Particle.prototype.draw = function(){
    this.vy *= this.gravity;
    this.x += this.vx;
    this.y -= this.vy;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc( this.x, this.y, this.radius, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    ctx.fill();
    ctx.globalAlpha = this.y/canvas.height;

    this.life++;
    if(this.life >= this.maxlife){
      delete particles[this.id];
    }
  }


  //GUI
  var params,params_A,params_B,params_C;
  function setGUI(){

    params = {
      'amount': 5,
      'bg_color' : "#69d0ff"
    };

    params_A = {
      'active':true,
      'radius': 6,
      'color': "#FFFFFF",
      'vy': 0.05,
      'gravity': 1.05,
    };

    params_B = {
      'active':true,
      'radius': 4,
      'color': "#47f4ff",
      'vy': 0.05,
      'gravity': 1.03
    };

    params_C = {
      'active':true,
      'radius': 3,
      'color': "#ace6ff",
      'vy': 0.05,
      'gravity': 1.02
    };

    var gui = new dat.GUI();
    gui.add( params, 'amount', 1.0, 10 ).step( 1 );
    gui.addColor( params, 'bg_color');

    var fA = gui.addFolder('particle_A')
    fA.add( params_A, 'active');
    fA.add( params_A, 'radius', 3.0, 10 ).step( 1 );
    fA.addColor( params_A, 'color');
    fA.add( params_A, 'vy', 0.01, 2.0 ).step( 0.01 );
    fA.add( params_A, 'gravity', 1.02, 1.1 ).step( 0.01 );

    var fB = gui.addFolder('particle_B')
    fB.add( params_B, 'active');
    fB.add( params_B, 'radius', 3.0, 10 ).step( 1 );
    fB.addColor( params_B, 'color');
    fB.add( params_B, 'vy', 0.01, 2.0 ).step( 0.01 );
    fB.add( params_B, 'gravity', 1.02, 1.1 ).step( 0.01 );

    var fC = gui.addFolder('particle_C')
    fC.add( params_C, 'active');
    fC.add( params_C, 'radius', 3.0, 10 ).step( 1 );
    fC.addColor( params_C, 'color');
    fC.add( params_C, 'vy', 0.01, 2.0 ).step( 0.01 );
    fC.add( params_C, 'gravity', 1.02, 1.1 ).step( 0.01 );

  }
  setGUI();

  //アニメーション
  function loop(){
    ctx.clearRect(0,0, canvas.width, canvas.height);  //画面の更新
    canvas.style.background = params.bg_color;//背景色変更
    //(radius,color,vy,gravity,life)
    for (var i = 0; i <params.amount; i++) {
      if (params_A.active) {
        new Particle(getRandom(params_A.radius-2,params_A.radius+2),params_A.color,params_A.vy,params_A.gravity,300);
      }
      if (params_B.active) {
        new Particle(getRandom(params_B.radius-2,params_B.radius+2),params_B.color,params_B.vy,params_B.gravity,300);
      }
      if (params_C.active) {
        new Particle(getRandom(params_C.radius-2,params_C.radius+2),params_C.color,params_C.vy,params_C.gravity,300);
      }

    }

    // new Particle(getRandom(2,4),"#00FFFF",0.05,1.03,300);//(radius,color,life)
    // new Particle(getRandom(5,10),"#93ffff",0.05,1.05,100);//(radius,color,life)
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
