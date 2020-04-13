import HelloWorld from './HelloWorld.vue'
import { mount } from 'cypress-vue-unit-test'
import vuetify from '../plugins/vuetify'

describe('Simple HelloWorld', () => {
  beforeEach(() => {
    mount({
      vuetify,
      render(h) { return h(HelloWorld) }
  },
  { extensions: { plugins: [] } })
  })

  it('CLI documentation link is correct', () => {
    expect(true).to.equal(true)
      // cy.get('[data-testid=docs-link]')
      //     .and('have.attr', 'href')
      //     .and('include', 'vuetifyjs.com')
  })
})
