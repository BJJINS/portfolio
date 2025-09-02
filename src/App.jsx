import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 30 }}>
      <Perf position="top-left" />
      <ScrollControls pages={4} damping={0.1}>
        <Experience />
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
