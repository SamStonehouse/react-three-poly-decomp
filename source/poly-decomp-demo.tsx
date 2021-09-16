import React, { useEffect, useState } from 'react';
import { polygonQuickDecomp } from './poly-decomp';
import PolyPoint from './poly-point';
import PolyShape from './poly-shape';

const WIDTH = 6;
const HEIGHT = 6;

const MIN_MOVEMENT_DIST = 0.2;

function pointDist(p1: [number, number], p2: [number, number]): number {
  return Math.sqrt(((p2[0] - p1[0]) ** 2) + ((p2[1] - p1[1]) ** 2));
}

const PolyDecompDemo = (): React.ReactElement => {
  const [points, setPoints] = useState<[number, number][]>([]);
  const [pointerDown, setPointerDown] = useState<boolean>(false);
  const [convexPolygons, setConvexPolygons] = useState<[number, number][][]>([]);

  useEffect(() => {
    if (!pointerDown && points.length > 4) {
      const decomp = polygonQuickDecomp(points);

      setConvexPolygons(decomp);
    }
  }, [pointerDown, points]);

  return (
    <group>
      <mesh
        onPointerDown={({ point }) => {
          const { x, y } = point;
          setPointerDown(true);
          setPoints([[x, y]]);
          setConvexPolygons([]);
        }}
        onPointerMove={({ point }) => {
          const { x, y } = point;
          if (pointerDown && points.length > 0) {
            if (pointDist([x, y], points[points.length - 1]) > MIN_MOVEMENT_DIST) {
              setPoints([...points, [x, y]]);
            }
          }
        }}
        onPointerUp={() => {
          setPointerDown(false);
          if (points.length > 2) {
            setPoints([...points, [...points[0]]]);
          }
        }}
      >
        <meshBasicMaterial color='white' attach='material' />
        <planeGeometry args={[WIDTH, HEIGHT]} attach='geometry' />
      </mesh>
      <PolyShape points={points} line />
      {convexPolygons.map((polygon, i) => <PolyShape key={i} points={polygon} color='pink' />)}
      {points.map((point, i) => <PolyPoint key={`${point[0]}-${point[1]}-${i}`} point={point} />)}
    </group>
  );
};

export default PolyDecompDemo;
