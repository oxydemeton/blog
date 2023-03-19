<script>
    import {currentUser, pb} from "../../lib/pocketbase"
    async function login() {
        await pb.collection('users').authWithPassword(email, password)
    }
    let email = ""
    let password = ""
</script>

<form on:submit={login}>
    <fieldset disabled={$currentUser != undefined}>
        <legend>Email Login</legend>
        <input type="email" name="email" id="login-email-mail" placeholder="Email address" bind:value={email}>
        <input type="password" id="login-email-password" placeholder="Password" minlength="4" bind:value={password}>
        <input type="submit" value="Login">
    </fieldset>
</form>