import { getPopularItems, getVegetarianItems } from "../../Constant.js"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

const SubHero = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'subhero-container',
        start: 'top 30%',
        end: 'bottom 70%',
        scrub: true
      }
    })
    tl.fromTo('.subhero-container', {
      opacity: 0,
      y: 100,
      duration: 0.6
    }, {
      opacity: 1,
      y: 0
    })
  })

  return (
    <section id="SubHero">
      <div className="subhero-container">
        <div>
          <div className="card flex flex-col gap-1">
            <h1 className="mb-6 text-2xl text-amber-200">Most Popular Dishes</h1>
            {getPopularItems().map((item, i) => (
              <div key={i} className="flex justify-between gap-20 text-amber-50">
                <h2>{item.name}</h2>
                <p className="font-serif">{item.price}.00$</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="card flex flex-col gap-1">
            <h1 className="mb-6 text-2xl text-amber-200">Most Popular Veg Dishes</h1>
            {getVegetarianItems().map((item, i) => (
              <div key={i} className="flex justify-between gap-20 text-amber-50">
                <h2>{item.name}</h2>
                <p className="font-serif">{item.price}.00$</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubHero