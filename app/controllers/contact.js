import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isEmailValid', 'isMessageValid'),
  isDisabled: Ember.computed.not('isValid'),
  emailFieldClass: Ember.computed('isEmailValid', function() {
    if (this.get('isEmailValid')) {
      return 'form-group has-success has-feedback';
    }
    else {
      return 'form-group has-feedback';
    }
  }),
  messageFieldClass: Ember.computed('isMessageValid', function() {
    if (this.get('isMessageValid')) {
      return 'form-group has-success has-feedback';
    }
    else {
      return 'form-group has-feedback';
    }
  }),

  actions: {
    sendMessage() {
      const data = `Email: ${this.get('email')}, Message: ${this.get('message')}`;
      const email = this.get('email');
      const message = this.get('message');
      const newMessage = this.store.createRecord('contact', {email: email, message: message});
      alert(data);

      newMessage.save().then(() => {
        this.set('email', '');
        this.set('message', '');
        this.set('responseMessage', `We got your message and we’ll get in touch soon. ${data}`);
      });

    }
  }
});
