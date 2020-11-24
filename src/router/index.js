import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Dentiste from '@/components/Dentiste'
import Infirmiere from '@/components/Infirmiere'
import Medecin from '@/components/Medecin'
import Orthophoniste from '@/components/Orthophoniste'
import Sagefemme from '@/components/Sagefemme'
import Contact from '@/components/Contact'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Accueil',
            component: Accueil
        },
        {
            path: '/dentiste',
            name: 'Dentiste',
            component: Dentiste
        },
        {
            path: '/infirmiere',
            name: 'Infirmiere',
            component: Infirmiere
        },
        {
            path: '/medecin',
            name: 'Medecin',
            component: Medecin
        },
        {
            path: '/orthophoniste',
            name: 'Orthophoniste',
            component: Orthophoniste
        },
        {
            path: '/sagefemme',
            name: 'Sagefemme',
            component: Sagefemme
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
    ]
})