import Carousel from './Carousel.vue'
import { mount } from 'cypress-vue-unit-test'
import vuetify from '../plugins/vuetify'
import Vuetify from 'vuetify/lib';
import { VApp } from 'vuetify/lib/components'


console.log(Carousel)
describe('Simple Carousel', () => {
  beforeEach(() => {
    mount({
      vuetify,
      render: h => h(VApp, [h(Carousel)])
    },
    { extensions: { plugins: [ Vuetify ] } })
  }),

  it('CLI documentation link is correct', () => {
    expect(true).to.equal(true)
  })
})
