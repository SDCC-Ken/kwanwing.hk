<template>
	<div>
		<v-subheader class="ma-3 display-2 special">Software Work</v-subheader>
		<v-container fluid grid-list-sm>
			<v-layout row wrap>
				<v-flex xs6 v-for="item in program" :key="item.title">
					<project-card :title="item.title" :content="item.content" :actions="item.actions" />
				</v-flex>
			</v-layout>
		</v-container>
		<v-subheader class="ma-3 display-2 special">Paper Work</v-subheader>
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
						{label:'Preview',url:'showcase/hurry_waiter/index.html'},
					]
				},
				{
					title:'Ghost Leg Game',
					content:[
						{label:'Type',content:'Web Application (JavaScript)'}
					],
					actions:[
						{label:'Preview',url:'showcase/ghost_leg_game/index.html'},
					]
				},
				{
					title:'School Management System (Microsoft SQL Server version)',
					content:[
						{label:'Type',content:'DataBase (Microsoft SQL Server)'},
            {label:'Notices'},
						{content:'You may need to use Microsoft SQL Server to see the work.'}
					],
					actions:[
						{label:'Preview',url:'showcase/offlineproject/SPD4514.zip'}
					]
				},
				{
					title:'24Eating',
					content:[
						{label:'Type','content':'Web app (cordova)'},
            {label:'Notices'},
						{content:'Please note that ITACHO is only the example worked in this application.'},
						{content:'You should also allow installation other apps from sources other than Play Store before installing this application.'}
					],
					actions:[
						{label:'Preview',url:'showcase/offlineproject/app24eating-v0.1.5-final.apk'},
					]
				},
        {
          title:'School Management System',
          content:[
            {label:'Type','content':'MySQL and website'},
          ],
          actions:[
            {label:'Preview',url:'showcase/database_work/index.html'},
            {label:'Report',url:'showcase/offlineproject/CCN2240_report.pdf'},
          ]
        },
        {
          title:'English Vocabulary Game',
          content:[
            {label:'Subject:',content:'Information and Communication Technology'},
            {label:'Language:',content:'Chinese'}
          ],
          actions:[
            {label:'Preview',url:'showcase/school/index.html'},
            {label:'Website',url:'showcase/offlineproject/ICT-SBA.pdf'},
          ]
        },
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
				},
        {
          title:'E-Business Start-up Plan for Discover Columbiana Authority',
          content:[
            {label:'Subject:',content:'E-Business'},
            {label:'Language:',content:'English'}
          ],
          actions:[
            {label:'Download',url:'showcase/offlineproject/E-Business_group_project.pdf'},
            {label:'Website',url:'showcase/sample_website/index.html'},
          ]
        },
        {
          title:'以中華基督教會基智中學的學生為調查對象探討社交網站出現的網絡欺凌和網絡戀愛對於香港的九零年後出生的青少年行為的影響報告書',
          content:[
            {label:'Subject:',content:'Liberal Studies'},
            {label:'Language:',content:'Chinese'}
          ],
          actions:[
            {label:'Download',url:'showcase/offlineproject/IES.pdf'},
          ]
        },
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
