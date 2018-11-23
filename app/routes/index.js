import Route from '@ember/routing/route';
let  companies = [{
    "name" : "Google",
    "headquarters": "Mountain View",
    "revenue":"59b"
    },{
        "name" : "Facebook",
        "headquarters":"Menlo Park",
        "revenue":"7b"
    },{
        "name" : "twitter",
        "revenue": "664m",
        "headquarters":"San Francisco"
    }];
export default Route.extend({
    
    model: function() {
        window.console.log("model @ route") ;
        //return ['Android', 'iOS', 'Tizen'];
        //return companies;
        return {
            name: "Ravi Kumar",
            avatar: "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
            bio: "Famous painter"
        };
    },
    redirect() {
        //window.console.log("redirect() @ routes/index.js")  ;
        //this.transitionTo("commits.index");
    }
});
console.log("in Route.") ;