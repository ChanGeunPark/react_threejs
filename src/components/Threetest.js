import * as THREE from "three";
import gsap from "gsap";
import { PerspectiveCamera } from "three";

export default class Canvas {
  constructor() {
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.createLights();
    this.createGeometry();
  }

  createRenderer() {
    this.renderer = new THREE.WebGL1Renderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  }

  createCamera() {
    this.camera = new PerspectiveCamera(
      85,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;
  }

  createScene() {
    this.scene = new THREE.Scene();
  }

  createLights() {
    this.lightAmbient = new THREE.AmbientLight(0xffffff, 1);
    this.lightFill = new THREE.PointLight(0xfffff, 1, 15);

    this.scene.add(this.lightAmbient);
    this.scene.add(this.lightFill);
  }

  createGeometry() {
    this.box = new THREE.BoxGeometry(1, 1, 1);
    this.mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    this.mesh = new THREE.Mesh(this.box, this.mat);
    this.scene.add(this.mesh);
  }

  createResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  update() {
    this.renderer.render(this.scene, this.camera);
  }
}
