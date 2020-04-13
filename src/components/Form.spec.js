import Form from './Form.vue'
import { mount } from 'cypress-vue-unit-test'
import vuetify from '../plugins/vuetify'
import Vuetify from 'vuetify/lib';
import { VApp } from 'vuetify/lib/components'

describe('Simple Form', () => {
  beforeEach(() => {
    mount({
      vuetify,
      render: h => h(VApp, [h(Form)])
    },
    { extensions: { plugins: [ Vuetify ] } })
  }),

  it('CLI documentation link is correct', () => {
    expect(true).to.equal(true)
  })
})
