import EmberObject from '@ember/object';
import ValidNumberMixin from 'myapp/mixins/valid-number';
import { module, test } from 'qunit';

module('Unit | Mixin | valid_number', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ValidNumberObject = EmberObject.extend(ValidNumberMixin);
    let subject = ValidNumberObject.create();
    assert.ok(subject);
  });
});
