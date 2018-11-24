import Model from 'ember-data/model';
import { computed } from '@ember/object'; 

export default Model.extend({
    foo: 'bar',
    count: 40,

  computedFoo: computed('foo', function() {
    const foo = this.get('foo');
    return `computed ${foo}`;
  })
});