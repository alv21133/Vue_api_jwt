<template>
	<div class="login" style="margin-top:90px">
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
				<button v-on:click="get()">Get data</button>
			</div>
		</div>

		<div class="d-flex flex-row-reverse bd-highlight" id="berita" >

			<div class="btn-group btn-group-lg">
				<button  v-on:click="text1()" type="button" class="btn btn_berita active">Apple</button>
				<button v-on:click="text2()" type="button" class="btn btn_berita">Samsung</button>
				<button  v-on:click="text1()" type="button" class="btn btn_berita ">Sony</button>
			</div>

		</div>
		<div v-show="togle1" class="mt-4">
				<p>Lorem ipsum dolor sit, io consequuntur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque unde atque natus sed! Temporibus, voluptatum aut voluptas, illum repellat harum expedita commodi cumque dolores dolorem enim, odit nam in.</p>
		</div>
		<div v-show="togle2" class="mt-4">
			<p>akarta, CNN Indonesia -- Tentara Nasional Indonesia baru saja menyatakan siaga tempur di wilayah perairan Kepulauan Natuna dan sekitarnya. Sikap itu diambil tak lepas dari gelagat China yang mengklaim berdaulat di perairan tersebut sehingga kapal-kapalnya bebas berlayar.</p>
		</div>
		<div v-show="togle3" class="mt-4">
				<p>Google + Google+ atau Google Plus adalah jejaring sosial yang dioperasikan oleh Google Inc. Google+ diluncurkan pada 28 Juni 2011 dengan sistem undangan untuk diuji coba.</p>
		</div>

	</div>
</template>
<style>
	.btn_berita{
		background-color: beige;
		color: black;


	}

	.active,.btn_berita:hover{
		background-color: gold;
		color: black;
	}
.btn_berita:focus,.btn_berita:active {
   outline: none !important;
   box-shadow: none;
}
</style>
<script src="../js/login.js"></script>


