import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Avatar } from "./avatar";

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
      <ambientLight intensity={1} />
      <axesHelper />
      <group >
        <Avatar />
      </group>
    </>
  );
};
