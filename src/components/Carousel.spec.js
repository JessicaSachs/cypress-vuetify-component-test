import Carousel from './Carousel'
import { mount } from 'cypress-vue-unit-test'
import vuetify from '../plugins/vuetify'
import Vuetify from 'vuetify/lib';
import { VApp } from 'vuetify/lib/components'

describe('Carousel', () => {
  it('displays 5 images', () => {
    mount({
      vuetify,
      render: h => h(VApp, [h(Carousel)])
    },
      { extensions: { plugins: [Vuetify] } })

    cy.get('[aria-label^="Carousel slide"]').each((el, i) => {
      el.click()
      cy.get(`[aria-label="Carousel Slide ${i + 1}"]`)
    })
  })

  it('cycles', () => {
    mount({
      vuetify,
      render: h => h(VApp,
        [h(Carousel, {
          props: { initialCycle: true, interval: 200 }
        })]
      )
    },
      { extensions: { plugins: [Vuetify] } })

    cy.get(`[aria-label="Carousel Slide 1"]`)
    cy.get(`[aria-label="Carousel Slide 2"]`)
    cy.get(`[aria-label="Carousel Slide 3"]`)
    cy.get(`[aria-label="Carousel Slide 4"]`)
    cy.get(`[aria-label="Carousel Slide 5"]`)
  })

  it('continues cycle after the user clicks in the middle of the progress', () => {
    mount({
      vuetify,
      render: h => h(VApp,
        [h(Carousel, {
          props: { initialCycle: true, interval: 200 }
        })]
      )
    },
    { extensions: { plugins: [Vuetify] } })

    cy.get(`[aria-label="Carousel Slide 5"]`)
      .then(() => {
        cy.get('[aria-label^="Carousel slide 3"]').click()
        cy.get(`[aria-label="Carousel Slide 3"]`)
        cy.get(`[aria-label="Carousel Slide 4"]`)
        cy.get(`[aria-label="Carousel Slide 5"]`)
      })
  })
})
