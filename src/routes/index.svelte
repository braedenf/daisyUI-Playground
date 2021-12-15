<script>
	import Calander from '$lib/Calander.svelte';
</script>

<main class="container mx-auto px-4 my-8">
	<div class="flex flex-col lg:flex-row">
		<div class="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
			<Calander />
			<div class="btn-group">
				<button class="btn btn-sm btn-active">6:00AM</button> 
				<button class="btn btn-sm">7:00AM</button> 
				<button class="btn btn-sm">6:00PM</button> 
			</div>
		</div> 
		<div class="divider lg:divider-vertical"></div> 
		<div class="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
			<Calander />
			<div class="btn-group">
				<button class="btn btn-sm btn-active">6:00AM</button> 
				<button class="btn btn-sm">7:00AM</button> 
				<button class="btn btn-sm">6:00PM</button> 
			</div>
		</div>
	</div>
</main>


