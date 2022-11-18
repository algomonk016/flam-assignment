import React, {Suspense} from 'react';
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

const Model = () => {
  const { scene } = useGLTF("person3dmodel.glb")
  return <primitive object={scene} />;
}

const DisplayModel = () => {
  return (
    <div style = {{height:"100vh", backgroundColor:"#fde2e4"}}>
      <Canvas camera={{position: [50, 0, 10], fov: 8 }}>
        <ambientLight position={[10, 10, 10]} intensity={1.0} />
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default DisplayModel;