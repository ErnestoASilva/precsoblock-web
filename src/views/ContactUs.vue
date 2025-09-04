<template>
    <div class="min-h-screen bg-gray-50 pt-20">
        <!-- Hero Section -->
        <section class="bg-orange-600 text-white py-16">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
                <p class="text-xl md:text-2xl opacity-90">Estamos aquí para ayudarte. ¡Hablemos!</p>
            </div>
        </section>

        <!-- Main Content -->
        <div class="container mx-auto px-4 py-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Información de Contacto -->
                <div class="space-y-8">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Información de Contacto</h2>
                        <p class="text-gray-600 text-lg mb-8">
                            Estamos disponibles para responder todas tus preguntas y brindarte el mejor servicio.
                        </p>
                    </div>

                    <!-- Tarjetas de Información -->
                    <div class="space-y-6">
                        <!-- Teléfono -->
                        <div class="flex items-start">
                            <div class="bg-orange-100 p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800 text-lg">Teléfono</h3>
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                    <div class="flex justify-between gap-2">
                                        <p class="text-gray-700 font-semibold">Hermosillo:</p>
                                        <p class="text-gray-600">+52 (662) 260-8880</p>
                                    </div>
                                    <div class="flex justify-between gap-2">
                                        <p class="text-gray-700 font-semibold">Nogales:</p>
                                        <p class="text-gray-600">+52 (631) 316-3773</p>
                                    </div>
                                    <div class="flex justify-between gap-2">
                                        <p class="text-gray-700 font-semibold">Guaymas:</p>
                                        <p class="text-gray-600">+52 (622) 221-1113</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="flex items-start">
                            <div class="bg-orange-100 p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800 text-lg">Email</h3>
                                <p class="text-gray-600">ventas@precsoblock.com.mx</p>
                            </div>
                        </div>

                        <!-- Ubicación -->
                        <div class="flex items-start">
                            <div class="bg-orange-100 p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800 text-lg">Ubicación</h3>
                                <p class="text-gray-600">Bulevar Lázaro Cárdenas 750, Progresista</p>
                                <p class="text-gray-600">83120 Hermosillo, Son.</p>
                            </div>
                        </div>

                        <!-- Horario -->
                        <div class="flex items-start">
                            <div class="bg-orange-100 p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800 text-lg">Horario de Atención</h3>
                                <p class="text-gray-600">Lunes a Viernes: 7:00 AM - 6:00 PM</p>
                                <p class="text-gray-600">Sábados: 7:00 AM - 1:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <!-- Redes Sociales -->
                    <div class="pt-6">
                        <h3 class="font-semibold text-gray-800 text-lg mb-4">Síguenos en</h3>
                        <div class="flex space-x-4">
                            <a :href="facebookLink" target="_blank"
                                class="bg-gray-800 text-white p-3 rounded-full hover:bg-orange-600 transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a :href="instagramLink" target="_blank"
                                class="bg-gray-800 text-white p-3 rounded-full hover:bg-orange-600 transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a :href="whatsappLink" target="_blank"
                                class="bg-gray-800 text-white p-3 rounded-full hover:bg-orange-600 transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Formulario de Contacto -->
                <div class="bg-white rounded-2xl shadow-xl p-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>

                    <n-form ref="formRef" :model="form" :rules="rules" @submit.prevent="submitForm" class="space-y-1">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <n-form-item path="nombre" label="Nombre completo" required>
                                <n-input v-model:value="form.nombre" type="text" placeholder="Tu nombre completo"
                                    size="large" clearable />
                            </n-form-item>

                            <n-form-item path="email" label="Email">
                                <n-input v-model:value="form.email" :input-props="{ type: 'mail' }"
                                    placeholder="tu.email@ejemplo.com" size="large" clearable />
                            </n-form-item>
                        </div>

                        <n-form-item path="telefono" label="Teléfono">
                            <n-input v-model:value="form.telefono" :input-props="{ type: 'tel' }"
                                placeholder="+51 987 654 321" size="large" clearable>
                                <template #prefix>
                                    <n-icon>
                                        <PhoneIcon />
                                    </n-icon>
                                </template>
                            </n-input>
                        </n-form-item>

                        <n-form-item path="asunto" label="Asunto" required>
                            <n-select v-model:value="form.asunto" placeholder="Selecciona un asunto"
                                :options="asuntoOptions" size="large" />
                        </n-form-item>

                        <n-form-item path="mensaje" label="Mensaje" required>
                            <n-input v-model:value="form.mensaje" type="textarea"
                                placeholder="Escribe tu mensaje aquí..." :autosize="{
                                    minRows: 5,
                                    maxRows: 8
                                }" size="large" />
                        </n-form-item>

                        <n-button attr-type="submit" :loading="loading" type="primary" size="large" :disabled="loading"
                            class="w-full bg-orange-600 hover:bg-orange-700 border-0 font-semibold"
                            style="width: 100%;">
                            <template #icon>
                                <n-icon v-if="!loading">
                                    <SendIcon />
                                </n-icon>
                            </template>
                            {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
                        </n-button>
                    </n-form>
                </div>
            </div>
        </div>

        <!-- Mapa con múltiples sucursales -->
        <section class="container mx-auto px-4 pb-16">
            <div class="bg-white rounded-2xl shadow-xl p-6">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Nuestras Sucursales</h2>

                <!-- Selector de sucursal responsive (combinación óptima) -->
                <div class="flex justify-center mb-8">
                    <!-- Select para móviles -->
                    <div class="block md:hidden w-full max-w-xs">
                        <select v-model="selectedBranch"
                            class="w-full px-4 py-3 border border-gray-300 rounded-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                            <option v-for="branch in branches" :key="branch.id" :value="branch.id" class="text-sm">
                                {{ branch.name }}
                            </option>
                        </select>
                    </div>

                    <!-- Botones para tablet/desktop -->
                    <div class="hidden md:flex bg-gray-100 p-1.5 rounded-2xl shadow-inner">
                        <div class="flex flex-wrap justify-center gap-2">
                            <button v-for="branch in branches" :key="branch.id" @click="selectedBranch = branch.id"
                                class="px-4 py-2 text-sm font-semibold cursor-pointer rounded-xl transition-all duration-300 min-w-[100px]"
                                :class="{
                                    'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg': selectedBranch === branch.id,
                                    'text-gray-600 hover:text-orange-700 hover:bg-white': selectedBranch !== branch.id
                                }">
                                {{ branch.name }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Mapa de la sucursal seleccionada -->
                <div class="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <iframe :src="selectedBranchMap" width="100%" height="100%" style="border:0;" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        :title="`Mapa de ${selectedBranchInfo?.name || 'nuestra sucursal'}`"></iframe>
                </div>

                <!-- Información mínima de la sucursal -->
                <div v-if="selectedBranchInfo" class="text-center mt-4">
                    <p class="text-sm text-gray-600">
                        <span class="font-semibold text-orange-600">{{ selectedBranchInfo.name }}</span> •
                        {{ selectedBranchInfo.address }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
    NForm,
    NFormItem,
    NInput,
    NSelect,
    NButton,
    NIcon,
    useMessage,
    NRadioGroup,
    NRadio,
    NSpace,
    NRadioButton
} from 'naive-ui';

import type {
    FormInst,
    FormItemInst,
    FormItemRule,
    FormRules,
    FormValidationError
} from 'naive-ui'
import { Phone as PhoneIcon } from '@vicons/fa';
import { Send as SendIcon } from '@vicons/ionicons5'
import constants from '@/composables/constants';

//Config
const { whatsappLink, facebookLink, instagramLink, branches } = constants
const formRef = ref();
const message = useMessage();
const loading = ref(false);
const selectedBranch = ref('precsoblock');

// Estado del formulario
const form = ref({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
});

// Opciones para el select de asunto
const asuntoOptions = [
    {
        label: 'Cotización',
        value: 'cotizacion'
    },
    {
        label: 'Información general',
        value: 'informacion'
    },
    {
        label: 'Queja o reclamo',
        value: 'queja'
    },
    {
        label: 'Sugerencia',
        value: 'sugerencia'
    },
    {
        label: 'Otros',
        value: 'otros'
    }
];

// Reglas de validación
const rules: FormRules = {
    nombre: [
        {
            required: true,
            message: 'Por favor ingresa tu nombre completo',
            trigger: 'blur'
        },
        {
            min: 2,
            message: 'El nombre debe tener al menos 2 caracteres',
            trigger: 'blur'
        }
    ],
    email: [
        {
            required: false,
            message: 'Por favor ingresa tu email',
            trigger: 'blur'
        },
        {
            type: 'email',
            message: 'Por favor ingresa un email válido',
            trigger: 'blur'
        }
    ],
    asunto: [
        {
            required: true,
            message: 'Por favor selecciona un asunto',
            trigger: 'change'
        }
    ],
    mensaje: [
        {
            required: true,
            message: 'Por favor escribe tu mensaje',
            trigger: 'blur'
        },
        {
            min: 10,
            message: 'El mensaje debe tener al menos 10 caracteres',
            trigger: 'blur'
        }
    ]
};

//Funciones

// Función para enviar el formulario
const submitForm = (e: any) => {
    e.preventDefault();

    formRef.value?.validate(async (errors: any) => {
        if (errors) {
            message.error('Por favor completa correctamente todos los campos requeridos');
            return;
        }

        loading.value = true;

        try {
            // Simular envío del formulario
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Éxito
            message.success('¡Mensaje enviado con éxito! Te contactaremos pronto.');

            // Resetear formulario
            form.value = {
                nombre: '',
                email: '',
                telefono: '',
                asunto: '',
                mensaje: ''
            };

            // Resetear validación
            formRef.value?.restoreValidation();

        } catch (error) {
            message.error('Error al enviar el mensaje. Por favor intenta nuevamente.');
        } finally {
            loading.value = false;
        }
    });
};

//Funciones computadas

// Información de la sucursal seleccionada
const selectedBranchInfo = computed(() => {
    return branches.find(branch => branch.id === selectedBranch.value);
});

// Mapa de la sucursal seleccionada
const selectedBranchMap = computed(() => {
    return selectedBranchInfo.value?.mapEmbed || '';
});


</script>

<style scoped>
/* Personalización adicional para que coincida con tu diseño */
:deep(.n-form-item-label) {
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
}

:deep(.n-input) {
    border-radius: 0.5rem;
}

:deep(.n-button) {
    border-radius: 0.5rem;
    transition: all 0.3s;
}

:deep(.n-button--primary-type) {
    /* background-color: #ea580c; */
}

:deep(.n-button--primary-type):hover {
    /* background-color: #c2410c; */
}

:deep(.n-select) {
    border-radius: 0.5rem;
}

/* Efectos de transición suaves */
button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:active {
    transform: scale(0.98);
}

/* Mejora la apariencia del gradiente */
.bg-gradient-to-r {
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 0.5s ease;
}

button:hover.bg-gradient-to-r {
    background-position: left bottom;
}
</style>