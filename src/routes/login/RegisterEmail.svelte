<script>
    import {currentUser, pb} from "../../lib/pocketbase"
    async function register() {
        if (password != passwordConfirm) {
            detail_message = "Passwords don't match"
            return;
        }
        await pb.collection('users').create({
            name: username,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm 
        })
    }
    let username = ""
    let email = ""
    let password = ""
    let passwordConfirm = ""
    let detail_message = ""
</script>

<form on:submit={register}>
    <fieldset disabled={$currentUser != undefined}>
        <legend>Email Login</legend>
        <input type="text" name="username" id="register-email-username" placeholder="Username" bind:value={username} aria-label="New Username">
        <input type="email" name="email" id="register-email-mail" placeholder="Email address" bind:value={email} aria-label="New Email address">
        <input type="password" id="register-email-password" placeholder="Password" minlength="4" bind:value={password} aria-label="New Password">
        <input type="password" id="register-email-confim-password" placeholder="Confirm Password" minlength="4" bind:value={passwordConfirm} aria-label="Confirm Password">
        <input type="submit" value="Login">
        <div>{detail_message}</div>
    </fieldset>
</form>