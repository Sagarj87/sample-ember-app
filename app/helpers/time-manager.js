import {observer} from '@ember/object';
export default Ember.Object.extend({
   time:0,
   timeChanged: observer('time', function (){  // an observer.
     console.log('time changed');
   })

 });