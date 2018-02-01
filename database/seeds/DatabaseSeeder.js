'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class DatabaseSeeder {
  async run () {
    const book = await Factory.model('App/Models/Book').create()

    // 3 sliders for a given book
    const sliders = await Factory.model('App/Models/Slider').createMany(3, {
      book_id: book.id
    })

    for (let slider of sliders) {
      // system file for the slider with `field=image_left`
      await Factory.model('App/Models/SystemFile').create({
        attachment_type: 'Slider',
        field: 'image_left',
        attachment_id: slider.id
      })

      // system file for the slider with `field=image_right`
      await Factory.model('App/Models/SystemFile').create({
        attachment_type: 'Slider',
        field: 'image_right',
        attachment_id: slider.id
      })
    }

    // system file for a given book
    await Factory.model('App/Models/SystemFile').create({
      attachment_type: 'Book',
      field: 'image',
      attachment_id: book.id
    })
  }
}

module.exports = DatabaseSeeder
