<script>
	import { selectors, commun, conditional } from '$lib/application/formDetails.json';
	import { searchResults_page } from '../../../../data/global.json';
	import { details, detailsValid } from '$lib/utils/stores';
	import Sidebar from '$lib/application/sidebar.svelte';
	import StartOver from '$lib/application/startOver.svelte';
	import ConditionalFields from '$lib/application/conditionalFields.svelte';

	let initialValues = {};
	[selectors, commun, Object.values(conditional)].forEach((group) => {
		if (Array.isArray(group)) {
			group.forEach((field) => {
				initialValues[field.id] = field.options ? field.options[0] : '';
			});
		} else if (typeof group === 'object') {
			Object.values(group).forEach((field) => {
				initialValues[field.id] = field.options ? field.options[0] : '';
			});
		}
	});

	if (Object.keys($details).length === 0) {
		details.set(initialValues);
	}

	const validateForm = (details) => {
		const communFieldsValid = commun.every((field) => {
			if (field.required) {
				return details[field.id] !== undefined && details[field.id] !== '';
			}
			return true;
		});

		const ownerValid =
			details['owner'] === 'Company'
				? details['company'] !== undefined && details['company'] !== ''
				: true;

		const basedValid = (() => {
			if (details['based'] === 'Australia') {
				return details['abn'] !== undefined && details['abn'] !== '';
			} else if (details['based'] === 'International') {
				return details['jurisdiction'] !== undefined && details['jurisdiction'] !== '';
			}
			return true;
		})();

		const conditionalFieldsValid = ownerValid && basedValid;

		if (communFieldsValid && conditionalFieldsValid) {
			detailsValid.set(true);
		} else {
			detailsValid.set(false);
		}
	};

	$: {
		validateForm($details);
	}
</script>

<section class="relative max-w-screen-xl mx-auto py-12 lg:py-24 max-2xl:px-6">
	<StartOver />
	<div class="grid lg:grid-cols-3 gap-12 pt-11">
		<div class="lg:col-span-2">
			<p class="text-3xl font-bold">{searchResults_page.personalDetails.title}</p>
			<div class="space-y-6 mt-8 lg:w-3/4">
				{#each selectors as field}
					<div>
						<label class="block text-ttmfRed text-sm uppercase font-bold mb-1" for={field.name}>
							{#if field.name === 'Based' && $details['owner'] === 'Individual'}
								{field.labelIndividual}
							{:else}
								{field.label}
							{/if}
						</label>
						<div class="flex items-center gap-6 py-3">
							{#each field.options as option}
								<div class="flex items-center gap-2">
									<input
										type="radio"
										class="form-radio h-5 w-5"
										id={option}
										name={field.name}
										value={option}
										bind:group={$details[field.id]} />
									<label for={option} class="font-bold text-ttmfBlack">{option}</label>
								</div>
							{/each}
						</div>
					</div>
				{/each}
				{#if $details['owner'] === 'Company'}
					<ConditionalFields field={conditional.isCompany} />
				{/if}
				<ConditionalFields
					field={$details['based'] === 'International'
						? conditional.isInternational
						: conditional.isAustralia} />
				{#each commun as field}
					<div>
						<label class="block text-ttmfRed text-sm uppercase font-bold mb-1" for={field.name}>
							{field.label}
						</label>
						{#if field.type === 'select'}
							<select
								class="appearance-none border-2 border-ttmfBeige rounded w-full py-4 px-3 text-ttmfBlack font-bold leading-tight focus:outline-none focus:shadow-outline"
								id={field.name}
								name={field.name}
								bind:value={$details[field.id]}>
								{#each field.options as option}
									<option value={option}>{option}</option>
								{/each}
							</select>
						{:else}
							<input
								class="appearance-none border-2 border-ttmfBeige rounded w-full py-4 px-3 text-ttmfBlack font-bold leading-tight focus:outline-none focus:shadow-outline"
								bind:value={$details[field.id]}
								id={field.name}
								type="text"
								name={field.name}
								placeholder={field.placeholder ?? ''} />
						{/if}
					</div>
				{/each}
			</div>
		</div>
		<div>
			<div class="sticky top-12">
				<Sidebar />
			</div>
		</div>
	</div>
</section>
