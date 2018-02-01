'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

Factory.blueprint('App/Models/Book', (faker, i, data) => {
  return {
    title: `Book ${i + 1}`
  }
})

Factory.blueprint('App/Models/Slider', (faker, i, data) => {
  return {
    title: `Slider ${i + 1}`,
    book_id: data.book_id
  }
})

Factory.blueprint('App/Models/SystemFile', (faker, i, data) => {
  return Object.assign({
    file_name: faker.url({extensions: ['gif', 'jpg', 'png']}),
  }, data)
})
