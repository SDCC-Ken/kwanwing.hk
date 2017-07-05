<template>
  <v-app>
		<v-navigation-drawer v-model="drawer" right  permanent floating light>
			<v-list>
        <v-list-item v-for="menu in menus" :key="menu">
          <v-list-tile router :to="menu.url">
            <v-list-tile-content>
              <v-list-tile-title>{{menu.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
		</v-navigation-drawer>
		<v-toolbar class="transparent elevation-0 toolbar primary">
			<v-toolbar-title class="special display-3">Kwan Wing's Profile</v-toolbar-title>
			<v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
		</v-toolbar>
		<div class="main">
			<v-layout row wrap>
				<v-container fluid>
					<v-flex xs8 offset-xs2>
						<router-view></router-view>
					</v-flex>
				</v-container>
			</v-layout>
		</div>
    <v-footer fixed>
      <span>©copyright 2017 Created By Chan Kwan Wing</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
				drawer:false,
				menus:[
					{title:'Home','url':'/'},
					{title:'My CV','url':'/cv'},
					{title:'My Project','url':'/project'},
					{title:'Contact Me','url':'/contact'}
				]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
	@import './css/main.css'
</style>
