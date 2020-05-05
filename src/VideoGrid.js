import React from 'react'; 
import VideoThumbnail from 'react-video-thumbnail'; 

const VideoGrid = () => {
return(
<VideoThumbnail
    videoUrl="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/8803510#questions/8428040"
    thumbnailHandler={() => console.log('hello')}
    width={120}
    height={80}
    />
);
}
export default VideoGrid;