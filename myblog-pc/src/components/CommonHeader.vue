<template>
	<header>
		<div>{{loginUser.username}} | 
			<span @click="exit">退出</span>
		</div>
	</header>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from "vuex";

	export default {
		computed: {
			...mapState(['loginUser'])
		},
		methods: {
			...mapMutations(['storeLoginUser']),
			...mapActions(['setToken']),
			exit(){
				this.$router.push('/login'),
				this.storeLoginUser(null),
				this.setToken(null)
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	header {
		width: 100%;
		height: 1rem;
		//background: #ebbbf3;
		line-height: 1rem;
		//text-align: center;
		font-weight: bolder;
		position: relative;
	}
	div{
		position: absolute;
		right: 10px;
	}
	
</style>
