import { pb } from '$lib/pocketbase';
import { error, redirect } from '@sveltejs/kit';

export async function load({url,cookies}) {
        const authMethods = await pb.collection('users').listAuthMethods();
        if (!authMethods) {
            return {};
        }
        const origin = url.origin.replace("http://","https://").replace("127.0.0.1:3000", "blog.mabla.name")
        const redirectURL = `${origin}/login/oauth/google`;
        
        const googleAuthProvider = authMethods.authProviders[0];
        const authProviderRedirect = `${googleAuthProvider.authUrl}${redirectURL}`;
        const state = googleAuthProvider.state;
        const verifier = googleAuthProvider.codeVerifier

        cookies.set('state',state, {path: '/'});
        cookies.set('verifier',verifier, {path: '/'});
        
        throw redirect(302,authProviderRedirect)
    }