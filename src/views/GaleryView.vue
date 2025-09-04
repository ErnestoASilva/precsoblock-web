<template>
    <div class="min-h-screen bg-gray-50 pt-20">
        <!-- Hero Section -->
        <section class="bg-orange-600 text-white py-16">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Galería</h1>
                <p class="text-xl md:text-2xl opacity-90">Conoce nuestros productos y proyectos</p>
            </div>
        </section>

        <!-- Filtros de Categorías -->
        <section class="container mx-auto px-4 py-12">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Nuestros Trabajos</h2>
                <p class="text-gray-600 max-w-3xl mx-auto">
                    Explora nuestra colección de proyectos realizados y descubre la calidad de nuestros productos.
                </p>
            </div>

            <!-- Filtros -->
            <div class="flex justify-center mb-12">
                <div class="flex flex-wrap justify-center gap-2 bg-gray-100 p-2 rounded-2xl shadow-inner max-w-3xl">
                    <button v-for="category in categories" :key="category.id" @click="activeCategory = category.id"
                        class="px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300" :class="{
                            'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg': activeCategory === category.id,
                            'text-gray-600 hover:text-orange-700 hover:bg-white': activeCategory !== category.id
                        }">
                        {{ category.name }}
                    </button>
                </div>
            </div>

            <!-- Grid de Galería -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div v-for="(image, index) in filteredImages" :key="index"
                    class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    @click="openLightbox(index)">
                    <img :src="image.src" :alt="image.alt" loading="lazy"
                        class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute inset-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                        <div
                            class="w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 class="font-semibold">{{ image.title }}</h3>
                            <p class="text-sm">{{ image.category }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Botón de ver más (para cuando tengas muchas imágenes) -->
            <div class="text-center mt-12" v-if="showLoadMore">
                <button @click="loadMore"
                    class="bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold cursor-pointer hover:bg-orange-700 transition-colors duration-300">
                    Ver más proyectos
                </button>
            </div>
        </section>

        <!-- Lightbox Modal -->
        <div v-if="lightboxVisible" class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div class="relative max-w-6xl w-full max-h-full">
                <button @click="closeLightbox"
                    class="absolute w-10 h-10 -top-12 right-0 text-white text-3xl z-10 rounded-full bg-white/20 hover:text-orange-500 transition-colors cursor-pointer">
                    &times;
                </button>

                <div class="relative">
                    <img :src="currentImage.src" :alt="currentImage.alt"
                        class="w-full h-auto max-h-[80vh] object-contain rounded-lg" />

                    <div
                        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                        <h3 class="text-xl font-bold">{{ currentImage.title }}</h3>
                        <p class="text-orange-300">{{ currentImage.category }}</p>
                        <p class="mt-2">{{ currentImage.description }}</p>
                    </div>
                </div>

                <button v-if="hasPreviousImage" @click="prevImage"
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white text-4xl p-3 rounded-full hover:bg-white/40 transition-all cursor-pointer">
                    ‹
                </button>

                <button v-if="hasNextImage" @click="nextImage"
                    class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white text-4xl p-3 rounded-full hover:bg-white/40 transition-all cursor-pointer">
                    ›
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import imagesReference from '@/composables/imagesReference';

// Categorías
const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'block', name: 'Block' },
    { id: 'adoquin', name: 'Adoquín' },
    { id: 'celosia', name: 'Celosía' },
    { id: 'ladrillo', name: 'Ladrillo' },
    { id: 'proyectos', name: 'Proyectos' },
    { id: 'instalaciones', name: 'Instalaciones' },
];

// Imágenes
const { images } = imagesReference

// Estado reactivo
const activeCategory = ref('all');
const lightboxVisible = ref(false);
const currentImageIndex = ref(0);
const visibleItems = ref(8); // Para la funcionalidad de "cargar más"

// Computed
const filteredImages = computed(() => {
    let filtered = images;

    if (activeCategory.value !== 'all') {
        filtered = images.filter(image =>
            image.categoryId.toLowerCase() === activeCategory.value.toLowerCase()
        );
    }

    return filtered.slice(0, visibleItems.value);
});

const currentImage = computed(() => {
    return filteredImages.value[currentImageIndex.value] || {};
});

const hasNextImage = computed(() => {
    return currentImageIndex.value < filteredImages.value.length - 1;
});

const hasPreviousImage = computed(() => {
    return currentImageIndex.value > 0;
});

const showLoadMore = computed(() => {
    return visibleItems.value < images.length;
});

// Métodos
const openLightbox = (index: any) => {
    currentImageIndex.value = index;
    lightboxVisible.value = true;
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
};

const closeLightbox = () => {
    lightboxVisible.value = false;
    document.body.style.overflow = 'auto'; // Restaurar scroll
};

const nextImage = () => {
    if (hasNextImage.value) {
        currentImageIndex.value++;
    }
};

const prevImage = () => {
    if (hasPreviousImage.value) {
        currentImageIndex.value--;
    }
};

const loadMore = () => {
    visibleItems.value += 8;
};

// Manejar teclado para el lightbox
const handleKeydown = (e: any) => {
    if (!lightboxVisible.value) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
};

// Event listeners
onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Transiciones suaves */
.group {
    transition: all 0.3s ease;
}

/* Mejorar la apariencia del lightbox */
img {
    transition: transform 0.3s ease;
}

/* Scroll suave */
html {
    scroll-behavior: smooth;
}

/* Ocultar scrollbar pero mantener funcionalidad */
.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>