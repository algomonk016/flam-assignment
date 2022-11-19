import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import DraggableBox from './DraggableBox';
import { dark, PARENT_DIV_RECT, CloseIcon, COUNT } from '../constant'
import { getWindowDimensions } from '../utils/helper'
import Modal from 'react-modal';

export const Model = () => {
  const { scene } = useGLTF("person3dmodel.glb")
  return <primitive object={scene} scale={1} />;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const DisplayModel = (props) => {
  const { modelPosition, setModelPosition } = props;
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const outerDivRef = useRef();

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(PARENT_DIV_RECT, JSON.stringify(outerDivRef.current.getBoundingClientRect()));
  }, [])

  const openInFullView = () => {
    openModal();
  }

  const openModal = () => {
    setIsModelOpen(true);
  }

  const closeModal = () => {
    setIsModelOpen(false);
    window.location.reload();
    sessionStorage.setItem(COUNT, 0);
  }

  return (
    <div
      ref={outerDivRef}
      style={{
        height: windowDimensions.height * 0.70,
        top: windowDimensions.height - windowDimensions.height * 0.85,
        left: windowDimensions.width - windowDimensions.width * 0.95,
        borderColor: dark
      }}
      className='container mx-auto border-2 rounded-lg absolute'
    >
      <DraggableBox modelPosition={modelPosition} setModelPosition={setModelPosition} >
        <div onDoubleClick={openInFullView} className='h-64 bg-gray-100 rounded-lg' style={{ width: '300px' }} >
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Full Screen Modal"
        shouldCloseOnEsc={false}
      >

        <div className='h-screen w-screen p-20 relative'>
          <Canvas camera={{ position: [30, 0, 30], fov: 3 }}>
            <OrbitControls minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} />
            <mesh position={[0, -1, 0]} >
              <ambientLight intensity={1} />
              <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
              <Suspense fallback={null}>
                <Model />
              </Suspense>
            </mesh>
          </Canvas>

          <button onClick={closeModal} className='absolute right-2 top-2'> <img src={ CloseIcon } className='w-8 h-8' /> </button>
        </div>
      </Modal>
    </div>
  )
}

export default DisplayModel;