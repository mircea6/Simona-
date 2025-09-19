'use client';
import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays on mobile
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video autoplay failed:', error);
      }
    };

    // Play video when component mounts
    playVideo();

    // Handle intersection observer to prevent auto-play on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible, ensure it's playing
            playVideo();
          } else {
            // Video is not visible, pause it
            video.pause();
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of video is visible
      }
    );

    observer.observe(video);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="hero-video absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none blur-[90px] sm:blur-[90 px] md:blur-[10px] brightness-90 opacity-90 transition-all"
    >
      <source src="/image/intro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

