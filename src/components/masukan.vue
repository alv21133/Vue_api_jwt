<template>
	<div class="masukan">
		<atas logo="GoodJob"></atas>
		<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
					<img src="https://i1.wp.com/analyticsindiamag.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg?fit=1200%2C675&ssl=1" class="d-block w-100" alt="">
					</div>
					<div class="carousel-item">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp5mBxnhOjLzpFZzTw-ASQHIBMSG46465JsqWj3nfGNhIii1Qm" class="d-block w-100" alt="">
					</div>
					<div class="carousel-item">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScATTM1fbwEp62l1XaryMnubW2bEocTJsuHJzTj5XtSjXcXKBl" class="d-block w-100" alt="">
					</div>
				</div>
						<a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev" style="margin-top:30%">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next" style="margin-top:30%">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>

				<!-- card counter -->
				<div class="container " >
				<div class="row" style="z-index:29; position: relative;bottom:80px">
						<div class="col-md-3 text-center card card-rounded">
							<div class="card">
								<img src="" class="card-img-top" alt="">
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Go somewhere</a>
								</div>
								</div>
						</div>
						<div class="col-md-3 text-center card card-rounded">
							<div class="card">
									<img src="" class="card-img-top" alt="">
									<div class="card-body">
										<h5 class="card-title">Card title</h5>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" class="btn btn-primary">Go somewhere</a>
									</div>
									</div>
						</div>
						<div class="col-md-3 text-center card card-rounded">
							<div class="card">
								<img src="" class="card-img-top" alt="">
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Go somewhere</a>
								</div>
								</div>
						</div>
						<div class="col-md-3 text-center card card-rounded">
							<div class="card">
									<img src="" class="card-img-top" alt="">
									<div class="card-body">
										<h5 class="card-title">Card title</h5>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" class="btn btn-primary">Go somewhere</a>
									</div>
									</div>
						</div>

					</div>
				</div>
				<div class="jumbotron jumbotron-fluid" style="position:relative; bottom:180px;">
					<br>
						<br>
						<br>
						<br>
						<br>
						<br>
					<div class="container">
						<h1 class="display-9">Fluid jumbotron</h1>
						<p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
					</div>
					<div class=" container fun-fact-area" style="z-index:29; margin_top:120px">
        </div>
	</div>

<div class="container" style="z-index:35; position:relative; bottom:280px" >
                <div class="row">
                    <div class="col-lg-12">
                       <!-- fun fact wrapper -->
                    <div class="fun-fact-wrapper fun-fact-wrapper-bg bg-img" data-bg="assets/img/backgrounds/funfact-bg-1.jpg" style="background-image: url(&quot;assets/img/backgrounds/funfact-bg-1.jpg&quot;);">
                            <div class="fun-fact-inner background-color--default-overlay background-repeat--x-bottom space__inner--y30 bg-img" data-bg="assets/img/icons/ruler-black.png" style="border-radius: 5px; background-image: url(&quot;assets/img/icons/ruler-black.png&quot;);">
                                <div class="fun-fact-content-wrapper">
                                    <div class="single-fun-fact">
                                        <h3 class="single-fun-fact__number counter">985</h3>
                                        <h4 class="single-fun-fact__text">Projects</h4>
                                    </div>
                                    <div class="single-fun-fact">
                                        <h3 class="single-fun-fact__number counter">529</h3>
                                        <h4 class="single-fun-fact__text">Clients</h4>
                                    </div>
                                    <div class="single-fun-fact">
                                        <h3 class="single-fun-fact__number counter">888</h3>
                                        <h4 class="single-fun-fact__text">Success</h4>
                                    </div>
                                    <div class="single-fun-fact">
                                        <h3 class="single-fun-fact__number counter">100</h3>
                                        <h4 class="single-fun-fact__text">Awards</h4>
                                    </div>
                                    <div class="single-fun-fact">
                                        <h3 class="single-fun-fact__number counter">100</h3>
                                        <h4 class="single-fun-fact__text">Awards</h4>
                                    </div>
                                    <div class="single-fun-fact">
                                        <h3 class="single-fun-fact__number counter">100</h3>
                                        <h4 class="single-fun-fact__text">Awards</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<div class=" container  col-xs-12">
				<div class="row  form-row" v-for="(row,r) in rows" :key="r">
					<div class="col-xs-12">
						<div class="row">
							<div class="col-xs-12">
								<div class="col-xs-3">
									<select name="" id=""   class="form-control" v-model="row.select">
											<option v-for="(opsi , q) in options" :key="q"  :value="opsi.value" >{{opsi.label}}</option>
									</select>
								</div>
								<div class="col-xs-6">
									<input type="text" class="form-control" placeholder="Value" v-model="row.select">
								</div>
								<div class="col-xs-2">
									<input type="checkbox" v-model="row.check">&nbsp;&nbsp;Mandatory
								</div>
								<div class="col-xs-1">
									<button class="btn btn-danger" @click="deleteRow(row)">hapus</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<button type="submit" v-on:click="submit()" class="btn btn-info">Submit</button>
						<button type="submit" class="btn btn-success" @click="addRow">Add Row</button>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
import atas from "@/components/atas.vue";
export default {
	name: "masukan",
	data:() =>({
		options: [
						{ 'label': 'Text', 'value': 1},
						{ 'label': 'Numeric', 'value': 2},
						{ 'label': 'Check box', 'value': 3},
						{ 'label': 'Radio button', 'value': 4},
						{ 'label': 'Drop down', 'value': 5},
						{ 'label': 'Image', 'value': 6},
						{ 'label': 'Date', 'value': 7},
					],
		rows: [
			{ 'select': 1, 'name': '', 'check': false, 'subrows': [{  answer: ''}]}
		]

	}),
	components:{
		atas
	},

	methods:{
		addRow: function()
		{
			this.rows.push({'select': 1, 'name': '', 'check': false, subrows: [{ answer: ''} ]});
		},
		deleteRow: function(row) {
			this.rows.pop(row);
		},
		submit()
		{
			this.rows.forEach(row => {
				let key= new Array();
				key.push(row.select);
				console.log(key);
			});

		}

	},

	mounted(){

	}

}
</script>

<style scoped src="@/assets/css/style.css" ></style>
<style>
		.form-row {
				border:  1px solid #e2e2e2;
				margin:  10px;
				padding: 20px;
				background: #f2f2f2;
			}
			.subrow {
				margin: 5px;
				padding:  5px;
			}

			.tengah{
				z-index: 399;
				position: absolute;
				bottom: calc(100% - 990px);
			}
	</style>