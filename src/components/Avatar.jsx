import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect } from "react";
import { useMemo } from "react";
import { useRef } from "react";
import { Vector3 } from "three";

export function Avatar(props) {
  const { animation } = props;
  const { nodes, materials } = useGLTF("models/68b59421a78b22ed8510f427.glb");

  const groupRef = useRef();
  const { animations: typingAnimations } = useFBX("animations/Typing.fbx");
  const { animations: fallingAnimations } = useFBX(
    "animations/Falling Idle.fbx"
  );
  const { animations: standingAnimations } = useFBX(
    "animations/Standing W_Briefcase Idle.fbx"
  );

  typingAnimations[0].name = "Typing";
  fallingAnimations[0].name = "Falling";
  standingAnimations[0].name = "Standing";
  const animations = useMemo(() => {
    return [...typingAnimations, ...fallingAnimations, ...standingAnimations];
  }, [typingAnimations, fallingAnimations, standingAnimations]);

  // useAnimations 内部监听了 animations， 如果改变会改变actions
  // 导致动画状态被重置
  const { actions } = useAnimations(animations, groupRef);

  const animationRef = useRef(animation);
  useEffect(() => {
    // 初始化动画，此时不需要过度 fadeIn
    actions[animationRef.current].play();
  }, []);
  useEffect(() => {
    if (animationRef.current === animation) {
      return;
    }
    actions[animationRef.current].fadeOut(0.5);
    actions[animation].reset().fadeIn(0.5).play();
    animationRef.current = animation;
  }, [actions, animation]);

  const headFollowRef = useRef(false);
  const cursorFollowRef = useRef(false);
  useControls({
    headFollow: {
      value: false,
      onChange: (value) => {
        headFollowRef.current = value;
      },
    },
    cursorFollow: {
      value: false,
      onChange: (value) => {
        cursorFollowRef.current = value;
      },
    },
    wireframe: {
      value: false,
      onChange: (value) => {
        Object.values(materials).forEach((material) => {
          material.wireframe = value;
        });
      },
    },
  });

  useFrame((state) => {
    if (headFollowRef.current) {
      groupRef.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (cursorFollowRef.current) {
      const cursorPoint = new Vector3(state.pointer.x, state.pointer.y, 1.0);
      groupRef.current.getObjectByName("Spine").lookAt(cursorPoint);
    }
  });

  return (
    <group ref={groupRef} rotation={[Math.PI / 2, Math.PI, 0]}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("models/68b59421a78b22ed8510f427.glb");
