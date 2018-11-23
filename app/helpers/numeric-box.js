import EmberObject from '@ember/object';
import validNumberMixin from '../mixins/valid-number';
import focusableMixin from '../mixins/focusable';

export default EmberObject.extend(validNumberMixin,focusableMixin,{
   text:""
});