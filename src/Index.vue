<template>
	<div>
		<div class="text-xs-center ma-3 display-2 special">Hello, everyone</div>
		<v-carousel>
			<v-carousel-item v-for="(item,i) in items" v-bind:key="i" v-bind:src="item.src"></v-carousel-item>
		</v-carousel>
    <p>&nbsp;</p>
		<p class="title">
			My name is Chan Kwan Wing and you can call me Ken.
			I am from Hong Kong.
			I am a website and application programmer.
			This is my profile and you can find more about me in this.
		</p>
    <p>&nbsp;</p>
		<p class="body-1"><span class="subheading">Available for:</span> Full-time Job with one-month notice</p>
		<p class="body-1"><span class="subheading">Mobile:</span> (852) 6590 9479</p>
		<p class="body-1"><span class="subheading">Email:</span> wingwingchan2002@gmail.com</p>
		<p class="subheading">Favorite Quote:</p>
		<blockquote>
			"Your time is limited, so don’t waste it living someone else’s life.
			Don't be trapped by dogma – which is living with the results of other people's thinking.
			Don't let the noise of other's opinions drown out your own inner voice.
			And most important, have the courage to follow your heart and intuition.
			They somehow already know what you truly want to become. Everything else is secondary."－Steve Jobs
		</blockquote>
	</div>
</template>
<script>
export default {
	name:'Index',
	data () {
      return {
        items: [
          {
            src: '/public/img1.jpg'
          },
          {
            src: '/public/img2.png'
          },
          {
            src: '/public/img3.png'
          },
          {
            src: '/public/img4.png'
          }
        ]
      }
    }
}
</script>
<style scoped>
.carousel {
	height:500px;
}
</style>
