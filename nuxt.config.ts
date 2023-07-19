// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    typescript: {
        shim: false,
        typeCheck: true,
    },
    app: {
        head: {
            link: [{ rel: 'stylesheet', href: '' }],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },

    // nitroConfifs added in 07/19/23 - 18:32 AM - Leonhard
    nitro: {
        plugins: [
            '~/server/mongoose_database/connect.ts',
        ],
        serverAssets: [
            {
                baseName: '',
                dir: 'assets',
            }
        ]
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    modules: [
        '@pinia/nuxt',
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },

    runtimeConfig: {
        MONGO_API: {
            secret: {
                URL: process.env.MONGODB_URL || 'mongodb://localhost',
            }
        }
    },
})
