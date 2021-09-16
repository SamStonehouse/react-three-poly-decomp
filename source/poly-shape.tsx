import React, { useEffect, useRef, useState } from 'react';
import { Vector3, BufferGeometry, Shape, Vector2 } from 'three';

/**
 * https://stackoverflow.com/a/7638362/873401
 */
const randomColor = () => {
  let c = '';
  while (c.length < 6) {
    c += (Math.random()).toString(16).substr(-6).substr(-1);
  }
  return `#${c}`;
};

/**
 * https://stackoverflow.com/a/62640342
 */
const colorShade = (_col, amt) => {
  let col = _col.replace(/^#/, '');
  if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  let [r, g, b] = col.match(/.{2}/g);
  ([r, g, b] = [parseInt(r, 16) + amt, parseInt(g, 16) + amt, parseInt(b, 16) + amt]);

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? '0' : '') + r;
  const gg = (g.length < 2 ? '0' : '') + g;
  const bb = (b.length < 2 ? '0' : '') + b;

  return `#${rr}${gg}${bb}`;
};

interface IPolyShapeProps {
  points: [number, number][],
  color?: string,
  line?: boolean,
}



const PolyShape = ({ points, color = '#09060c', line = false }: IPolyShapeProps): React.ReactElement | null => {
  const polyRef = useRef<BufferGeometry>(null!);

  const [createdColor] = useState(randomColor());
  const [shadedColor] = useState(colorShade(createdColor, -40));
  const [mouseOver, setMouseOver] = useState(false);

  if (line) {
    useEffect(() => {
      const vectorisedPoints = points.map(([x, y]) => new Vector3(x, y, 0));
      polyRef.current.setFromPoints(vectorisedPoints);
    }, [polyRef, points]);

    return (
      <line_>
        <lineBasicMaterial color={color} attach='material' />
        <bufferGeometry attach='geometry' ref={polyRef} />
      </line_>
    );
  }

  if (points.length < 2) {
    return null;
  }

  const shape = new Shape(points.map(([x, y]) => new Vector2(x, y)));

  return (
    <mesh
      onPointerEnter={() => { setMouseOver(true); }}
      onPointerLeave={() => { setMouseOver(false); }}
    >
      <meshBasicMaterial color={mouseOver ? shadedColor : createdColor} attach='material' />
      <shapeGeometry attach='geometry' args={[shape]} />
    </mesh>
  );
};

export default PolyShape;
