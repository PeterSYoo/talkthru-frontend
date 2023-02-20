import { useEffect, useRef } from 'react';

export const PrimaryDisplay: React.FC<{ stream?: MediaStream }> = ({ stream }) => {
	// Use `useRef` to create a reference to a `HTMLVideoElement`.
	const videoRef = useRef<HTMLVideoElement>(null);

	// Use `useEffect` to run some code whenever the component updates.
	useEffect(() => {
		// If the `videoRef.current` exists (i.e., the `video` element has been created),
		// set its `srcObject` to the `stream` prop.
		if (videoRef.current && stream) videoRef.current.srcObject = stream;
	}, [stream]);

	// Render a `video` element with `autoPlay` and `muted` attributes,
	// and set its `ref` to the `videoRef` created earlier.
	return (
		<>
			<video ref={videoRef} autoPlay muted className='h-full w-full object-fill' />
		</>
	);
};
