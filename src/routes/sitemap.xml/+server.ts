import { error } from "@sveltejs/kit";
const last_updated = "2021-06-09"
export const GET = async () => {
    const latest_post_url = new URL('https://blog.mabla.name/pb/api/collections/posts/records?page=1&perPage=1&sort=created&fields=created')
    latest_post_url.searchParams.set('page', '1')
    latest_post_url.searchParams.set('perPage', '1')
    latest_post_url.searchParams.set('sort', 'created')
    latest_post_url.searchParams.set('fields', 'created')
    const latest_post = await (await fetch(latest_post_url)).json() as PostCreated[]
    if(latest_post.length < 1) {
        throw error(404, 'No posts found')
    }else if (!latest_post[0].hasOwnProperty("created")) {
        throw error(500, 'No created property found')
    }
    return new Response(`\
    <?xml version="1.0" encoding="UTF-8"?>\
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\
        <url>\
            <loc>https://blog.mabla.name/</loc>\
            <lastmod>${latest_post[0].created}</lastmod>\
            <changefreq>weekly</changefreq>\
        </url>\
        <url>\
            <loc>https://blog.mabla.name/about</loc>\
            <lastmod>${last_updated}</lastmod>\
        </url>\
        <url>\
            <loc>https://blog.mabla.name/privacy</loc>\
            <lastmod>${last_updated}</lastmod>\
        </url>\
        <url>\
            <loc>https://blog.mabla.name/projects</loc>\
            <lastmod>${last_updated}9</lastmod>\
        </url>\
        <url>\
            <loc>https://blog.mabla.name/archive</loc>\
            <lastmod>${latest_post[0].created}</lastmod>\
        </url>\
        <url>\
            <loc>https://blog.mabla.name/login</loc>\
            <lastmod>${last_updated}</lastmod>\
        </url>\
        <url>\
            <loc>https://blog.mabla.name/login/register/email</loc>\
            <lastmod>${last_updated}</lastmod>\
        </url>\
        <url>\
            <loc>https://blog.mabla.name/search</loc>\
            <lastmod>${last_updated}</lastmod>\
        </url>\
        <url>\
            <loc>https://blog.mabla.name/changes</loc>\
            <lastmod>${last_updated}</lastmod>\
        </url>\
    </urlset>\
    `)
};
type PostCreated = {
    created: string
}