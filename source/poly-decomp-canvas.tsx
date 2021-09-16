import React from 'react';
import { Canvas } from '@react-three/fiber';
import PolyDecompDemo from './poly-decomp-demo';

import styles from './poly-decomp-canvas.scss';

const PolyDecompCanvas = (): React.ReactElement => (
  <Canvas className={styles.threeCanvas}>
    <PolyDecompDemo />
  </Canvas>
);

export default PolyDecompCanvas;
