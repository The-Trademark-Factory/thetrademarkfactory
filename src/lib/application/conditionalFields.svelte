<script>
	import { details } from '$lib/utils/stores';
	export let field;
</script>

<div>
	<label class="block text-ttmfRed text-sm uppercase font-bold mb-1" for={field.name}>
		{field.label}
	</label>
	<input
		class="appearance-none border-2 border-ttmfBeige rounded w-full py-4 px-3 text-ttmfBlack font-bold uppercase leading-tight focus:outline-none focus:shadow-outline"
		bind:value={$details[field.id]}
		id={field.name}
		type="text"
		name={field.name}
		placeholder={field.placeholder ?? ''} />
</div>
