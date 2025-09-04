<template>
    <footer class="bg-gray-800 text-white">
        <!-- Sección superior con información -->
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <!-- Logo y descripción -->
                <div class="lg:col-span-1">
                    <div class="flex items-center mb-4">
                        <img src="/src/assets/precso_ico.png" alt="Logo de la empresa" class="h-10 w-auto" />
                        <span class="ml-3 text-xl font-bold text-orange-600">Precsoblock S.A. de C.V.</span>
                    </div>
                    <p class="text-gray-400 mb-4 leading-relaxed">
                        Comprometidos con la innovación y servicio hacia nuestros clientes.
                    </p>
                    <div class="flex space-x-4">
                        <!-- WhatsApp -->
                        <a :href="whatsappLink" target="_blank" rel="noopener noreferrer"
                            class="text-gray-400 hover:text-orange-600 transition-colors duration-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
                            </svg>
                        </a>

                        <!-- Instagram -->
                        <a :href="instagramLink" target="_blank" rel="noopener noreferrer"
                            class="text-gray-400 hover:text-orange-600 transition-colors duration-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        <!-- Facebook -->
                        <a :href="facebookLink" target="_blank" rel="noopener noreferrer"
                            class="text-gray-400 hover:text-orange-600 transition-colors duration-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Enlaces rápidos -->
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-orange-600">Navegación</h3>
                    <ul class="space-y-2">
                        <li>
                            <router-link to="/"
                                class="text-gray-400 hover:text-orange-600 transition-colors duration-300 flex items-center"
                                :class="{ 'text-orange-600': currentRoute === '/' }">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Inicio
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/productos"
                                class="text-gray-400 hover:text-orange-600 transition-colors duration-300 flex items-center"
                                :class="{ 'text-orange-600': currentRoute === '/productos' }">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                Productos
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/quienes-somos/mision-vision-valores"
                                class="text-gray-400 hover:text-orange-600 transition-colors duration-300 flex items-center"
                                :class="{ 'text-orange-600': currentRoute.startsWith('/quienes-somos') }">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                ¿Quiénes Somos?
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/galeria"
                                class="text-gray-400 hover:text-orange-600 transition-colors duration-300 flex items-center"
                                :class="{ 'text-orange-600': currentRoute === '/galeria' }">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Galería
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/contacto"
                                class="text-gray-400 hover:text-orange-600 transition-colors duration-300 flex items-center"
                                :class="{ 'text-orange-600': currentRoute === '/contacto' }">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contacto
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Información de contacto -->
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-orange-600">Contacto</h3>
                    <div class="space-y-3">
                        <div class="flex items-start">
                            <svg class="w-5 h-5 mr-3 mt-1 text-orange-600 flex-shrink-0" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span class="text-gray-400">Bulevar Lázaro Cárdenas 750, Progresista, 83120 Hermosillo,
                                Son.</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span class="text-gray-400">+52 (662) 260-8880</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span class="text-gray-400">ventas@precsoblock.com.mx</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div class="text-gray-400">
                                <div>Lun - Vie: 7:00 AM - 6:00 PM</div>
                                <div>Sab: 7:00 AM - 1:00 PM</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sucursales -->
                <div class="lg:col-span-2">
                    <h3 class="text-lg font-semibold mb-4 text-orange-600">Sucursales</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                            <a :href="linksMaps.pb" target="_blank" rel="noopener noreferrer">
                                <h4 class="font-medium text-white hover:text-orange-600 transition-colors duration-300">
                                    Sucursal Lázaro Cárdenas</h4>
                                <p class="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300">
                                    Bulevar Lázaro Cárdenas 750, Progresista, 83120 Hermosillo,
                                    Son.</p>
                            </a>
                            <p class="text-gray-400 text-sm">Tel: +52 (662) 260-8880</p>
                        </div>
                        <div>
                            <a :href="linksMaps.bm" target="_blank" rel="noopener noreferrer">
                                <h4 class="font-medium text-white hover:text-orange-600 transition-colors duration-300">
                                    Sucursal Quiroga</h4>
                                <p class="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300">
                                    Blvd. Antonio Quiroga 360, Villa Bonita Residencial, 83288
                                    Hermosillo, Son.</p>
                            </a>
                            <p class="text-gray-400 text-sm">Tel: +52 (662) 260-8880</p>
                        </div>
                        <div>
                            <a :href="linksMaps.bd" target="_blank" rel="noopener noreferrer">
                                <h4 class="font-medium text-white hover:text-orange-600 transition-colors duration-300">
                                    Sucursal Parque Industrial</h4>
                                <p class="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300">A
                                    Sahuaripa, Parque Industrial, 83299 Hermosillo, Son.</p>
                            </a>
                            <p class="text-gray-400 text-sm">Tel: +52 (662) 260-8880</p>
                        </div>
                        <div>
                            <a :href="linksMaps.bn" target="_blank" rel="noopener noreferrer">
                                <h4 class="font-medium text-white hover:text-orange-600 transition-colors duration-300">
                                    Sucursal Nogales</h4>
                                <p class="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300">De
                                    Los Nogales km 16, 84000 Heroica Nogales, Son.</p>
                            </a>
                            <p class="text-gray-400 text-sm">Tel: +52 (631) 316-3773</p>
                        </div>
                        <div>
                            <a :href="linksMaps.bg" target="_blank" rel="noopener noreferrer">
                                <h4 class="font-medium text-white hover:text-orange-600 transition-colors duration-300">
                                    Punto de Venta Guaymas</h4>
                                <p class="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300">
                                    Carr. Internacional, Petrolera, 85456 Guaymas, Son.</p>
                            </a>
                            <p class="text-gray-400 text-sm">Tel: +52 (622) 221-1113</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sección inferior de copyright -->
        <div class="border-t border-gray-700">
            <div class="container mx-auto px-4 py-6">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm text-center md:text-left">
                        © {{ new Date().getFullYear() }} Precsoblock S.A. de C.V. Todos los derechos reservados.
                    </p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" class="text-gray-400 hover:text-orange-600 text-sm transition-colors duration-300">
                            Política de Privacidad
                        </a>
                        <a href="#" class="text-gray-400 hover:text-orange-600 text-sm transition-colors duration-300">
                            Términos de Servicio
                        </a>
                        <a href="#" class="text-gray-400 hover:text-orange-600 text-sm transition-colors duration-300">
                            Aviso Legal
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import constants from '@/composables/constants'

//Config
const route = useRoute()
const currentRoute = computed(() => route.path)
const { whatsappLink, facebookLink, instagramLink, branches } = constants

const linksMaps = {
    pb: branches.find(item => item.id == 'precsoblock')?.limkMap,
    bm: branches.find(item => item.id == 'blockmart')?.limkMap,
    bd: branches.find(item => item.id == 'desierto')?.limkMap,
    bn: branches.find(item => item.id == 'nogales')?.limkMap,
    bg: branches.find(item => item.id == 'guaymas')?.limkMap,
}

</script>

<style scoped>
/* .router-link-active {
  @apply text-orange-600;
} */
</style>