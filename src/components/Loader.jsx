import { Html } from "@react-three/drei";

const Loader = () => {
	return (
		<Html position={[0, 0, 0]}>
			<div className="absolute top-0 left-0 w-full h-full justify-center items-center flex ">
				<div className="w-[10vw] h-[10vw] rounded-full">Loading...</div>
			</div>
		</Html>
	);
};

export default Loader;
