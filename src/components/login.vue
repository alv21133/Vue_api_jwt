<template>
	<div class="login">
		<atas logo="GoodJob" ></atas>
		<div class="container">
			<input v-model="email" type="email"   placeholder="name">
			<input v-model="key"   placeholder="password">
			<button v-on:click="login()" >Login</button>
		</div>
		<p>{{token}}</p>
		<div v-if="token" class="jumbotron jumbotron-fluid">
			<div class="container">
				<h1 class="display-1 text-center">Selamat  !!! </h1>
				<p class="lead text-center">Kamu berhasil login  Menggunakan jwt</p>
			</div>
		</div>
	</div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from 'vue-cookies'
import qs from 'qs';
import atas from "@/components/atas.vue";
Vue.use(VueAxios, axios);
Vue.use(VueCookies);

export default {
		name: "login",
		data:() => ({
			email:'',
			key:'',
			hasil:String,
			token:'',
			page: Boolean,
		}),
		components:{
		atas
		},

		methods:{



				login(){

					// console.log(this.email);
					// console.log(this.key);

					console.log(this.email);
					console.log(this.key);

					let dataq = {'username': this.email, 'password' : this.key}
					Vue.axios({
							method : 'POST',
							url:'http://192.168.0.132:3000/login',
							data: qs.stringify(dataq),
							headers:{

								'Content-Type': 'application/x-www-form-urlencoded',
								//'Accept' : 'application/json',
  								//'Authorization' : 'Bearer <token_here>'
							}
					}).then((response)=>{
						this.hasil= response.data;
						console.log(this.hasil);
						Vue.$cookies.set("kunci", this.hasil.token, "50s");
						//console.log(Vue.$cookies.get("kunci"));
						this.token=Vue.$cookies.get("kunci")

					});

						// ================menggnakan es6=====================
						// const data = { 'email': this.email, 'password': this.key };
						// const options = {
						// method: 'POST',
						// headers: {
						// 			'Content-Type': 'application/x-www-form-urlencoded',
						// 		 },
						// data: qs.stringify(data),
						// url:'http://192.168.0.102:8000/api/guru/login',
						// };
						// axios(options).then((response)=>{

						// 	this.hasil= response.data

						// 	console.log(this.hasil)

						// });


				},



		},

		mounted(){

				this.token = document.cookie;
				console.log(this.token)
		}

}

</script>


