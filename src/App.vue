<template>
	<v-app standalone>
		<v-navigation-drawer fixed v-model="drawer" right app>
			<v-list dense>
				<v-list-tile v-for="menu in menus" :key="menu.title" :to="menu.url">
					<v-list-tile-action>
						<v-icon>{{menu.icon}}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>{{menu.title}}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
    <v-toolbar fixed appdark color="primary">
      <v-toolbar-title class="special white--text">Kwan Wing's Profile</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" class="white--text hidden-md-and-up"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content style="padding-top: 48px;">
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer class="primary">
      <span class="white--text">© copyright 2015 - {{year}} Created By Chan Kwan Wing</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
				height:document.height,
				drawer:true,
				year:(new Date()).getFullYear(),
				menus:[
					{title:'Home',url:'/',icon:'home'},
					{title:'My CV',url:'/cv',icon:'description'},
					{title:'My Project',url:'/project',icon:'find_in_page'},
					{title:'Contact Me',url:'/contact',icon:'contacts'}
				]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
	@import './css/main.css'
	@import '../node_modules/mdi/css/materialdesignicons.min.css'
</style>
