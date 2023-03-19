<script>
    import {currentUser, pb} from "../../lib/pocketbase"
    async function login() {
        pb.collection('users').authWithPassword(email, password)
            .catch(()=>{
                detail_message = "Login Failed. Pleas try again!"
            }).then(()=> {
                if(!pb.authStore.isValid) {
                    pb.authStore.clear()
                    detail_message = "Login Failed. Pleas try again!"
                    console.debug("pb.authStore.isValid == false");
                }else {
                    password = ""
                    email = ""
                }
            })
    }
    let email = ""
    let password = ""
    let detail_message = ""
</script>

<form on:submit={login}>
    <fieldset disabled={$currentUser != undefined}>
        <legend>Email/Username Login</legend>
        <input type="text" name="email" id="login-email-mail" placeholder="Email/Username" bind:value={email} aria-label="Username or Email address">
        <input type="password" id="login-email-password" placeholder="Password" minlength="4" bind:value={password} aria-label="Password">
        <input type="submit" value="Login">
        <div>{detail_message}</div>
    </fieldset>
</form>