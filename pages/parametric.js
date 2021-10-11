import { useRef, useEffect } from 'react';
import { parametric } from '../utils';

export default function Parametric() {
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;

    ctx.translate(0.5 * width, 0.5 * height);
    ctx.scale(1, -1);

    const LINE_SEGMENTS = 60;
    function parabola(x0, y0, p, min, max) {
      const ret = [];
      for (let i = 0; i <= LINE_SEGMENTS; i++) {
        const s = i / 60;
        const t = min * (1 - s) + max * s;
        const x = x0 + 2 * p * t ** 2;
        const y = y0 + 2 * p * t;
        ret.push([x, y]);
      }
      return ret;
    }
    draw(parabola(0, 0, 5.5, -10, 10));
  }, []);
  return <canvas width="512" height="512" ref={ref}></canvas>;
}
