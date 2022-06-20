import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Stars } from "@react-three/drei";
import { TextGeometry } from "three";
import { BufferGeometry } from "three";
function Box(props) {
  const ref = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.01;
  });
  return (
    /*
    <mesh
      onClick={e => console.log()}
      onContextMenu={e => console.log()}
      onDoubleClick={e => console.log()}
      onWheel={e => console.log()}
      onPointerUp={e => console.log()}
      onPointerDown={e => console.log()}
      onPointerOver={e => console.log()}
      onPointerOut={e => console.log()}
      onPointerEnter={e => console.log()}
      onPointerLeave={e => console.log()}
      onPointerMove={e => console.log()}
      onPointerMissed={e => console.log()}
      onUpdate={e => console.log()}
    */
    <mesh {...props} ref={ref} onClick={(e) => setIsClicked(!isClicked)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isClicked ? "hotpink" : "#00ff00"} />
    </mesh>
  );
}

function App() {
  return (
    <Canvas style={{ background: "black", width: "100%", height: "100vh" }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Stars />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <ambientLight intensity={1} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}

export default App;
