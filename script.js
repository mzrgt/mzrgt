var chrono=new THREE.Clock();
var temps;
var vAng=3;
var keys={left:0,right:0,up:0,left:0}
	window.addEventListener('keydown',function(event){
	if (event.keyCode==37){
	keys.left=1;
	}
	if (event.keyCode==39){
	keys.right=1;
	}
	});

	window.addEventListener('keyup',function(event){
	if (event.keyCode==37){
	keys.left=0;
	}
	if (event.keyCode==39){
	keys.right=0;
	}
	});

	window.addEventListener('keydown',function(event){
	if (event.keyCode==38){
	keys.up=1;
	}
	if (event.keyCode==40){
	keys.down=1;
	}
	});

	window.addEventListener('keyup',function(event){
	if (event.keyCode==38){
	keys.up=0;
	}
	if (event.keyCode==40){
	keys.down=0;
	}
	});

var container = $('.Géométrie');
var SCREEN_WIDTH = container.width();
var SCREEN_HEIGHT = container.height();

var renderer = new THREE.WebGLRenderer();
renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
container.append(renderer.domElement);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH/SCREEN_HEIGHT, 0.1, 1000);
camera.position.set(0,0,300)
camera.lookAt(scene.position);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var axisHelper = new THREE.AxisHelper(70);
	scene.add(axisHelper);

var boxGeo= new THREE.BoxGeometry(50,50,50);


var boxMat=new THREE.MeshLambertMaterial({color: 0xff00ff});

var box = new THREE.Mesh(boxGeo,boxMat);
	scene.add(box);

var pointLight = new THREE.PointLight( 0xffffff);
	pointLight.position.set( 60, 60, 60 );
	scene.add(pointLight);

var spotLight = new THREE.SpotLight( 0xffffff);
	spotLight.position.set(-300,0,0);
	scene.add(spotLight);
	chrono.start();
	animation=function(){
	deltatemps=chrono.getDelta();
		if (keys.left==1){
		box.rotation.y=box.rotation.y-vAng*deltatemps;
		}
		if (keys.right==1){
		box.rotation.y=box.rotation.y+vAng*deltatemps;
		}
		if (keys.up==1){
		box.rotation.x=box.rotation.x-vAng*deltatemps;
		}
		if (keys.down==1){
		box.rotation.x=box.rotation.x+vAng*deltatemps;
		}
		}

function render() {
requestAnimationFrame(render);
animation();
renderer.render(scene, camera);
}
render();



function forme() {
scene.remove(box);

var sphereGeo= new THREE.SphereGeometry (30,50,50);


var sphereMat=new THREE.MeshLambertMaterial({color: 0xff00ff});

var sphere = new THREE.Mesh(sphereGeo,sphereMat);
scene.add(sphere);
	
}
function formes() {
scene.remove(box);

var pyramidGeo= new THREE.CylinderGeometry (0, 50, 50, 4, false);


var pyramidMat=new THREE.MeshLambertMaterial({color: 0xff00ff});

var pyramid = new THREE.Mesh(pyramidGeo,pyramidMat);


scene.add(pyramid);
var spotLight = new THREE.SpotLight( 0xffffff);
	spotLight.position.set(-300,0,0);
	scene.add(spotLight);
	chrono.start();
	animation=function(){
	deltatemps=chrono.getDelta();
		if (keys.left==1){
		pyramid.rotation.y=pyramid.rotation.y-vAng*deltatemps;
		}
		if (keys.right==1){
		pyramid.rotation.y=pyramid.rotation.y+vAng*deltatemps;
		}
		if (keys.up==1){
		pyramid.rotation.x=pyramid.rotation.x-vAng*deltatemps;
		}
		if (keys.down==1){
		pyramid.rotation.x=pyramid.rotation.x+vAng*deltatemps;
		}
		}

}