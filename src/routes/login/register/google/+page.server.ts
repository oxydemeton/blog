import { pb } from '$lib/pocketbase';
import { redirect } from '@sveltejs/kit';

export async function load({url,cookies}) {
        const authMethods = await pb.collection('users').listAuthMethods();
        //console.log("authmethods", authMethods);
        if (!authMethods) {
            return {
                authProviderRedirect: '',
                authProviderState: ''
            };
        }
        const redirectURL = `${url.origin}/login/oauth/google`;
        const googleAuthProvider = authMethods.authProviders[0];
        const authProviderRedirect = `${googleAuthProvider.authUrl}${redirectURL}`;
        const state = googleAuthProvider.state;
        const verifier = googleAuthProvider.codeVerifier

        cookies.set('state',state, {path: '/'});
        cookies.set('verifier',verifier, {path: '/'});
        console.log("Pre redirect"+cookies.get('state'));
        
        throw redirect(302,authProviderRedirect)
    }