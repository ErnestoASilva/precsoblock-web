<template>
    <header class="bg-white shadow-md fixed w-full top-0 z-50">
        <nav class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <!-- Logo (Desktop)-->
                <div class="hidden md:block flex-shrink-0 my-auto">
                    <router-link to="/" class="flex items-center transition-opacity duration-300 hover:opacity-80">
                        <img src="../../assets/basic/logoCompleto.webp" alt="Logo de la empresa" class="h-12 w-auto" />
                    </router-link>
                </div>

                <!-- Logo (Móvil)-->
                <div class="md:hidden flex-shrink-0 my-auto">
                    <router-link to="/" class="flex items-center transition-opacity duration-300 hover:opacity-80">
                        <img src="../../assets/basic/aspa.webp" alt="Logo de la empresa" class="h-8 w-auto" />
                    </router-link>
                </div>

                <!-- Menú de navegación (Desktop) -->
                <div class="hidden md:block mt-auto">
                    <div class="ml-10 mt-auto flex items-baseline space-x-4">
                        <router-link to="/"
                            class="text-gray-600 hover:text-orange-600 hover:border-b-4 border-orange-600 px-3 py-2 text-base font-medium transition-colors duration-200 hover:transition-all ease-in-out"
                            :class="{ 'text-orange-600 font-semibold border-b-4 border-orange-600': currentRoute === '/' }">
                            INICIO
                        </router-link>
                        <router-link to="/productos"
                            class="text-gray-600 hover:text-orange-600 hover:border-b-4 border-orange-600 px-3 py-2 text-base font-medium transition-colors duration-200 hover:transition-all ease-in-out"
                            :class="{ 'text-orange-600 font-semibold border-b-4 border-orange-600': currentRoute === '/productos' }">
                            PRODUCTOS
                        </router-link>
                        <div class="relative group">
                            <router-link to="/quienes-somos/mision-vision-valores"
                                class="text-gray-600 hover:text-orange-600 hover:border-b-4 border-orange-600 px-3 py-2 text-base font-medium transition-colors duration-200 hover:transition-all ease-in-out"
                                :class="{
                                    'text-orange-600 font-semibold border-b-4 border-orange-600':
                                        currentRoute.startsWith('/quienes-somos')
                                }" @mouseenter="showSubmenu = true" @mouseleave="showSubmenu = false">
                                ¿QUIÉNES SOMOS?
                                <svg class="w-4 h-4 inline-block ml-1 transition-transform duration-200"
                                    :class="{ 'rotate-180': showSubmenu }" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </router-link>

                            <!-- Submenú Desplegable -->
                            <div v-show="showSubmenu"
                                class="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                                @mouseenter="showSubmenu = true" @mouseleave="showSubmenu = false">
                                <router-link to="/quienes-somos/mision-vision-valores"
                                    class="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                    :class="{
                                        'bg-orange-50 text-orange-600 font-medium':
                                            currentRoute === '/quienes-somos/mision-vision-valores'
                                    }">
                                    <div class="flex items-center">
                                        <!-- <svg class="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg> -->
                                        MISIÓN, VISIÓN Y VALORES
                                    </div>
                                </router-link>

                                <router-link to="/quienes-somos/historia"
                                    class="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                    :class="{
                                        'bg-orange-50 text-orange-600 font-medium':
                                            currentRoute === '/quienes-somos/historia'
                                    }">
                                    <div class="flex items-center">
                                        <!-- <svg class="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg> -->
                                        HISTORIA
                                    </div>
                                </router-link>

                                <router-link to="/quienes-somos/certificados"
                                    class="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                    :class="{
                                        'bg-orange-50 text-orange-600 font-medium':
                                            currentRoute === '/quienes-somos/certificados'
                                    }">
                                    <div class="flex items-center">
                                        <!-- <svg class="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg> -->
                                        CERTIFICADOS
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <router-link to="/galeria"
                            class="text-gray-600 hover:text-orange-600 hover:border-b-4 border-orange-600 px-3 py-2 text-base font-medium transition-colors duration-200 hover:transition-all ease-in-out"
                            :class="{ 'text-orange-600 font-semibold border-b-4 border-orange-600': currentRoute === '/galeria' }">
                            GALERÍA
                        </router-link>
                        <router-link to="/contacto"
                            class="text-gray-600 hover:text-orange-600 hover:border-b-4 border-orange-600 px-3 py-2 text-base font-medium transition-colors duration-200 hover:transition-all ease-in-out"
                            :class="{ 'text-orange-600 font-semibold border-b-4 border-orange-600': currentRoute === '/contacto' }">
                            CONTACTOS
                        </router-link>
                    </div>
                </div>

                <!-- Informacion de contacto en Header -->
                <div class="flex gap-2 items-center">
                    <div>
                        <div class="flex gap-2 items-center">
                            <h1 class="text-xs md:text-base font-bold text-gray-800">CONTACTA Y COTIZA</h1>
                            <n-icon size="1rem" class="text-gray-500">
                                <Phone />
                            </n-icon>
                        </div>
                        <p class="text-xs font-medium">
                            <span class="text-orange-600">(662) 260-8880</span>
                            | VENTAS@PRECSOBLOCK.COM.MX
                        </p>
                    </div>
                </div>

                <!-- Botón menú móvil -->
                <div class="md:hidden my-auto">
                    <button @click="toggleMobileMenu"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                        aria-label="Toggle menu">
                        <svg class="h-8 w-8" :class="{ 'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen }"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg class="h-8 w-8" :class="{ 'hidden': !isMobileMenuOpen, 'block': isMobileMenuOpen }"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Menú móvil -->
            <div class="md:hidden transition-all duration-300 ease-in-out"
                :class="{ 'max-h-0 opacity-0': !isMobileMenuOpen, 'max-h-96 opacity-100': isMobileMenuOpen }">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                    <router-link to="/"
                        class="text-gray-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                        :class="{ 'text-orange-600 font-semibold': currentRoute === '/' }" @click="closeMobileMenu">
                        INICIO
                    </router-link>
                    <router-link to="/productos"
                        class="text-gray-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                        :class="{ 'text-orange-600 font-semibold': currentRoute === '/productos' }"
                        @click="closeMobileMenu">
                        PRODUCTOS
                    </router-link>

                    <!-- Quiénes Somos con submenú colapsable -->
                    <div class="border-b border-gray-100 pb-2">
                        <button @click="toggleQuienesSomosSubmenu"
                            class="w-full text-left text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                            :class="{
                                'text-orange-600 font-semibold': currentRoute.startsWith('/quienes-somos'),
                                'bg-orange-50': showQuienesSomosSubmenu
                            }">
                            <span>¿QUIÉNES SOMOS?</span>
                            <svg class="w-4 h-4 transition-transform duration-200"
                                :class="{ 'rotate-180': showQuienesSomosSubmenu }" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <!-- Submenú colapsable -->
                        <div class="pl-6 mt-1 space-y-1 transition-all duration-300 ease-in-out overflow-hidden" :class="{
                            'max-h-0 opacity-0': !showQuienesSomosSubmenu,
                            'max-h-96 opacity-100': showQuienesSomosSubmenu
                        }">
                            <router-link to="/quienes-somos/mision-vision-valores"
                                class="block text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                :class="{
                                    'text-orange-600 font-semibold bg-orange-50':
                                        currentRoute === '/quienes-somos/mision-vision-valores'
                                }" @click="closeAllMenus">
                                MISIÓN, VISIÓN Y VALORES
                            </router-link>

                            <router-link to="/quienes-somos/historia"
                                class="block text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                :class="{
                                    'text-orange-600 font-semibold bg-orange-50':
                                        currentRoute === '/quienes-somos/historia'
                                }" @click="closeAllMenus">
                                HISTORIA
                            </router-link>

                            <router-link to="/quienes-somos/certificados"
                                class="block text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                :class="{
                                    'text-orange-600 font-semibold bg-orange-50':
                                        currentRoute === '/quienes-somos/certificados'
                                }" @click="closeAllMenus">
                                CERTIFICADOS
                            </router-link>
                        </div>
                    </div>

                    <router-link to="/galeria"
                        class="text-gray-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                        :class="{ 'text-orange-600 font-semibold': currentRoute === '/galeria' }"
                        @click="closeMobileMenu">
                        GALERÍA
                    </router-link>
                    <router-link to="/contacto"
                        class="text-gray-600 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                        :class="{ 'text-orange-600 font-semibold': currentRoute === '/contacto' }"
                        @click="closeMobileMenu">
                        CONTACTOS
                    </router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Phone } from '@vicons/fa'
import { NIcon, NCollapse, NCollapseItem } from 'naive-ui'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const showSubmenu = ref(false)
const showQuienesSomosSubmenu = ref(false)

// Computed para obtener la ruta actual
const currentRoute = computed(() => route.path)

// Función para alternar el menú móvil
const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Función para cerrar el menú móvil
const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
}

// Cerrar menú móvil cuando cambia la ruta
const stopWatch = watch(() => route.path, () => {
    closeMobileMenu()
})

// Función para alternar el submenú de Quiénes Somos
const toggleQuienesSomosSubmenu = () => {
    showQuienesSomosSubmenu.value = !showQuienesSomosSubmenu.value
}

// Función para cerrar todos los menús
const closeAllMenus = () => {
    isMobileMenuOpen.value = false
    showQuienesSomosSubmenu.value = false
}

// Limpiar el watcher cuando el componente se desmonta
onUnmounted(() => {
    stopWatch()
})
</script>

<style scoped>
/* .router-link-active {
    @apply text-orange-600 font-semibold;
} */

/* Transición suave para el menú móvil */
.transition-all {
    transition: all 0.3s ease-in-out;
    overflow: hidden;
}

.max-h-0 {
    max-height: 0;
}

.max-h-96 {
    max-height: 24rem;
}
</style>