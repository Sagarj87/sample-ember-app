import Route from '@ember/routing/route';

export default Route.extend({
    model: function(){
        return this.store.findAll('book');
    },
    willDestroy() {
        if (this.get('store')) {
            this.get('store').unloadAll();
            this.get('store').destroy();
        }
    }
});
