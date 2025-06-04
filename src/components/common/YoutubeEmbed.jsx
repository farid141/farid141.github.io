export const YouTubeEmbed = ({ videoId }) => (
  <>
  {videoId&&<div className="relative w-full pt-[56.25%]">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      className="absolute top-0 left-0 w-full h-full rounded-t-lg"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>}
  {!videoId&&<div className="relative w-full pt-[56.25%]">
    No Video
  </div>}
  </>
);