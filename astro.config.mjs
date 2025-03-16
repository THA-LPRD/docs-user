// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: {
            en: 'Docs with Tailwind and React',
            de: 'Dokumentation mit Tailwind und React',
        },
        tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
        editLink: {
            baseUrl: 'https://github.com/THA-LPRD/docs-user/edit/main/',
        },
        social: {
            github: 'https://github.com/THA-LPRD',
        },
        sidebar: [
            {
                label: 'Guides',
                translations: {
                    de: 'Anleitungen',
                },
                autogenerate: { directory: 'guides' },
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
		],
        customCss: [
            '@fontsource-variable/inter-tight',
            '@fontsource-variable/roboto-mono',
            './src/styles/global.css',
        ],
        lastUpdated: true,
        pagination: false,
        defaultLocale: 'root',
        locales: {
            // English docs in `src/content/docs/`
            root: {
                label: 'English',
                lang: 'en',
            },
            // German docs in `src/content/docs/de/`
            de: {
                label: 'Deutsch',
                lang: 'de',
            },
        },
        }),
        react()
    ],
    trailingSlash: 'never',
    vite: {
        plugins: [tailwindcss()],
    },
    site: 'https://tha-lprd.github.io',
    base: 'docs-user',
});