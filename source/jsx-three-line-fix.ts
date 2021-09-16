/* eslint-disable @typescript-eslint/no-namespace */
import { ReactThreeFiber, extend } from '@react-three/fiber';
import { Line } from 'three';

extend({ Line_: Line });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      line_: ReactThreeFiber.Object3DNode<THREE.Line, typeof Line>
    }
  }
}
