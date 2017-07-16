<template>
	<v-card class="namecard">
		<v-container fluid>
			<v-layout row wrap>
				<v-flex xs4 class="text-xs-center">
					<div class="ma-3 text-xs-center">
						<img src="/public/qrcode.jpg" alt="My Contact" width="200" />
					</div>
					<small>Scan me and add me to contact book</small>
				</v-flex>
				<v-flex xs8>
					<div>
						<div class="primary--text">Name</div>
						<div>Ken Chan Kwan Wing</div>
					</div>
					<div>
						<div class="primary--text">Phone:</div>
						<div> (852) 6590 9479</div>
					</div>
					<div>
						<div class="primary--text">E-mail:</div>
						<div> wingwingchan2002@gmail.com</div>
					</div>
					<div>
						<div class="primary--text">Website:</div>
						<div> https://kwanwing.hk</div>
					</div>
					<div>
						<div class="primary--text">Social Network:</div>
						<div>
							<a href="https://www.facebook.com/realwind2012" target="_blank">
								<v-btn outline fab><v-icon mdi>facebook</v-icon></v-btn>
							</a>
							<a href="https://twitter.com/KenChan2012cc" target="_blank">
								<v-btn outline fab><v-icon mdi>twitter</v-icon></v-btn>
							</a>
							<a href="https://plus.google.com/u/0/111494277733975044193" target="_blank">
								<v-btn outline fab><v-icon mdi>google-plus</v-icon></v-btn>
							</a>
							<a href="https://www.linkedin.com/in/ken-chan-hk" target="_blank">
								<v-btn outline fab><v-icon mdi>linkedin</v-icon></v-btn>
							</a>
						</div>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
	</v-card>
</template>
<script>
export default {
	name:'Contact'
}
</script>
<style scoped>
.namecard{
	min-height:350px;
}
</style>
