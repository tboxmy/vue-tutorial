<template>
  <div class="col-md-3"></div>
  <div class="col-md-6">

      <div class="card card-container">        
        <Form >
          <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
          <div class="form-group">
            <label for="title">Username</label>
            <input type="text"
              class="form-control"
              id="email" name="email"   
            />
          </div>
          <div class="form-group">
            <label for="title">Password</label>
            <input type="password"
              class="form-control"
              id="password" name="password"   
            />
          </div>
          
          <button  class="btn btn-success">Login</button>
          
          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
        </Form>
      </div>
   <div class="col-md-3"></div>
  </div>
</template>

<script>

export default {  
  name: 'Login'}

</script>
