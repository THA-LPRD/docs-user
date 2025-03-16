// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

const dir_usage_op_mode_standalone_network = {
    label: 'Standalone and Network',
    translations: {
        de: 'Standalone und Network',
    },
    items: [
        {
            label: 'Installation',
            slug: 'guides/usage/op-mode/standalone-network/installation',
            translations: {
                de: 'Installation',
            },
        },
        {
            label: 'User Interface',
            slug: 'guides/usage/op-mode/standalone-network/user-interface',
            translations: {
                de: 'Benutzteroberfläche',
            },
        },
        {
            label: 'Settings',
            slug: 'guides/usage/op-mode/standalone-network/settings',
            translations: {
                de: 'Einstellungen',
            },
        },
    ],
}

const dir_usage_op_mode_server = {
    label: 'Server',
    translations: {
        de: 'Server',
    },
    items: [
        {
            label: 'Installation',
            slug: 'guides/usage/op-mode/server/installation',
            translations: {
                de: 'Installation',
            },
        },
        {
            label: 'Configuration',
            slug: 'guides/usage/op-mode/server/configuration',
            translations: {
                de: 'Konfiguration',
            },
        },
        {
            label: 'User Interface',
            slug: 'guides/usage/op-mode/server/user-interface',
            translations: {
                de: 'Benutzteroberfläche',
            },
        },
    ],
}

const dir_usage = {
    label: 'Usage',
    translations: {
        de: 'Verwendung',
    },
    items: [
        {
            label: 'Operating Modes',
            translations: {
                de: 'Betriebsmodi',
            },
            items: [
                dir_usage_op_mode_standalone_network,
                dir_usage_op_mode_server,
            ],
        },
    ],
}

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
                items: [
                    {
                        label: 'Getting Started',
                        slug: 'guides/getting-started',
                        translations: {
                            de: 'Erste Schritte',
                        },
                    },
                    dir_usage,
                ],
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