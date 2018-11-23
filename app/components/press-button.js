import Component from '@ember/component';

export default Component.extend({
    classNames: 'button-wrapper',
    actions: {
        buttonClick() {
        window.console.log("buttonClick() @ press-button");
        this.sendAction();
        }
    }
});
