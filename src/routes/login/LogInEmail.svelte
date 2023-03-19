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
        <legend>Email Login</legend>
        <input type="email" name="email" id="login-email-mail" placeholder="Email address" bind:value={email}>
        <input type="password" id="login-email-password" placeholder="Password" minlength="4" bind:value={password}>
        <input type="submit" value="Login">
        <div>{detail_message}</div>
    </fieldset>
</form>