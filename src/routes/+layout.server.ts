
export async function load({cookies, url}) {
    const usr = cookies.get('user')
    return {
        usr: usr
    }
}