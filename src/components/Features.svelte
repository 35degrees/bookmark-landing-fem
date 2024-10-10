<script>
import featureDetails from '../data/features.json'
import {fade,fly} from 'svelte/transition'

  // imageSrc = `src/lib/images/illustration-features-tab-${position+1}.svg`

let position = 0
$: positionChain = [0]
let imageSrc = 'https://raw.githubusercontent.com/35degrees/bookmark-landing-fem/refs/heads/main/src/lib/images/illustration-features-tab-1.svg'
let h1Src = featureDetails[position].h1
// $: positionChain.unshift(position)
//   $: positionChain.splice(2)
//   $: curr = positionChain[0]
//   $: prev = positionChain[1]
let changed = false



function doSomething() {
  changed = true
  setTimeout(() => {
    changed = false
  },1000)

  positionChain.unshift(position)
  positionChain.splice(2)
  let curr = positionChain[0]
  let prev = positionChain[1]
  if (curr === prev) {
    return
} else {

   imageSrc = `https://raw.githubusercontent.com/35degrees/bookmark-landing-fem/refs/heads/main/src/lib/images/illustration-features-tab-${position+1}.svg`
    h1Src = `featureDetails[position].h1`
  



}
}
</script>

<section id="features" class="container px-2 mx-auto">
  <div class="container flex flex-col px-6 mx-auto mt-12 md:space-y-2">
    <h1 class="font-medium text-3xl text-center">Features</h1>
    <p class="md:w-2/3 lg:w-1/3 font-normal text-center opacity-40 text-sm text-balance leading-6 mx-auto">
      Our aim is to make it quick and easy for you to access your favourite websites. 
      Your bookmarks sync between your devices so you can access them on the go.
    </p>
    <div class="flex flex-col items-center justify-center lg:w-1/2 mx-auto gap-12 md:flex-row sm:gap-3">
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      {#each featureDetails as item, i}

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <p class="featureTitle" on:click={() => position = i}  class:featureTitleSelect={i === position} on:click={doSomething}>{item.heading}</p>
      {/each}

    </div>
    <div class="relative flex w-full px-0 flex-col mx-auto md:flex-row md:w-full md:gap-2 sm:space-y-6 sm:h-[520px] md:h-[300px] lg:h-[350px] lg:gap-5 lg:w-full sm:gap-0">
      <div class="bg-art absolute bg-softBlue  rounded-full lg:top-[5.5rem] lg:-left-[40rem] lg:h-[90%] lg:w-[70rem] md:top-[4.5rem] md:-left-[52.5rem] md:h-[90%] md:w-[70rem] sm:top-[4.5rem] sm:-left-[45rem] sm:h-[250px] sm:w-[64rem]"></div>


      <div transition:fly={{x:100, duration: 200}} class="imageMe md:w-1/2 lg:w-2/3 sm:h-[320px] md:h-[330px] lg:h-[340px] lg:ml-[8.5rem]">
        <img src="{imageSrc}" alt="features-tab-art"  /> 
      </div>
   
      
      <div class="relative flex flex-col gap-3 px-10 items-center text-center justify-center md:items-start md:justify-center md:text-left md:w-1/2 lg:w-1/2 sm:space-y-2 md:gap-1 lg:gap-2 lg:px-[3rem] sm:gap-1">
        <h1 transition:fade class="absolute top-12 text-3xl font-medium md:text-2xl">{featureDetails[position].h1}</h1>
        <p class="text-sm font-light leading-5 opacity-50 absolute top-20">
          {featureDetails[position].p}
        </p>
        <div class="flex flex-row justify-start space-x-6 absolute top-[11rem] sm:top-[9.2rem] md:top-[11rem]">
        <a href="/" class="text-veryDarkBlue bg-slate-100 font-medium text-sm px-5 py-3 border-none rounded-lg hover:text-white hover:bg-softBlue">More Info</a>
        </div>
      </div>  
    </div>
    

</section>


<style>
.bg-art {
  z-index: -99;
}

.imageMe {
  object-fit: contain;
}

.featureTitle {
  opacity: 0.8;
  font-weight: 400;
  font-size: 0.9rem;
  padding: 0.7rem 0.5rem;
  background-color: transparent;
  border-bottom-width: 0.3rem;
  text-align: center;
  cursor: pointer;
  outline: none;
  user-select: none;
}

.featureTitleSelect {
  border-color: hsl(0, 94%, 66%) ;
  font-weight: 500;
}

/* <p class="opacity-70 font-normal text-sm px-8 py-4 bg-transparent border-b-4 border-transparent hover:border-b-4 hover:font-semibold hover:border-softRed text-center mx-auto cursor-pointer -mb-2">{item.heading}</p> */

</style>