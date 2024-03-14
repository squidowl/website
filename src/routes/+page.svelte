<script>
	function openConfiguration() {
		window.open('https://github.com/squidowl/halloy/wiki/Configuration', '_blank');
	}

	function openGithub() {
		window.open('https://github.com/squidowl/halloy', '_blank');
	}
</script>

<section class="text-center w-full h-screen bg-gradient-to-b from-indigo to-red">
	<div class="flex flex-col items-center w-full h-full p-8 gap-8">
		<img width="200px" src="logo.png" alt="Halloy" />
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
		<img width="700px" src="animation.gif" alt="Halloy" class="rounded-lg" />
	</div>
</section>

<style>
	:root {
		--selection: #bb86fc;
	}
</style>
