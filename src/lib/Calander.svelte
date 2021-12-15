<script>
  import { Datepicker  } from 'svelte-calendar';
  import dayjs from "dayjs";

  let store;

	const theme = {
		calendar: {
			colors: {
				background: {
					highlight: '#570df8'
				}
			}
		}
	};

  const today = new Date();
	const tomorrow = dayjs().add(1, 'day').toDate();
</script>


<Datepicker {theme} start={today} bind:store let:key let:send let:receive>
				<button in:receive|local={{ key }} out:send|local={{ key }} class="btn">
					{#if $store?.hasChosen}
						{dayjs($store.selected).format('ddd MMM D, YYYY')}
					{:else}
						Pick a Date
					{/if}
				</button>
</Datepicker>