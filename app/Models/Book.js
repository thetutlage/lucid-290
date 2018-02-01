'use strict'

const Model = use('Model')

class Book extends Model {
  image () {
    return this.hasOne('App/Models/SystemFile', 'id', 'attachment_id')
      .where('field', 'image')
      .where('attachment_type', 'Book')
  }
}

module.exports = Book
