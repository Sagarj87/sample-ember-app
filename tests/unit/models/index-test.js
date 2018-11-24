import {
    moduleForModel,
    test
  } from 'ember-qunit';
  
  moduleForModel('index', 'Unit | Model | index', {
    // Specify the other units that are required for this test.
    // e.g. needs: ['controller:index']
    needs: []
  });
  
  
  test('it exists', function (assert) {
    let model = this.subject();
    assert.ok(!!model);
  });
  
  
  test('should correctly concat foo', function (assert) {
    let mydata = this.subject();
    mydata.set('foo', 'baz');
    assert.equal(mydata.get('computedFoo'), 'computed baz');
  });
  
  
  test('it has valid count', function (assert) {
    var model = this.subject();
    var hasAttr = model.get('count');
    assert.ok(hasAttr);
    assert.equal(hasAttr, 40);
  
  });
    