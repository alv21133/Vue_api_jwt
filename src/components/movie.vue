<template>
	<div class="movie" style="margin-top:90px">
		<atas logo="GoodJob" ></atas>
				<div class="container">
					<div v-show="hasils.length < 20 " class="row">
						<div class="col-md-4">
					<vcl-facebook></vcl-facebook></div>
						<div class="col-md-4">
					<vcl-facebook></vcl-facebook></div>
						<div class="col-md-4">
					<vcl-facebook></vcl-facebook></div>
					</div>
		<div class="row ">
			<div v-for="(hasil, i) in hasils" :key="i">
					<div class=" card col-md-11 text-center" style="margin-left: 15px">
						<div v-if="hasil.id != '' " >
								<h3>{{hasil.original_title}}</h3>
							<img v-bind:src="'https://image.tmdb.org/t/p/w500/'+hasil.poster_path" width="230">
						</div>
					</div>
				<br><br><br>
			</div>
		</div>
	</div>
	</div>
</template>
<script src="../js/movie.js" ></script>