import Controller from '@ember/controller';

export default Controller.extend({

    propA: 'You need to write tests',
    propB: 'And write one for me too',

    setPropB(str) {
        this.set('propB', str);
    },

    actions: {
        setProps(str) {
            this.set('propA', 'Testing is cool');
            this.setPropB(str);
        }
    }
});