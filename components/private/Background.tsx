import { Sphere } from 'drei';
import React, { useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const BackgroundContent: React.FC = () => {
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);

  useFrame(() => {
    const millis = performance.now();
    const seconds = millis / 1e3;
    setPosition([Math.cos(seconds) * 4, Math.sin(seconds) * 4, 0]);
  });

  return <Sphere position={position} />;
};

const Background: React.FC = () => {
  return (
    <Canvas>
      <BackgroundContent />
    </Canvas>
  );
};

export default Background;
