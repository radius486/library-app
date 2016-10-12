import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    sendMessage(newMessage) {
      const data = `Email: ${this.controller.get('model.email')}, Message: ${this.controller.get('model.message')}`;
      //alert(data);

      newMessage.save().then(() => {
        this.controller.set('model.email', '');
        this.controller.set('model.message', '');
        this.controller.set('model.responseMessage', `We got your message and we’ll get in touch soon. ${data}`);
      });

    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
