import Controller from '@ember/controller'; 

export default Controller.extend({
    name: "Ember Controller",
    edit: true,  // make data visible.,
    colors: ['green', 'blue', 'red','grey', 'yellow', 'cyan','indigo', 'violet','aliceblue','antiquewhite','aqua','aquamarine','azure','beige','bisque','blanchedalmond'],
    counter : 0,
    color : 'green',
    pressCount: 0,
    actions:{ // trigger an event on the click.
        changeEdit(){
            window.console.log("changeEdit @ controller") ;
            this.toggleProperty('edit');
        },
        changeColor() {
            this.set('color',  this.get('colors')[++this.counter % (this.get('colors').length)]);
        },
        buttonClick() {
            window.console.log("buttonClick() @ contr")    ;
            this.incrementProperty('pressCount');
        }
    }
});
console.log("in Controller.") ;