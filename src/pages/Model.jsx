import React, { Suspense, useEffect, useState } from 'react';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Model } from '../components/DisplayModel'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
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
    <div className='container bg-red-400 mx-auto' style={{ height: windowDimensions.height * 0.80 }} >
      <div className='bg-pink-100 mx-auto m-2' >
        <Canvas camera={{ position: [30, 0, 40], fov: 3 }}>
          <OrbitControls />
          <ambientLight intensity={1} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Model />
        </Canvas>
      </div>
    </div>
  )
}

export default DisplayModel;