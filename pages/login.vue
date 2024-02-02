<script setup lang="ts">
   definePageMeta({
    middleware:'auth',
        auth: {
          unauthenticatedOnly: true,
          navigateAuthenticatedTo: '/',
        },
})

</script>

<template>

<div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">

        <div class="card">
          <div class="card-header">
            <h3 class="text-center">Login</h3>
          </div>
          <div class="card-body">
            <form action="#" method="post">
              <div class="mb-3">
                <label for="username" class="form-label">Username:</label>
                <input type="text" class="form-control" id="username" name="username" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" class="form-control" id="password" name="password" required>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-primary btn-block">Login</button>
              </div>
            </form>

            <GithubLogin/>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>