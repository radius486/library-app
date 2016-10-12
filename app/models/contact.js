import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

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
});
