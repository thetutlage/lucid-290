'use strict'

const Schema = use('Schema')

class SliderSchema extends Schema {
  up () {
    this.create('sliders', (table) => {
      table.increments()
      table.integer('book_id')
      table.string('title')
      table.timestamps()
    })
  }

  down () {
    this.drop('sliders')
  }
}

module.exports = SliderSchema
