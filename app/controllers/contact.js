import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
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
      let data = `Email: ${this.get('emailAddress')}, Message: ${this.get('message')}`;
      alert(data);
      this.set('emailAddress', '');
      this.set('message', '');
      this.set('responseMessage', `We got your message and we’ll get in touch soon. ${data}`);
    }
  }
});
