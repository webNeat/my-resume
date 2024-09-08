import { en, fr } from '#services/data'
import router from '@adonisjs/core/services/router'

router.get('/', ({ response }) => {
  return response.redirect().toPath('/en')
})

router.get('/en', ({ inertia }) => {
  return inertia.render('home', en)
})

router.get('/fr', ({ inertia }) => {
  return inertia.render('home', fr)
})
