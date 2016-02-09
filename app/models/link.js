import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string', { defaultValue: '' }),
  title: DS.attr('string', { defaultValue: '' }),
  description: DS.attr('string', { defaultValue: '' }),
  tags: DS.attr('string', { defaultValue: '' }),
  stared: DS.attr('boolean', { defaultValue: false }),
  creationDate: DS.attr('date', { defaultValue: () => new Date() }),
  lastClicked: DS.attr('date', { defaultValue: () => new Date() }),
});
