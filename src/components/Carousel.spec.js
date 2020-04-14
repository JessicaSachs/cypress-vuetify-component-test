import Carousel from './Carousel'
import { mount } from 'cypress-vue-unit-test'
import vuetify from '../plugins/vuetify'
import Vuetify from 'vuetify/lib';
import { VApp } from 'vuetify/lib/components'

const slideForIdx = i => `[aria-label="Carousel Slide ${i + 1}"]`

describe('Carousel', () => {
  it('displays 5 images', () => {
    mount({
      vuetify,
      render: h => h(VApp, [h(Carousel)])
    },
      { extensions: { plugins: [Vuetify] } })

    cy.get('[aria-label^="Carousel slide"]').as('allButtons')

    cy.get('@allButtons').each((el, i) => {
      el.click()
      cy.get(slideForIdx(i))
    })
  })

  describe('cycles', () => {
    beforeEach(() => {
      mount({
        vuetify,
        render: h => h(VApp,
          [h(Carousel, {
            props: { initialCycle: true, interval: 200 }
          })]
        )
      },
        { extensions: { plugins: [Vuetify] } })

      cy.get('[aria-label^="Carousel slide"]').as('allButtons')
      cy.get('[aria-label^="Carousel Slide "]').as('allSlides')
      cy.get(`[aria-label="Carousel Slide 1"]`).as('slide1')
      cy.get(`[aria-label="Carousel Slide 2"]`).as('slide2')
      cy.get(`[aria-label="Carousel Slide 3"]`).as('slide3')
      cy.get(`[aria-label="Carousel Slide 4"]`).as('slide4')
      cy.get(`[aria-label="Carousel Slide 5"]`).as('slide5')
    })

    it('cycles', () => {
      cy.get('@slide1')
      cy.get('@slide2')
      cy.get('@slide3')
      cy.get('@slide4')
      cy.get('@slide5')
    })

    it('continues cycle after the user clicks in the middle of the progress', () => {
      cy.get('[aria-label^="Carousel slide 3"]').as('button3')

      cy.get(slideForIdx(4))
        .as('button5')
        .then(() => {
          cy.get('@button3').click()
          cy.get(slideForIdx(2))
          cy.get(slideForIdx(3))
          cy.get('@button5')
        })
    })
  })
})
