import Controller from '@ember/controller'; 

export default Controller.extend({
    name: "Ember Controller",
    edit: true,  // make data visible.,
    colors: ['green', 'blue', 'red','grey'],
    counter : 0,
    colorClass : 'green',
    actions:{ // trigger an event on the click.
        changeEdit: function(){
            window.console.log("changeEdit @ controller") ;
            this.toggleProperty('edit');
        },
        changeColor() {
            this.set('colorClass',  this.get('colors')[++this.counter % (this.get('colors').length)]);
        }
    }
});
console.log("in Controller.") ;