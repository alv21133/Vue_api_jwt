<template>
  <div class="about">
   <atas logo="GoodJob" ></atas> 
    <h1>Data Karyawan</h1>
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