import {z, defineCollection} from 'astro:content';

const featuresCollection = defineCollection({
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = {
    'features': featuresCollection,
};

// https://blog.damato.design/posts/dynamic-collections/
// import path from 'path';
// import { z, defineCollection } from 'astro:content';
// const glob = import.meta.glob('./**'); /* vite */

// export const collectionNames = Object.keys(glob).map((filepath) => path.basename(path.dirname(filepath)));

// const schema = {
//   schema: z.object({
//     title: z.string()
//   })
// };

// function assignCollection(acc, name) {
//   return Object.assign(acc, { [name]: defineCollection({ ...schema }) });
// }

// export const collections = collectionNames.reduce(assignCollection, {});
