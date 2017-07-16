<template>
	<v-card class="project-card">
		<v-card-title class="primary white--text project-card-title">{{title}}</v-card-title>
		<v-card-text>
			<div v-if="Array.isArray(content)" v-for="item in content" :key="item.body">
				<span class="primary--text" v-if="!!item.label">{{item.label}}</span>
				<span>{{item.content}}</span>
			</div>
			<div v-else>
				{{content}}
			</div>
		</v-card-text>
		<v-card-actions class="project-card-actions" v-if="actions.length>0">
			<v-btn v-for="action in actions" :key="action.label" flat tag="a" target="_blank" :href="action.url">{{action.label}}</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>
export default {
	name:'ProjectCard',
	props:{
		title:{
			type:String,
			reuqired:true
		},
		content:{
			type:[Array,String],
			required:true,
			validator: function (value) {
				if(Array.isArray(value)){
					return value.length>0;
				}else{
					return value !== null || value !== "";
				}
      }
		},
		actions:{
			type:Array,
			default:function(){
				return [];
			},
			validator: function (value) {
				for(var id in value){
					var item = value[id];
					console.log(item,!!item.url,!!item.label,item.label == "",!!item.url || !!item.label || item.label == "");
					if(!!item.url || !!item.label || item.label == ""){
						return false;
					}
				}
				return true;
      }
		}
	}
}
</script>
<style lang="css" scoped>
.project-card {
}
.project-card-title{
	min-height: 50px;
	font-weight: 500;
}
.project-card-actions{
	min-height: 50px;
}
</style>
