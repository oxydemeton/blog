<script lang="ts">
    import {pb} from "$lib/pocketbase"
    let reset_email = ""
    function resetPassword() {
        pb.collection('users').requestPasswordReset(reset_email);
    }
</script>

<form on:submit={resetPassword}>
    <fieldset>
        <legend>Reset Password</legend>
        <input type="email" name="reset_email" id="login-email-reset-mail" placeholder="Email address" bind:value={reset_email} aria-label="Email of account to send reset mail.">
        <input type="submit" value="Reset Password">
    </fieldset>
</form>
<a href="/login/email">Zurück zur Anmeldung</a>