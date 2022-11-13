import { gsap } from 'gsap'
import { ScrollSmoother } from './gsap/ScrollSmoother'

gsap.registerPlugin(ScrollSmoother)

const scrollSmoother = ScrollSmoother.create({
    smooth: 1,
    ease: 'Power1.easeIn'
})
