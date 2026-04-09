import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#Navbar',
                start: 'top bottom'
            }
        })

        tl.fromTo('nav', {
            background: 'white'
        },{
            background: '#00000050',
            duration: 1,
            backdropFilter: '10px'
        })
    })

  return (
    <section id='Navbar'>
        <nav>
            <div>
                <a href="/">
                    <h1>BiteBloom</h1>
                </a>
            </div>
            <div className='links'>
                <a href="#Menu">Menu</a>
                <a href="#About">About</a>
                <a href="#Contact">Contact</a>
            </div>
        </nav>
    </section>
  )
}

export default Navbar