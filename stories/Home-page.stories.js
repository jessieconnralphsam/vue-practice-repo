import '../resources/css/app.css';
import Home from '../resources/js/components/work/Home.vue';
// import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Home',
  component: Home,
  argTypes: {
    onSubmit: { action: 'submitted' }
  },
};

const Template = (args) => ({
  components: { Home },
  setup() {
    return { args };
  },
  template: '<Home v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

// export const WithPrefilledData = Template.bind({});
// WithPrefilledData.args = {
//   work: {
//     title: 'Laravel Developer',
//     description: 'Develop web applications with Laravel and Vue',
//     company: 'Web Solutions Inc.',
//     salary: 80000
//   }
// };

// export const WithSubmitAction = Template.bind({});
// WithSubmitAction.args = {
//   onSubmit: action('form-submitted')
// };