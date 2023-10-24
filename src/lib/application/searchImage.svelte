<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { UploadCloud, X } from 'lucide-svelte';
	import { searchType, searchLogo } from '$lib/utils/stores';
	import { openDB, getImage, saveImage, deleteImage } from '$lib/utils/indexedDB';
	import { setItem } from '$lib/utils/localStorageUtils';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let previousSearch, imageUrl;

	async function handleFileUpload(event) {
		const file = event.target.files[0];
		uploadImage(file);
	}

	async function handleDrop(event) {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		uploadImage(file);
	}

	function handleDragOver(event) {
		event.preventDefault();
	}

	async function uploadImage(file) {
		await saveImage(imageDB, file);
		imageUrl = URL.createObjectURL(file);
		searchLogo.set(imageUrl);
		dispatch('deletePrevious');
	}

	function handleDelete() {
		deleteImage();
		imageUrl = '';
		searchLogo.set('');
		dispatch('deletePrevious');
	}

	function apply() {
		if (previousSearch && previousSearch === 'typeLogo') {
			dispatch('gotoPrevious');
		} else {
			searchType.set('logo');
			setItem('searchType', 'logo');
			goto('/application/classes');
		}
	}
</script>

{#if imageUrl === undefined || imageUrl === ''}
	<div class="max-w-xl">
		<label
			class="flex justify-center w-full h-20 px-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-ttmfLightTextGreen focus:outline-none"
			id="drop-area"
			on:drop={handleDrop}
			on:dragover={handleDragOver}>
			<span class="flex items-center space-x-2 text-white">
				<UploadCloud />
				<span class="font-medium">
					Drop files to Attach, or
					<span class="text-ttmfLightTextGreen underline">browse</span>
				</span>
			</span>
			<input
				type="file"
				id="fileElem"
				class="hidden"
				accept="image/*"
				on:change={handleFileUpload} />
		</label>
	</div>
{:else}
	<div
		class="relative bg-ttmfLightGreen rounded-md p-4 lg:p-6 text-center transition-all hover:shadow-2xl border-2 border-transparent hover:border-white w-full">
		<img src={imageUrl} alt="Uploaded Logo" class="h-20 max-w-xs object-cover mx-auto" />
		<button
			on:click={handleDelete}
			class="absolute -top-2 -right-2 w-7 h-7 rounded-full flex flex-col justify-center items-center text-ttmfDarkGreen bg-white transition-all hover:bg-ttmfRed"
			><X /></button>
	</div>
	<button
		on:click={() => {
			apply();
		}}
		class="bg-ttmfRed text-white font-bold px-12 py-5 mt-6 rounded justify-center max-md:flex max-md:w-full"
		>{previousSearch === 'typeLogo' ? 'Continue this application' : 'Apply Now'}</button>
{/if}
