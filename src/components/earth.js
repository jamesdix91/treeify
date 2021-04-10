import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Earth = () => {

  return (
    <div className="canvas half-width-2 flex-v-center">
          <Canvas>
              <Suspense fallback={'test'}>
  
                  <ambientLight intensity={0.5} color={0xB1E1FF}/>
                  <directionalLight
                    position={[-50,50,20]}
                    color={0xffffbb}
                    intensity={1}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    castShadow
                  />
                    <directionalLight
                    position={[50,-50,0]}
                    color={0xFFF3B8}
                    intensity={0.05}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    castShadow
                  />
                  <directionalLight
                    position={[-50,0,0]}
                    color={0xf7ce00}
                    intensity={0.5}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    castShadow
                  />

                  <OrbitControls enableZoom={false} />
                  <PerspectiveCamera makeDefault fov={20} position={[0,0, 50]} />
                  <Model model={'models/globe.glb'} />
              </Suspense>
          </Canvas>
      </div>
  );
}

const Model = (props) => {

  const refModel = useRef(null)
  const {scene, animations} = useLoader (GLTFLoader, props.model)
  const mixer = useRef();

  useEffect(() => {
    mixer.current = new THREE.AnimationMixer(scene);
    const action = mixer.current.clipAction(animations[0]);
    action.play();
    console.log('action', action)
  }, [animations, scene])


  useFrame((state, delta) => {
    refModel.current.rotation.y += 0.001;
    if (mixer.current) mixer.current.update(delta)
  })
  
  return <primitive ref={refModel} object={scene} dispose={null} />

}

export default Earth;