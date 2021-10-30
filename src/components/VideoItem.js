import React from 'react'
import "./stylesheets/VideoItem.css"

const VideoItem = ({video, onVideoSelect}) => {
	const videoThumbnail = video.snippet.thumbnails.default.url;
	return (
		<div onClick={() => onVideoSelect(video)}  className="video-item item">
			<img className="ui image" src={videoThumbnail} alt=""/>
			<div className="content">
				<div className="header">
					{video.snippet.title}
				</div>
			</div>
		</div>
	)
}

export default VideoItem;