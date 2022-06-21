import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useBox } from "use-cannon";
//중력을 작용시킬 태그, 중력의 영향을 줄 box;

function Box() {
  //const [ref] = useBox(() => ({ mass: 1, position: [0, 10, 0] })); //mass는 중력의 강도

  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      {/* <meshLambertMaterial attach="material" color="hotpink" /> */}
      <meshPhongMaterial attach="material" color="hotpink" />
      {/*attach = 재료를 설정한다. */}
    </mesh>
  );
}

function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      {/* planeBufferGeometry = 평면 
      args = 크기
      */}
      <meshLambertMaterial attach="material" color="lightBlue" />
      {/*attach = 재료를 설정한다. */}
    </mesh>
  );
}

export default function Zpage() {
  return (
    <Canvas style={{ width: "100%", height: "100vh", background: "black" }}>
      <Stars />
      <OrbitControls />
      <ambientLight />

      <spotLight position={[10, 15, 10]} angle={0.3} />
      {/* ambientLight = 모든곳에서 빛나는 조명 / angle= 얼마나 비출건지*/}
      <Plane />
      <Box />
    </Canvas>
  );
}
