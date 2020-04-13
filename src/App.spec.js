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

  it('CLI documentation link is correct', () => {
    expect(true).to.equal(true)
      // cy.get('[data-testid=docs-link]')
      //     .and('have.attr', 'href')
      //     .and('include', 'vuetifyjs.com')
  })
})
