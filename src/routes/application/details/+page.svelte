<script>
	import { searchResults_page } from '../../../../data/global.json';
	import { details, detailsValid } from '$lib/utils/stores';
	import Sidebar from '$lib/components/application/sidebar.svelte';
	import StartOver from '$lib/components/application/startOver.svelte';

	const formData = [
		{
			label: 'The owner of the trademark is a:*',
			name: 'Owner',
			type: 'radio',
			id: 'owner',
			options: ['Company', 'Individual'],
			placeholder: '',
			required: false
		},
		{
			label: 'The Company / Organisation is based in:*',
			labelAlt: 'The Individual is based in:*',
			name: 'Based',
			type: 'radio',
			id: 'based',
			options: ['Australia', 'International'],
			placeholder: '',
			required: false
		},
		{
			label: 'Company Name*',
			name: 'Company',
			type: 'text',
			id: 'company',
			options: [],
			placeholder: 'ACME Pty Ltd',
			required: true
		},
		{
			label: 'ABN*',
			name: 'ABN',
			type: 'text',
			id: 'abn',
			options: [],
			placeholder: '12345678910',
			required: false
		},
		{
			label: 'First Name*',
			name: 'First name',
			type: 'text',
			id: 'firstName',
			options: [],
			placeholder: 'John',
			required: false
		},
		{
			label: 'Last Name*',
			name: 'Last name',
			type: 'text',
			id: 'lastName',
			options: [],
			placeholder: 'Doe',
			required: false
		},
		{
			label: 'Address*',
			name: 'Address',
			type: 'text',
			id: 'address',
			options: [],
			placeholder: '123 George St.',
			required: false
		},
		{
			label: 'Address Line 2',
			name: 'Address 2',
			type: 'text',
			id: 'address2',
			options: [],
			placeholder: 'Level 1',
			required: false
		},
		{
			label: 'City*',
			name: 'City',
			type: 'text',
			id: 'city',
			options: [],
			placeholder: 'Sydney',
			required: false
		},
		{
			label: 'State*',
			name: 'Phone',
			type: 'select',
			id: 'state',
			options: [
				'New South Wales',
				'Victoria',
				'Queensland',
				'Northern Territoy',
				'Western Australia',
				'South Australia',
				'Tasmania',
				'Australian Capital Territory'
			],
			placeholder: '',
			required: false
		},
		{
			label: 'Postcode*',
			name: 'Postcode',
			type: 'text',
			id: 'postcode',
			options: [],
			placeholder: '2000',
			required: false
		},
		{
			label: 'Country*',
			name: 'Country',
			type: 'text',
			id: 'country',
			options: [],
			placeholder: 'Australia',
			required: false
		},
		{
			label: 'Email*',
			name: 'Email',
			type: 'email',
			id: 'email',
			options: [],
			placeholder: 'john@doe.com',
			required: false
		},
		{
			label: 'Phone*',
			name: 'Phone',
			type: 'tel',
			id: 'phone',
			options: [],
			placeholder: '0412 345 678',
			required: false
		}
	];

	let initialValues = {};
	formData.forEach((field) => {
		initialValues[field.id] = field.type === 'radio' ? field.options[0] : '';
	});

	// Check if details is empty
	if (Object.keys($details).length === 0) {
		details.set(initialValues);
	}

	const validateForm = (details) => {
		detailsValid.set(
			formData.every((field) => {
				if (field.required) {
					return details[field.id] !== '';
				}
				return true;
			})
		);
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
			<div class="space-y-6 mt-8">
				{#each formData as field}
					<div class="lg:w-3/4">
						<label class="block text-ttmfRed text-sm uppercase font-bold mb-1" for={field.name}>
							{field.label}
						</label>
						{#if field.type === 'radio'}
							<div class="flex items-center gap-6 py-3">
								{#each field.options as option}
									<div class="flex items-center gap-2">
										<input
											type="radio"
											id={option}
											name={field.name}
											value={option}
											bind:group={$details[field.id]} />
										<label for={option} class="font-bold text-ttmfBlack">{option}</label>
									</div>
								{/each}
							</div>
						{:else if field.type === 'select'}
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
								class="appearance-none border-2 border-ttmfBeige rounded w-full py-4 px-3 text-ttmfBlack font-bold uppercase leading-tight focus:outline-none focus:shadow-outline"
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
