import {defineConfig} from 'astro/config';

// integrations
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

import AutoImport from 'astro-auto-import';
import MDXCodeBlocks, {mdxCodeBlockAutoImport} from 'astro-mdx-code-blocks';

// https://astro.build/config
export default defineConfig({
    integrations: [
        AutoImport({
            imports: [mdxCodeBlockAutoImport('src/components/CodeBlock.astro')],
        }),
        MDXCodeBlocks(),
        mdx(),
        react(),
    ],
    experimental: {
        viewTransitions: true,
    },
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            langs: ['html', 'css', 'js'],
            wrap: true,
        },
    },
});
