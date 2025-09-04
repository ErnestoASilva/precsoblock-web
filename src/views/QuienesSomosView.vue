<template>
    <div class="min-h-screen bg-gray-50 ">
        <!-- pt-20 -->
        <!-- <div class="container mx-auto px-4 pb-8 pt-2"> -->
        <!-- Navegación interna -->
        <!-- <div class="bg-white rounded-lg shadow-md p-4 mb-8">
                <nav class="flex flex-wrap gap-4 justify-center">
                    <router-link to="/quienes-somos/mision-vision-valores"
                        class="px-4 py-2 rounded-lg transition-colors" :class="{
                            'bg-orange-100 text-orange-600 font-semibold': $route.name === 'MisionVision',
                            'text-gray-600 hover:text-orange-600': $route.name !== 'MisionVision'
                        }">
                        Misión, Visión y Valores
                    </router-link>
                    <router-link to="/quienes-somos/historia" class="px-4 py-2 rounded-lg transition-colors" :class="{
                        'bg-orange-100 text-orange-600 font-semibold': $route.name === 'Historia',
                        'text-gray-600 hover:text-orange-600': $route.name !== 'Historia'
                    }">
                        Historia
                    </router-link>
                    <router-link to="/quienes-somos/certificados" class="px-4 py-2 rounded-lg transition-colors" :class="{
                        'bg-orange-100 text-orange-600 font-semibold': $route.name === 'Certificados',
                        'text-gray-600 hover:text-orange-600': $route.name !== 'Certificados'
                    }">
                        Certificados
                    </router-link>
                </nav>
            </div> -->

        <!-- Contenido dinámico -->
        <router-view />
    </div>
    <!-- </div> -->
</template>

<script setup lang="ts">

</script>

<style scoped></style>