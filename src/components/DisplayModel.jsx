import React, { Suspense, useEffect, useState } from 'react';
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import DraggableBox from './DraggableBox';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Model = () => {
  const { scene } = useGLTF("person3dmodel.glb")
  return <primitive object={scene} scale={1} />;
}

const DisplayModel = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='container mx-auto border-2 border-red-400 bg-blue-500 rounded-lg' style={{ height: windowDimensions.height * 0.80 }} >
      {
        <DraggableBox>
          <div className='h-64 bg-red-200 w-fit' >
            <Canvas camera={{ position: [30, 0, 40], fov: 3 }}>
              <OrbitControls />
              <mesh position={[0, -1, 0]}>
                <ambientLight intensity={1} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
              </mesh>
            </Canvas>
          </div>
        </DraggableBox>
      }
    </div>
  )
}

export default DisplayModel;