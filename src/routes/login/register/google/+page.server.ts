import { pb } from '$lib/pocketbase';
import { redirect } from '@sveltejs/kit';

export async function load({url,cookies}) {
        const authMethods = await pb.collection('users').listAuthMethods();
        if (!authMethods) {
            return {};
        }
        const redirectURL = `${url.origin}/login/oauth/google`;
        const googleAuthProvider = authMethods.authProviders[0];
        const authProviderRedirect = `${googleAuthProvider.authUrl}${redirectURL}`;
        const state = googleAuthProvider.state;
        const verifier = googleAuthProvider.codeVerifier

        cookies.set('state',state, {path: '/'});
        cookies.set('verifier',verifier, {path: '/'});
        
        throw redirect(302,authProviderRedirect)
    }