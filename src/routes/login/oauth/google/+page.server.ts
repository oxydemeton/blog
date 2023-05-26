import type { User } from '$lib/DbInterfaces';
import { pb, currentUser } from '$lib/pocketbase';
import { redirect } from '@sveltejs/kit';


export const load = async ({ url, cookies, }) => {
    //console.log(url.searchParams);
    const redirectURL = `${url.origin}/login/oauth/google`;
    const expectedState = cookies.get('state');
    const expectedVerifier = cookies.get('verifier');

    //console.log('expected',expectedState)

    const state = await url.searchParams.get('state');
    const code = await url.searchParams.get('code');

    //console.log('returned state',state)
    //console.log('returned code',code)

    //as a side effect this will generate a new code verifier, hence why we need to pass the verifier back in through the cookie
    const authMethods = await pb.collection('users').listAuthMethods();

    
    if (!authMethods?.authProviders) {
        throw redirect(303, '/');
    }
    const provider = authMethods.authProviders[0];
    if (!provider) {
        throw redirect(303, '/');
    }

    if (expectedState !== state) {
        throw redirect(303, '/');
    }

    try {
        await pb.collection('users')
            .authWithOAuth2Code(provider.name, code!, expectedVerifier! , redirectURL);
        
    } catch (err) {
        console.log('Error logging in with OAuth2 user: ', err);
    }
    const id = pb.authStore.model?.id;
    if (id) {
        console.log("User identified as: " + id);
        pb.autoCancellation(false);
        const usr = await pb.collection('users').getOne(id, {expand: 'comments(creator).post'}) as unknown as User
        pb.autoCancellation(true);   
        cookies.set('user', pb.authStore.exportToCookie(), { path: '/' });
    }
    throw redirect(303, '/');
};