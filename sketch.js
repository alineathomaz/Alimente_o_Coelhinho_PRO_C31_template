const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;

var bg_img;
var food;
var rabbit;

var button;
var bunny;

//variáveis para armazenar as animações para piscar (blink) e comer (eat)
var blink, eat;

//variável para armazenar a animação para triste (sad)


function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
  //animação para piscar
  blink = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  //animação para comer
  eat = loadAnimation("eat_0.png" , "eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  //animação para triste
  
  
  //habilitar o modo de reprodução das animações blink e eat
  blink.playing = true;
  eat.playing = true;

  //reproduzir a animação do coelho triste, mas não repetidamente
  


  //impedir a repetição da animação eat
  eat.looping = false; 
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;
  
  button = createImg('cut_btn.png');
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);
  
  //atraso de quadros para diminuir a velocidade das animações
  blink.frameDelay = 20;
  eat.frameDelay = 20;
  //atraso de quadros para diminuir a velocidade de sad (triste)
  

  bunny = createSprite(230,620,100,100);
  bunny.scale = 0.2;

  //animação para piscar
  bunny.addAnimation('blinking',blink);
  //animação para comer
  bunny.addAnimation('eating',eat);
  //mudar a animação para piscar
  bunny.changeAnimation('blinking');
  //animação para triste
  
  
  rope = new Rope(7,{x:245,y:30});
  ground = new Ground(200,690,600,20);
  
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
}

function draw() 
{
  background(51);
  image(bg_img,width/2,height/2,490,690);

  ground.show();
  rope.show();

  //condição para só mostrar a fruta se o seu corpo existir
  

  Engine.update(engine);

  //condição para colisão entre a fruta e o coelho
  

  //condição para colisão entre a fruta e o chão
  

  drawSprites();
}

function drop()
{
  rope.break();
  fruit_con.detach();
  fruit_con = null; 
}

//função para detectar colisão

