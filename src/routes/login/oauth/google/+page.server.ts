import type { User } from '$lib/DbInterfaces';
import { pb, currentUser } from '$lib/pocketbase';
import { error, redirect } from '@sveltejs/kit';


export const load = async ({ url, cookies, }) => {
    const redirectURL = `${url.origin}/login/oauth/google`;
    const expectedState = cookies.get('state');
    const expectedVerifier = cookies.get('verifier');

    const state = await url.searchParams.get('state');
    const code = await url.searchParams.get('code');
    const authMethods = await pb.collection('users').listAuthMethods();

    if(state == undefined || code == undefined) {
        throw error(428, "No Google Logging started.")
    }
    
    if (!authMethods?.authProviders) {
        throw error(503, 'No auth providers available');
    }
    const provider = authMethods.authProviders.filter((p) => p.name === 'google')[0];
    if (!provider) {
        throw error(503, 'No Google auth provider available');
    }

    if (expectedState !== state) {
        throw error(409, 'State Mismatch');
    }

    try {
        await pb.collection('users')
            .authWithOAuth2Code(provider.name, code!, expectedVerifier! , redirectURL);
        
    } catch (err) {
        console.log('Error logging in with OAuth2 user: ', err);
        throw error(500, 'Error logging in with OAuth2 user');
    }
    const id = pb.authStore.model?.id;
    if (id) {
        cookies.set('user', pb.authStore.exportToCookie(), { path: '/' });
    }
    throw redirect(301, '/profile');
};