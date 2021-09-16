import React, { useEffect, useRef } from 'react';
import { BufferGeometry, Group } from 'three';

const POINT_WIDTH = 0.02;
const POINT_HEIGHT = 0.02;


interface IPolyPointProps {
  point: [number, number],
}

const PolyPoint = ({ point }: IPolyPointProps): React.ReactElement => {
  const polyRef = useRef<BufferGeometry>(null!);
  const meshRef = useRef<Group>(null!);

  useEffect(() => {
    meshRef.current.position.set(point[0], point[1], 0);
  }, [polyRef]);

  return (
    <mesh ref={meshRef}>
      <meshBasicMaterial color='#09060c' attach='material' />
      <planeGeometry args={[POINT_WIDTH, POINT_HEIGHT]} attach='geometry' />
    </mesh>
  );
};

export default PolyPoint;
