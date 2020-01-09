<template>
  <div class="about">
   <atas logo="GoodJob"></atas>
    <h1 style="margin-top:90px">Data Karyawan</h1>

    <!-- carousel -->
  <div class="container ">
    <!--Carousel Wrapper-->
    <div class="row">
      <div class="col-md-8">
        <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
        <!--Slides-->
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <a target="_blank" href="https://mdbootstrap.com/img/Photos/Slides/img (88).jpg">
                  <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" alt="First slide">
                </a>
              </div>
              <div class="carousel-item">
                <a target="_blank" href="https://mdbootstrap.com/img/Photos/Slides/img (121).jpg">
                  <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" alt="Second slide">
                </a>
              </div>
              <div class="carousel-item">
                <a target="_blank" href="https://mdbootstrap.com/img/Photos/Slides/img (31).jpg">
                  <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide">
                </a>
              </div>
            </div>
          </div>
        <!--Controls-->
          <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
<!-- priview dari gambar-->
        <ol class="priview">
            <li data-target="#carousel-thumb" data-slide-to="0" class="active priview-image "> <img class="d-block w-600 image-fluid" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg"></li>
            <li data-target="#carousel-thumb" data-slide-to="1" class="priview-image"><img class="d-block w-600 image-fluid" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg"></li>
            <li data-target="#carousel-thumb" data-slide-to="2" class="priview-image"><img class="d-block w-600 image-fluid" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg"></li>
        </ol>
    </div>
    <div class="col-md-4">
        <h1>Werkudara Net</h1>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae asperiores molestiae porro necessitatibus modi minus nobis libero ipsa et earum voluptatum totam veniam laboriosam explicabo possimus, doloremque quo ea?

      
    </div>
  </div>
<!--/.Controls-->

      <!--/.Slides-->

    <!--/.Carousel Wrapper-->
    <div style="margin:8rem"></div>
    <div class="container">
      <p>
      Masukan ID <input v-model="key_cari" type="search" style="border-radius:20px" id="cari">
      <button v-on:click="cari()" style="margin-left:10px; border-radius:5px">Cari</button>
      </p>
      <br>
      <br>
      <br>
          <div v-show="this.filed == true" >
              <h3 class="card text-center ">Data Yang anda Cari Tidak Ditemukan</h3>
              <br>
              <h4>Berikut Semua Data Kami : </h4><br>
          </div>
            <div v-show="this.result == false">
                  <div class="row">
                  <div>
                    <div style="margin-right:25px">
                        <div class=" card col-md-12" >
                          <p>ID : {{employes.id}}</p>
                          <p>Nama : {{employes.employee_name}}</p>
                          <p>Gaji : {{employes.employee_salary}}</p>
                        </div>
                        <br><br><br>
                    </div>
                  </div>
              </div>
            </div>
                <div v-show="this.result== true"   class="row">
                  <div v-for="(hasil, i) in hasils" :key="i">
                    <div style="margin-right:25px">
                        <div class=" card col-md-12" >
                          <p>ID : {{hasil.id}}</p>
                          <p>Nama : {{hasil.employee_name}}</p>
                          <p>Gaji : {{hasil.employee_salary}}</p>
                        </div>
                        <br><br><br>
                    </div>
                  </div>
              </div>
              <div v-show="this.result== false" >
                  <p>

                  </p>
              </div>
        /div>
      </div>
  </div>
</div>

</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import atas from "@/components/atas.vue";
Vue.use(VueAxios, axios);
export default {
  name: "about",
  data:()=>({
      hasils:[],
      employes:String,
      key_cari:'',
      result: true,
      filed: false

  }),
  components: {
      atas
  },

  methods:{
        cari(){
            console.log(this.key_cari);
            Vue.axios.get(`http://dummy.restapiexample.com/api/v1/employee/`+ this.key_cari).then((response) =>
            {
                this.employes = response.data;
                if(this.employes.length > 30000){
                console.log("tidak ada data")
                console.log(this.employes.length)
                this.result = true;
                this.filed = true;
                }else{
                console.log(this.employes);
                this.result = false;
                this.key_cari= " ";
                this.filed = false;
              }
            })

        }
  },

  mounted(){
    Vue.axios.get("http://dummy.restapiexample.com/api/v1/employees").then((response) =>
    {this.hasils = response.data});
  }
}
</script>

<style >

.priview{
  position: relative;
  top: 25px;
}

.priview-image{
  display: inline-flex;
  margin-right: 5px;
  margin-left: 5px;
}


</style>