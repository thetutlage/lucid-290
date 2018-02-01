'use strict'

const Model = use('Model')

class Slider extends Model {
  book () {
    return this.belongsTo('App/Models/Book')
  }

  imageLeft () {
    return this.hasOne('App/Models/SystemFile', 'id', 'attachment_id')
      .where('field', 'image_left')
      .where('attachment_type', 'Slider')
  }

  imageRight () {
    return this.hasOne('App/Models/SystemFile', 'id', 'attachment_id')
      .where('field', 'image_right')
      .where('attachment_type', 'Slider')
  }
}

module.exports = Slider
