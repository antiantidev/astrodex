import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		project: z.string(),
		version: z.string().default('v1.0'),
		status: z.enum(['stable', 'beta', 'alpha', 'deprecated']).default('stable'),
		order: z.number().optional().default(0),
        lastUpdated: z.date().optional(),
		contributors: z.array(z.object({
			username: z.string(),
			role: z.string().default('Contributor')
		})).optional(),
	}),
});

export const collections = { docs };