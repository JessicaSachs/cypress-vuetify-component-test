import App from './App.vue'
import { mount } from 'cypress-vue-unit-test'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify/lib';

describe('Simple App', () => {
  beforeEach(() => {
    mount({
      vuetify,
      render(h) {
            return h(App)
        }
    },
    { extensions: { plugins: [ Vuetify ] } })
  }),

  it('showcases components', () => {
    cy.get('[data-test=tree-view]')
    cy.get('[data-test=icon-collection] > *')
    cy.get('[data-test=hello-world]')
    cy.get('[data-test=data-table]')
    cy.get('[data-test=badge]')
    cy.get('[data-test=banner]')
  })
})
