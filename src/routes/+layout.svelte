<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">

	<main>
		{@render children()}
	</main>

	<footer>
		<p>
			generated with <a href="https://bolt.new" target="_blank">bolt.new</a>
		</p>
		<p>
			visit <a href="https://svelte.dev/docs/kit" target="_blank">svelte.dev/docs/kit</a> to learn about SvelteKit
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
