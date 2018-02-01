'use strict'

const Schema = use('Schema')

class SystemFileSchema extends Schema {
  up () {
    this.create('system_files', (table) => {
      table.increments()
      table.integer('attachment_id')
      table.string('file_name')
      table.string('field')
      table.string('attachment_type')
      table.timestamps()
    })
  }

  down () {
    this.drop('system_files')
  }
}

module.exports = SystemFileSchema
