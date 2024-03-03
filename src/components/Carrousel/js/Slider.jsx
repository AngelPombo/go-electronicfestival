import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import '../css/sandbox.css'
import '../css/embla.css'

const OPTIONS = {loop: false, delay: 1000, jump: true}
const SLIDE_COUNT = 15
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Slider = () => (
  <section className="sandbox">
    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </section>
)

export {Slider};
