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
			togle1: true,
			togle2: false,
			togle3: false,
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
							url:'http://192.168.0.100:3000/login',
							data: qs.stringify(dataq),
							headers:{

								'Content-Type': 'application/x-www-form-urlencoded',
								// 'Authorization': "bearer " + token
								//'Accept' : 'application/json',
  								//'Authorization' : 'Bearer <token_here>'
							}
					}).then((response)=>{
						this.hasil= response.data;
						console.log(this.hasil);
						Vue.$cookies.set("kunci", this.hasil.token, "180s");
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


			check_cookie_name()

				{
					var value = document.cookie;
					var parts = value.split("; " + name + "=");
					if (parts.length == 2) return parts.pop().split(";").shift();
   				},

			get(){

				let key_token = document.cookie.replace(/(?:(?:^|.*;\s*)kunci\s*=\s*([^;]*).*$)|^.*$/, "$1");

				let request = {

					method : 'GET',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Authorization' : 'Bearer ' + key_token
					},
					url:'http://192.168.0.100:3000/blog',

				};

					axios(request).then((response)=>{
						console.log(response.data)
					})
			},


			text1(){
				this.togle1= true;
				this.togle2= false;
				this.togle3= false;
			},
			text2(){
				this.togle1= false;
				this.togle2= true;
				this.togle3= false;
			},
			text3(){
				this.togle1= false;
				this.togle2= false;
				this.togle3= true;
			}



		},

		mounted(){

				this.token = document.cookie;
				console.log(this.token)

				//  tombol active
				var btnContainer = document.getElementById("berita");

				// Get all buttons with class="btn" inside the container
				var btns = btnContainer.getElementsByClassName("btn_berita");

				// Loop through the buttons and add the active class to the current/clicked button
				for (var i = 0; i < btns.length; i++) {
				btns[i].addEventListener("click", function() {
					var current = document.getElementsByClassName("active");
					current[0].className = current[0].className.replace(" active", "");
					this.className += " active";
				});
}

		}

}
