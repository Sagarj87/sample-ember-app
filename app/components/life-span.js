import Component from '@ember/component';

export default Component.extend({

    init() {
        this._super(...arguments);
        window.console.log('----------------- In Component -----------------');
        window.console.log('init');
    },

    didUpdateAttrs() {
        this._super(...arguments);
        window.console.log('didUpdateAttrs', arguments);
    },

    willUpdate(options) {
        window.console.log('willUpdate', options);
    },

    didReceiveAttrs() {
        window.console.log('didReceiveAttrs');
    },

    willRender() {
        window.console.log('willRender');
    },

    didRender() {
        window.console.log('didRender');
        this.sendAction('refresh');
    },

    didInsertElement() {
        window.console.log('didInsertElement');
    },

    willClearRender(options) {
        window.console.log('willClearRender', options);
    },

    willDestroyElement(options) {
        window.console.log('willDestroyElement', options);
    },

    didDestroyElement(options) {
        window.console.log('didDestroyElement', options);
    }
});

