import Ember from 'ember';
import Component from '@ember/component';

var inject = Ember.inject;

export default Component.extend({
    init() {
        this._super(...arguments);
        this.set('start', inject.service());
        this.set('message','Initial status info @ component.');
    },
    actions: {
        pressMe() {  // used in hbs component.
            var testText = this.get('start').myhandler(); // from start.js
            this.set('message', testText); 
            window.console.log( "isAuthenticated: " , this.get('start').isAuthenticated);
        }
    }
});