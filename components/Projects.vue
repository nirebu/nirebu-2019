<template>
	<section>
		<h2 class="font-bold text-3xl lg:text-4xl text-gray-800 px-3 mb-3">
			My projects
		</h2>
		<article
			v-for="(project,key) in projects" :key="key"
			class="p-3"
		>
			<div class="flex items-center">
				<h3 class="text-2xl font-semibold text-gray-700">
					{{ project.title }}
				</h3>
				<div class="inline-flex md:mt-0">
					<a target="_blank" rel="noopener" :href="project.repo" v-if="project.repo" class="w-16 ml-2 hover:bg-purple-700 text-center bg-purple-600 rounded py-1 px-2 text-white">Source</a>
					<a target="_blank" rel="noopener" :href="project.home" v-if="project.home" class="w-16 ml-2 hover:bg-purple-700 text-center bg-purple-600 rounded py-1 px-2 text-white">Visit</a>
				</div>
			</div>
			<p class="block text-gray-700 mt-1 md:m-0 md:mr-12 md:flex-grow">
				{{ project.description }}
			</p>
		</article>
	</section>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{ 
					title: "Piwol",
					description: "Transform your Raspberry Pi in a local Wake on Lan server and access your remote machines, even if they were off",
					repo: "https://github.com/nirebu/piwol-server",
					//home: "https://piwol.com"
				},
				{
					title: "Naos QG" ,
					description: "A hacked together Vue.js frontend interfacing via websockets to the Mionix Naos Quantified Gaming mouse",
					repo: "https://github.com/nirebu/naos-quantified-gaming"
				},
				// {
				// 	title: "Stackrep",
				// 	description: "Keep your domain and IP reputations monitored over time",
				// 	home: "https://stackrep.com"
				// },
				{
					title: "Nirebu.com",
					description: "Check the source code and how my personal website is built",
					repo: "https://github.com/nirebu/nirebu-2019"
				},
			]
		}
	}
}
</script>
