import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

export const Experience = () => {
  useControls({
    name: {
      value: "1",
    },
  });
  return (
    <>
      <OrbitControls />
      <Perf position="top-left" />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
