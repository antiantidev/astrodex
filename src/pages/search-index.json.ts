import { getCollection } from 'astro:content';

export async function GET() {
  const docs = await getCollection('docs');
  const baseUrl = import.meta.env.BASE_URL;
  
  const docsIndex = docs
    .filter(d => !d.id.includes('project.metadata.md'))
    .map(doc => {
        const path = doc.id.replace(/\\/g, '/');
        const parts = path.split('/');
        const project = parts[0];
        const version = (parts.length >= 3 && parts[1].startsWith('v')) ? parts[1] : (doc.data.version || 'v1.0.1');
        
        const slug = parts.length >= 3 
            ? parts.slice(2).join('/').replace(/\.(md|mdx)$/, '')
            : parts[parts.length - 1].replace(/\.(md|mdx)$/, '');

        return {
            title: doc.data.title,
            description: doc.data.description,
            project: project,
            version: version,
            href: `${baseUrl}docs/${project}/${version}/${slug}`,
            content: doc.body
        };
    });

  const searchIndex = [...docsIndex];

  return new Response(JSON.stringify(searchIndex), {
    headers: { 'Content-Type': 'application/json' }
  });
}