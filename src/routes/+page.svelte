<script>
	function openConfiguration() {
		window.open('https://github.com/squidowl/halloy/wiki/Configuration', '_blank');
	}

	function openGithub() {
		window.open('https://github.com/squidowl/halloy', '_blank');
	}
</script>

<section class="text-center w-full h-screen bg-gradient-to-b from-indigo to-red">
	<div class="flex flex-col items-center justify-center w-full h-full gap-6">
		<div class="relative">
			<img width="700px" src="animation.gif" alt="Halloy" class="rounded-3xl opacity-80" />
			<img
				width="200px"
				src="logo.png"
				alt="Halloy"
				class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			/>
		</div>
		<div class="flex flex-col items-center gap-1 text-white">
			<p class="text-4xl font-rubik font-bold">Halloy</p>
			<p class="text-md font-rubik text-peach">The cross-platform IRC client written in Rust</p>
		</div>
		<div class="flex gap-2">
			<button
				on:click={openGithub}
				class="rounded-full bg-darkPurple hover:bg-lightPurple text-peach px-6 py-2"
			>
				Download
			</button>
			<button
				on:click={openConfiguration}
				class="rounded-full bg-darkPurple hover:bg-lightPurple text-peach px-6 py-2"
			>
				Configuration
			</button>
		</div>
	</div>
</section>

<style>
	:root {
		--selection: #bb86fc;
	}
</style>
