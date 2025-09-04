import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/quienes-somos',
      component: () => import('@/views/QuienesSomosView.vue'),
      children: [
        {
          path: '',
          name: 'QuienesSomos',
          component: () => import('@/views/QuienesSomosView.vue')
        },
        {
          path: 'mision-vision-valores',
          name: 'MisionVision',
          component: () => import('../views/MisionVisionValoresView.vue')
        },
        {
          path: 'historia',
          name: 'Historia',
          component: () => import('../views/HistoryView.vue')
        },
        {
          path: 'certificados',
          name: 'Certificados',
          component: () => import('../views/CertificadosView.vue')
        }
      ]
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: () => import('../views/GaleryView.vue'),
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactUs.vue'),
    },
    // Ruta comodín para capturar cualquier otra ruta no definida
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  // Configuración para hacer scroll al inicio al navegar
  scrollBehavior(to, from, savedPosition) {
    // Siempre hacer scroll al inicio (top: 0, left: 0)
    // return { top: 0, left: 0 };
    
    // Alternativa: comportamiento suave con animación
    return { top: 0, behavior: 'smooth' };
  }
})

export default router
