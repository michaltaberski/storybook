import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';
import MyButton from './Button.vue';

Vue.component('my-button', MyButton);

storiesOf('Button')
  .add('with text', {
    template: '<my-button :handle-click="log">{{ $store.state.count }}</my-button>',
    store: new Vuex.Store({
      state: { count: 0 },
    }),
    methods: {
      log() {
        this.$store.state.count += 1;
      },
    },
  })
  .add('with emoji', '<my-button>🤔😳😯😮</my-button>')
  .add('colorful', {
    render(h) {
      return h(
        MyButton,
        {
          props: { color: 'pink' },
        },
        ['hello world']
      );
    },
  })
  .add('rounded', '<my-button :rounded="true">rounded</my-button>');