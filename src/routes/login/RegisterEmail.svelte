<script>
    import {currentUser, pb} from "../../lib/pocketbase"
    async function register() {
        if (password != passwordConfirm) {
            detail_message = "Passwords don't match"
            return;
        }
        pb.collection('users').create({
            username: username,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm 
        }).catch(()=>{
                detail_message = "Registration Failed. Pleas try again!"
            }).then(()=> {
                pb.collection('users').authWithPassword(email, password)
                .catch(()=>{
                detail_message = "Login Failed. Pleas try again!"
            }).then(()=> {
                if(!pb.authStore.isValid) {
                    pb.authStore.clear()
                    detail_message = "Login Failed. Pleas try again!"
                    console.debug("pb.authStore.isValid == false");
                }else {
                    detail_message = ""
                    password = ""
                    email = ""
                }
            })
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
        <input minlength="3" type="text" name="username" id="register-email-username" placeholder="Username" bind:value={username} aria-label="New Username">
        <input type="email" name="email" id="register-email-mail" placeholder="Email address" bind:value={email} aria-label="New Email address">
        <input type="password" id="register-email-password" placeholder="Password" minlength="4" bind:value={password} aria-label="New Password">
        <input type="password" id="register-email-confim-password" placeholder="Confirm Password" minlength="4" bind:value={passwordConfirm} aria-label="Confirm Password">
        <input type="submit" value="Login">
        <div>{detail_message}</div>
    </fieldset>
</form>