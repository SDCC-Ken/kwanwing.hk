<template>
	<div>
		<v-subheader>Software Work</v-subheader>
		<v-container fluid grid-list-sm>
			<v-layout row wrap>
				<v-flex xs6 v-for="item in program" :key="item.title">
					<project-card :title="item.title" :content="item.content" :actions="item.actions" />
				</v-flex>
			</v-layout>
		</v-container>
		<v-subheader>Paper Work</v-subheader>
		<v-container fluid grid-list-sm>
			<v-layout row wrap>
				<v-flex xs6 v-for="item in paper" :key="item.title">
					<project-card :title="item.title" :content="item.content" :actions="item.actions" />
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
<script>
import ProjectCard from './components/ProjectCard.vue'
export default {
	name:'Project',
	components:{
		ProjectCard:ProjectCard
	},
	data(){
		return {
			program:[
				{
					title:'Hurry Waiter',
					content:[
						{label:'Type',content:'Web Application (JavaScript)'}
					],
					actions:[
						{label:'Preview',url:''},
						{label:'Source Code',url:''}
					]
				},
				{
					title:'Ghost Leg Game',
					content:[
						{label:'Type',content:'Web Application (JavaScript)'}
					],
					actions:[
						{label:'Preview',url:'showcase/ghost_leg_game/index.html'},
						{label:'Source Code',url:''}
					]
				},
				{
					title:'School Management System (Microsoft SQL Server version)',
					content:[
						{label:'Type',content:'DataBase (Microsoft SQL Server)'},
						{content:'You may need to use Microsoft SQL Server to see the work.'}
					],
					actions:[
						{label:'Preview',url:'showcase/ghost_leg_game/index.html'}
					]
				},
				{
					title:'24Eating',
					content:[
						{label:'Type','content':'Web app (cordova)'},
						{content:'Please note that ITACHO is only the example worked in this application.'},
						{label:'Notices',content:'You should also allow installation other apps from sources other than Play Store before installing this application.'}
					],
					actions:[
						{label:'Preview',url:''},
						{label:'Source Code',url:''}
					]
				}
			],
			paper:[
				{
					title:'A study on how somatosensory game using motion controller can encourage HongKongers to do more exercise',
					content:[
						{label:'Subject:',content:'Integrated Study'},
						{label:'Language:',content:'English'}
					],
					actions:[
						{label:'Download',url:'showcase/offlineproject/Integrated_Study.pdf'}
					]
				},
				{
					title:'Case Study - Royal View Hotel',
					content:[
						{label:'Subject:',content:'Electronic Commerce Strategy and Implementation'},
						{label:'Language:',content:'English'}
					],
					actions:[
						{label:'Download',url:'showcase/offlineproject/Case-Study-Royal-View-Hotel.pdf'}
					]
				},
				{
					title:'Case Study - A&M Records, Inc. v. Napster, Inc.',
					content:[
						{label:'Subject:',content:'Information Society Issue and Policy'},
						{label:'Language:',content:'English'}
					],
					actions:[
						{label:'Download',url:'showcase/offlineproject/Case-Study-A&M-Records-v-napster-inc.pdf'}
					]
				}
			]
		};
	}
}
</script>
<style scoped>
.project-card-title{
	min-height: 100px;
	max-height: 100px;
	overflow: hidden;

}
</style>
