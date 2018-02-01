'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const Slider = use('App/Models/Slider')

Route.get('/', async () => {
  const result = await Slider.query()
    .with('imageLeft')
    .with('imageRight')
    .with('book.image')
    .fetch()
  return result
})
