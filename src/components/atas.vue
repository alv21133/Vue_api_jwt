<template>
  <div id="atas">
      <!-- navbar -->
      <div style="z-index:99;position:fixed; width:100%">
        <div id="nav">
          <div class="row justify-content-between bg-light" >
              <div class="col-md-4 offset-md-1" style="padding-top:6px">
                  <p>Pasang Lowongan | ikuti kami </p>
              </div>
              <div class="col-md-4 offset-md-1" style="padding-top:6px">
                  <p>Tentang GoodJob |  Pusat Bantuan</p>
              </div>
          </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
             <a class="navbar-brand" href="#">{{logo}}</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                <router-link  class="nav-link"  to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link  class="nav-link"  to="/about">Karyawan</router-link>
                </li>
                <li class="nav-item">
                  <router-link  class="nav-link"  to="/movie">Movie</router-link>
                </li>
                <li class="nav-item">
                  <router-link  class="nav-link"  to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                  <router-link  class="nav-link"  to="/masukan">form</router-link>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="cari" type="search" placeholder="Cari" >
                <input class="cari2" type="search" placeholder="Cari" >
                <input class="cari3" type="search" placeholder="Cari" >
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </div>
        <!-- <hr class="garis" > -->
        </div>
    <!-- navbar -->
  </div>
</template>
<script>
export default {
    name  : "atas",
    props :{
      logo: String,
    }
}
</script>

<style scoped src="@/assets/css/home.css" >

</style>