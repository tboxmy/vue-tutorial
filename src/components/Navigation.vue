<template>
<div class="row">
<div class="NavbarPage hold-transition sidebar-mini layout-fixed">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">


            <router-link to="/" class="navbar-brand">HOME</router-link>
      <div class="navbar-nav mr-auto">

        

        <li class="nav-item">
          <router-link to="/products" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/login" class="nav-link">Logout</router-link></li>
            <li><router-link to="/profile"  class="nav-link">Profile</router-link></li>
        </ul>
        </li>
      </div>

      

          
        </div>
        </nav>
</div>
</div>
</template>
<script>

</script>