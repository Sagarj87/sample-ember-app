import EmberObject from '@ember/object';
import FocusableMixin from 'myapp/mixins/focusable';
import { module, test } from 'qunit';

module('Unit | Mixin | focusable', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let FocusableObject = EmberObject.extend(FocusableMixin);
    let subject = FocusableObject.create();
    assert.ok(subject);
  });
});
