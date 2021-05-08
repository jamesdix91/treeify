import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { PerspectiveCamera, OrbitControls, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import globe from '../models/globe.glb';
import instagram from '../logos/instagram.png';
import linkedin from '../logos/linkedin.png';
import facebook from '../logos/facebook.png';
import pinterest from '../logos/pinterest.png';

function Hero() {

  const [dark, setDark] = useState(false)

  return (
    <div className={`App ${dark ? 'dark' : ''}`} onClick={() => setDark(!dark)}>
      <div className="overlay"/>
      <nav className="full-width flex-hv-center">
        <div className="links flex-left flex-hv-center">
          <span>Plant a Tree</span>
          <span>How it Works</span>
          <span>Contact</span>
        </div>
        <span className="logo">Treeify</span>
        <div className="social flex-right flex-h-center">
          <div className="flex-hv-center"><img src={instagram} /></div>
          <div className="flex-hv-center"><img src={facebook} /></div>
          <div className="flex-hv-center"><img src={pinterest} /></div>
          <div className="flex-hv-center"><img src={linkedin} /></div>
        </div>
      </nav>
      <div className="half-width-1 flex-v-center header">
        <h1>Help the Earth <span>recover.</span></h1>
        <p>Planting a tree is the easiest way to give back to the Earth</p>
      </div>
      <div className="canvas half-width-2">
          <Canvas>
              <Suspense fallback={<Html>loading...</Html>}>
  
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

                  <OrbitControls />
                  <PerspectiveCamera makeDefault fov={20} position={[0,0, 75]} />
                  <Model model={globe} />
              </Suspense>
          </Canvas>
      </div>
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

export default Hero;