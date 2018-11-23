import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        debugger
    },
    model: function(params){
        return this.store.findAll('book',params.id);
    }
});
