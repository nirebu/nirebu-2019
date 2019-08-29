<template>
	<section>
		<h2 class="font-bold text-4xl text-gray-800 px-3 mb-3">
			My projects
		</h2>
		<article
			v-for="(project,key) in projects" :key="key"
			class="p-3 flex items-center"
		>
			<h3 class="text-lg w-32 flex-shrink-0 font-semibold text-gray-700">
				{{ project.title }}
			</h3>
			<p class="flex-grow text-gray-600 mr-12">
				{{ project.description }}
			</p>
			<div class="flex">
				<a :href="project.repo" v-if="project.repo" class="w-16 hover:bg-purple-700 text-center bg-purple-600 rounded py-1 px-2 text-white text-sm" :class="project.repo && project.home ? 'mr-2' : ''">Source</a>
				<a :href="project.home" v-if="project.home" class="w-16 hover:bg-purple-700 text-center bg-purple-600 rounded py-1 px-2 text-white text-sm">Visit</a>
			</div>
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
					home: "https://piwol.com"
				},
				{
					title: "Naos QG" ,
					description: "A little Vue.js frontend interfacing via websockets to the Mionix Naos QG",
					repo: "https://github.com/nirebu/piwol-server"
				},
				{
					title: "Stackrep",
					description: "A service to monitor IP and domain reputation over time",
					home: "https://stackrep.com"
				},
				{
					title: "Nirebu.com",
					description: "Check the source code and how my personal website is built",
					home: "https://stackrep.com"
				},
			]
		}
	}
}
</script>
