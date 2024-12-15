<script>
	import { onMount } from 'svelte';
	export let files;
	let previewImgBox;
	async function readFileAsDataURL(file) {
		let result_base64 = await new Promise((resolve) => {
			let fileReader = new FileReader();
			fileReader.onload = (e) => resolve(fileReader.result);
			fileReader.readAsDataURL(file);
		});

		return result_base64;
	}
	onMount(async () => {
		previewImgBox.innerHTML = '';
		let fileReaderResults = [];

		if (files) {
			for (let i = 0; i < files.length; i++) {
				fileReaderResults[i] = await readFileAsDataURL(files[i]);
				const markup = `<figure style="width:15vw; height:20vw;"><img src=${fileReaderResults[i]} style="width:100%; height:70%; object-fit:cover;" /><figcaption style="word-break:break-all;">${files[i].name}<figcaption/></figure>`;
				previewImgBox.insertAdjacentHTML('beforeEnd', markup);
			}
		}
	});
</script>

<div class="preview-img-box" bind:this={previewImgBox}></div>

<style>
	.preview-img-box {
		display: flex;
		gap: 2rem;
		width: 100%;
		padding: 3rem 0;
	}
</style>
