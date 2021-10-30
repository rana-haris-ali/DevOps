import React from 'react';

const VideoDetail = ({selectedVideo}) => {
	// console.log(video);

	if(!selectedVideo){
		return <h3 className="ui header">Hi!<br/>Please Search Your Video</h3>
	}

	const videoSource = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

	return (
		<div>
			<div className="ui embed">
				<iframe title="video player" src={videoSource}></iframe>
			</div>	
			<div className="ui segment">
				<h4 className="ui header">{selectedVideo.snippet.title}</h4>
				<p>{selectedVideo.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetail;