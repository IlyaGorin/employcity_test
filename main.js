import './src/scss/style.scss';
import 'virtual:svg-icons-register';
import navigation from './src/js/navigation';
import updateRangeValue from './src/js/range';
import initSelect from './src/js/select';
import initForm from './src/js/form';

document.addEventListener('DOMContentLoaded', () => {
  navigation();
  updateRangeValue();
  initSelect();
  initForm();
});
