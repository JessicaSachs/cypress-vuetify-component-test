import Badge from './Badge.vue'
import { mount } from 'cypress-vue-unit-test'
import vuetify from '../plugins/vuetify'
import Vuetify from 'vuetify/lib';
import { VApp } from 'vuetify/lib/components'

describe('Badge', () => {
  beforeEach(() => {
    mount({
      vuetify,
      render: h => h(VApp, [h(Badge)])
    },
    { extensions: { plugins: [ Vuetify ] } })

    cy.get('[data-test=increment-badge]').as('increment')
    cy.get('[data-test=badge]').as('badge')
    cy.get('[data-test=clear-badge]').as('clear')
  }),

  it('increments', () => {
    cy.get('@increment').click()
    cy.get('@badge').should('have.text', '1')
    cy.get('@increment').click()
    cy.get('@badge').should('have.text', '2')
  })

  it('clears notifications', () => {
    cy.get('@increment').click()
    cy.get('@badge').should('have.text', '1')
    cy.get('@clear').click()
    cy.get('@badge').should('not.have.text')
  })
})
