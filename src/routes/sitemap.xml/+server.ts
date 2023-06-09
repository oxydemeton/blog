import { error } from "@sveltejs/kit";
const last_updated = "2021-06-09"
export const GET = async () => {
    const latest_post_url = new URL('https://blog.mabla.name/pb/api/collections/posts/records')
    latest_post_url.searchParams.set('page', '1')
    latest_post_url.searchParams.set('perPage', '100')
    latest_post_url.searchParams.set('sort', 'created')
    latest_post_url.searchParams.set('fields', 'created,id')
    let latest_post = undefined
    console.log(latest_post_url.href);
    
    try {
        const latest_post_raw  = await fetch(latest_post_url)
        if (!latest_post_raw.ok) throw error(500, 'DB error. Check:' + latest_post_url.href)
        latest_post = await latest_post_raw.json() as PostCreated
    } catch (e) {
        throw error(500, 'DB error. Check:' + latest_post_url.href)
    }
    
    if(latest_post ==  undefined || latest_post.items ==  undefined) {
        throw error(500, 'DB error. Check:' + latest_post_url.href)
    } else if (latest_post.items.length == 0 ) {
        throw error(500, 'DB error. Check:' + latest_post_url.href)
    } else if (!latest_post.items[0].created == undefined) {
        throw error(500, 'No created property found')
    }
    const latest_post_created = latest_post.items[0].created

    const posts = latest_post.items.map(generatePostSitemapEntry).join('\n')

    return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\
        <url>\
            <loc>https://blog.mabla.name/</loc>\
            <lastmod>${latest_post_created}</lastmod>\
            <changefreq>weekly</changefreq>\
        </url>\
        <url>\
            <loc>https://blog.mabla.name/privacy</loc>\
            <lastmod>${last_updated}</lastmod>\
        </url>\
        <url>\
            <loc>https://blog.mabla.name/projects</loc>\
            <lastmod>${last_updated}</lastmod>\
        </url>\
        <url>\
            <loc>https://blog.mabla.name/archive</loc>\
            <lastmod>${latest_post_created}</lastmod>\
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
        ${posts}\
    </urlset>`, {
        headers: {
            'content-type': 'application/xml'
        }
    })
};
type PostCreated = {
    items: {
        created: string,
        id: string
    }[]
}

function generatePostSitemapEntry(post: PostCreated['items'][0]) {
    return `<url>\
    <loc>https://blog.mabla.name/post/${post.id}</loc>\
    <lastmod>${post.created}</lastmod>\
   </url>`
}