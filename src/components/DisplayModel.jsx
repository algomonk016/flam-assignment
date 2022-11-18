import React, { Suspense, useEffect, useState } from 'react';
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import DraggableBox from './DraggableBox';
import { dark } from '../constant'
import { getWindowDimensions } from '../utils/helper'

const Model = () => {
  const { scene } = useGLTF("person3dmodel.glb")
  return <primitive object={scene} scale={1} />;
}

const DisplayModel = (props) => {
  const { modelPosition, setModelPosition } = props;
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        height: windowDimensions.height * 0.70,
        top: windowDimensions.height - windowDimensions.height * 0.85,
        left: windowDimensions.width - windowDimensions.width * 0.95,
        borderColor: dark
      }}
      className='container mx-auto border-2 rounded-lg absolute'
    >
      <DraggableBox modelPosition = {modelPosition} setModelPosition = {setModelPosition} >
        <div className='h-64 bg-gray-100 rounded-lg w-fit' >
          <Canvas camera={{ position: [30, 0, 30], fov: 3 }}>
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
    </div>
  )
}

export default DisplayModel;