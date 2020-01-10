import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { VclFacebook, VclInstagram } from 'vue-content-loading';
import atas from "@/components/atas.vue";
Vue.use(VueAxios, axios);

export default {
name: "about",
data: ()=>({
  	hasils:[],
	employes:String,
	key_cari:'',
	data:'',
	result: true,
	filed: false,
}),
components:{
	atas,
	VclFacebook,
    VclInstagram,
},
mounted(){

    Vue.axios.get("http://api-gateway-ext-prod-ue1-1080259533.us-east-1.elb.amazonaws.com/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=801b1e0446fb600018c5926549d8b856&page=2").then((response) =>
	{this.data = response.data;
		console.log(this.data)
	for(let [key, value] of Object.entries(this.data)){
		if( key == 'results'){
			this.hasils = value;
			console.log(value);
		}else{
			console.log("tidak ada object");
		}
	}
	});

	}
};