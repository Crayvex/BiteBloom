import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

const About = () => {

  useGSAP(() => {

    document.fonts.ready.then(() => {

      const lines = new SplitText('.lines', { type: 'lines'})
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#About',
          start: 'top top'
        }
      })
      tl.from(lines.lines, {
        opacity: 0,
        y: 60,
        stagger: 0.05
      })
    })
  })

  return (
    <section id="About">
      <div className="about-container">
        <div className="title1">
          <div className="w-1/2">
            <h2 className="heading lines">Where Every Flavor Blooms</h2>
            <p className="lines hidden md:block">
              BiteBloom was born from a simple passion: turning fresh
              ingredients into unforgettable moments. We believe food should be
              vibrant, nourishing, and full of life — just like a garden in full
              bloom.
            </p>
          </div>
          <div className="title2">
            <p className="lines">
              Happy customers, delivered thousands of
              smiles, and created countless memorable meals.
            </p>
            <div className="flex gap-8 mt-3.5">
              <h2 className="lines"><span>98%  |</span>Customer Satisfaction</h2>
              <h2 className="lines"><span>300+  |</span>Fresh Dishes</h2>
              <h2 className="lines"><span>1000+  |</span>Orders Served</h2>
            </div>
          </div>
        </div>
        <div className="bento mt-16 px-8 w-screen h-[60%] md:grid md:grid-cols-5 md:grid-rows-2 flex flex-col gap-x-6 gap-y-4">
          <img src="/Pictures/bbq.jpg" alt="bento-1" className="col-span-2 " />
          <p className="text-4xl flex items-center md:px-0 px-8 font-bold col-start-3">
            Finger Licking Taste Awaits YOU
          </p>
          <img
            src="/Pictures/noodles.jpg"
            alt="bento-3"
            className="col-start-4 hidden md:block col-span-2"
          />
          <img
            src="/Pictures/momos.jpg"
            alt="bento-4"
            className="row-start-2 hidden md:block col-span-3"
          />
          <img
            src="/Pictures/roll.jpg"
            alt="bento-5"
            className="row-start-2 hidden md:block col-start-4"
          />
          <img
            src="/Pictures/coffee.jpg"
            alt="bento-6"
            className="row-start-2 col-start-5"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
