import React, { useRef, useEffect } from "react";
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import "video.js/dist/video-js.css";

interface VideoJsProps {
	options: VideoJsPlayerOptions;
}

const VideoJS = (props: VideoJsProps) => {
	const videoRef = useRef(null);
	const playerRef = useRef<null | VideoJsPlayer>(null);
	const { options } = props;

	useEffect(() => {
		if (!playerRef.current) {
			const videoElement = videoRef.current;

			if (!videoElement) {
				return;
			}

			playerRef.current = videojs(videoElement, options);
		} else {
			const player = playerRef.current;
			if (options.autoplay) {
				player.autoplay(options.autoplay);
			}
			if (options.sources) {
				player.src(options.sources);
			}
		}
	}, [options, videoRef]);

	useEffect(() => {
		const player = playerRef.current;

		return () => {
			if (player) {
				player.dispose();
				playerRef.current = null;
			}
		};
	}, [playerRef]);

	return (
		<div data-vjs-player>
			<video ref={videoRef} className="video-js vjs-big-play-centered" />
		</div>
	);
};

export default VideoJS;
