<template>
	<div>
		<div class="text-xs-center display-2 special">Curriculum Vitae</div>
		<v-container fluid grid-list-md class="my-4">
			<v-layout row>
				<v-flex xs12>
					<v-card>
						<v-card-text>
							<v-card-title class="my-2 display-1">Chan Kwan Wing (Ken)</v-card-title>
							<div class="my-2">
								<span class="mx-2">wingwingchan2002@gmail.com</span> | <span class="mx-2">(852) 6590 9479</span>
							</div>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid grid-list-md class="my-4">
			<v-layout row>
				<v-flex xs12>
					<v-card>
						<v-card-title class="my-2 display-1">Academic</v-card-title>
						<v-stepper v-model="academic">
							<v-stepper-header class="ma-0">
								<v-stepper-step step="M" class="step__circle" v-on:click.native="academic='M';">2016</v-stepper-step>
								<v-divider></v-divider>
								<v-stepper-step step="B" class="step__circle" v-on:click.native="academic='B';">2014</v-stepper-step>
								<v-divider></v-divider>
								<v-stepper-step step="A" class="step__circle" v-on:click.native="academic='A';">2012</v-stepper-step>
								<v-divider></v-divider>
								<v-stepper-step step="S" class="step__circle" v-on:click.native="academic='S';">2006</v-stepper-step>
							</v-stepper-header>
							<v-stepper-content step="M" height="200px" class="z-depth-1">
									<p class="headline">Master of Science (Software Technology)</p>
									<p>September 2016 - Current</p>
									<p>The Hong Kong Polytechnic University (PolyU)</p>
							</v-stepper-content>
							<v-stepper-content step="B" height="200px">
								<p class="headline">
									Bachelor of Science (Honours) in Applied Sciences (Information Systems and Web Technologies)
								</p>
								<p>September 2014 - August 2016</p>
								<p>
									The School of Professional Education and Executive Development (SPEED) of
									The Hong Kong Polytechnic University (PolyU)
								</p>
							</v-stepper-content>
							<v-stepper-content step="A" height="200px">
								<p class="headline">Associate in Information Technology</p>
								<p>September 2012 - August 2014</p>
								<p>Hong Kong Community College (HKCC) of The Hong Kong Polytechnic University (PolyU) </p>​
							</v-stepper-content>
							<v-stepper-content step="S" height="200px">
								<p class="headline">Graduated</p>
								<p>2006 - 2012</p>
								<p>C.C.C. Kei Chi Secondary School</p>
							</v-stepper-content>
						</v-stepper>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid grid-list-md class="my-4">
			<v-layout row>
				<v-flex xs12>
					<v-card>
						<v-card-title class="my-2 display-1">Working Experience</v-card-title>
						<v-stepper v-model="working">
							<v-stepper-header>
								<v-stepper-step step="Y" class="step__circle" v-on:click.native="working='Y';">2016</v-stepper-step>
								<v-divider></v-divider>
								<v-stepper-step step="YI" class="step__circle" v-on:click.native="working='YI';">2015</v-stepper-step>
							</v-stepper-header>
							<v-stepper-content step="Y" height="200px">
								<p class="headline">Yakoo Technology Limited</p>
								<p>July 2016 - Current</p>
								<p>Programmer</p>
							</v-stepper-content>
							<v-stepper-content step="YI" height="200px">
								<p class="headline">Yakoo Technology Limited</p>
								<p class="headline">June 2015 - July 2016</p>
								<p>Part-Time Programmer (Internship)</p>
							</v-stepper-content>
						</v-stepper>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container fluid grid-list-md class="my-4">
			<v-layout row>
				<v-flex xs12>
					<v-card>
						<v-card-title class="my-2 display-1">Computer Skills</v-card-title>
						<v-card-text>
							<div>
								<div>Web Development</div>
								<div>
									<v-chip>HTML 5</v-chip><v-chip>CSS 3</v-chip><v-chip>Bootstrap</v-chip>
									<v-chip>JavaScript</v-chip><v-chip>Angular JS 1</v-chip>
									<v-chip>Vue 2</v-chip><v-chip>Vuetify</v-chip>
									<v-chip>PHP 7</v-chip><v-chip>Restful API</v-chip>
									<v-chip>Yii 2</v-chip><v-chip>CodeIgniter</v-chip><v-chip>Ext4Yii</v-chip>
								</div>
							</div>
							<div>
								<div>Application Development</div>
								<div>
									<v-chip>Phonegap / Cordova</v-chip>
									<v-chip>Android Application Development (Java)</v-chip>
									<v-chip>Windows Application (C#)</v-chip>
								</div>
							</div>
							<div>
								<div>Native</div>
								<div>
									<v-chip>C++</v-chip><v-chip>C#</v-chip>
								</div>
							</div>
							<div>
								<div>Database</div>
								<div>
									<v-chip>MySQL</v-chip><v-chip>Microsoft SQL Server</v-chip>
								</div>
							</div>
							<div>
								<div>Software</div>
								<div>
									<v-chip>WordPress</v-chip>
									<v-chip>Joomla!</v-chip>
									<v-chip>PHPMyAdmin</v-chip>
									<v-chip>Microsoft Office</v-chip>
									<v-chip>Micrososft Excel</v-chip>
									<v-chip>Flash</v-chip>
									<v-chip>10 w.p.m (Chinese-Stroke)</v-chip>
									<v-chip>20 w.p.m (English)</v-chip>
								</div>
							</div>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
export default {
	name:'Cv',
	data () {
		return {
			academic: "M",
			working: 0
		}
	}
}
</script>
<style scoped>
.timeline-card{
	min-height: 300px;
}
.step__circle{
	padding:36px;
}
.stepper__step__step{
	height:36px;
}
</style>
