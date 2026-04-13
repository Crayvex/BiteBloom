import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const videoRef = useRef();

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const title = new SplitText(".title", { type: "chars" });
      const subtitle = new SplitText(".subtitle-content", { type: "lines" });

      gsap.from(title.chars, {
        opacity: 0,
        duration: 0.8,
        y: 100,
        stagger: 0.05,
      });
      gsap.from(subtitle.lines, {
        opacity: 0,
        duration: 0.8,
        y: 50,
        delay: 1,
        stagger: 0.05,
      });
    });

    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: "center 60%",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    const setupVideoAnimation = () => {
      videoTimeline.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        ease: "none", // Linear scrubbing looks best
      });
    };

    // If video metadata is already loaded (from cache, etc.) setup immediately
    if (videoRef.current.readyState >= 1) {
      setupVideoAnimation();
    } else {
      // Otherwise wait for the metadata to load
      videoRef.current.onloadedmetadata = setupVideoAnimation;
    }
  }, []);

  return (
    <section id="Hero">
      <div className="hero-container">
        <h1 className="title">BiteBliss</h1>
        <div className="sub-titles">
          <div>
            <h3>Fillup Your Tummy.</h3>
            <h2 className="subtitle-content">
              Every bite filled <br /> with Taste.{" "}
            </h2>
          </div>
          <div>
            <p className="subtitle-content">
              Click down below to view our menu
            </p>
            <a href="#menu">Check menu ⇾</a>
          </div>
        </div>
      </div>
      <div>
        <video src="/Videos/output.mp4" preload="auto" muted ref={videoRef} loop />
      </div>
    </section>
  );
};

export default Hero;
