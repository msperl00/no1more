import Home from '../views/Home.vue'
import Documentation from '../views/Documentation.vue'
import NotFound from '../views/NotFound.vue'
import GlobalDetails from '../views/GlobalDetails.vue'
import Form from '../views/Form.vue'
import HomeViolencia from '../views/HomeViolencia.vue'
import ViolenciaDeGenero from '../views/ViolenciaDeGeneroView.vue'
import ViolenciaDomestica from '../views/ViolenciaDomesticaView.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/documentation',
    meta: { title: 'Documentation' },
    component: Documentation,
  },
  {
    path: '/suggestions',
    meta: { title: 'Form' },
    component: Form,
  },
  {
    path: '/tracker',
    meta: { title: 'Global Details' },
    component: GlobalDetails,
  },
  {
    path: '/violencia',
    meta: { title: 'Home Violencia' },
    component: HomeViolencia,
  },
  {
    path: '/violenciadegenero',
    meta: { title: 'Violencia de genero' },
    component: ViolenciaDeGenero,
  },
  {
    path: '/violenciadomestica',
    meta: { title: 'Violencia doméstica' },
    component: ViolenciaDomestica,
  },
  { path: '/:path(.*)', component: NotFound },
]
