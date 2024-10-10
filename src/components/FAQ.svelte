<script>
import faq from '../data/faq.json'
import { fade,fly } from 'svelte/transition'

let q = ''
let isOpen = false
function showAnswer(e) {
  if (e.target.classList.contains('text-sm')) {
    q = e.target.innerText
  } else {

    q = e.target.previousSibling.previousSibling.innerText
  }
  isOpen = !isOpen
}
</script>

<section id="faq" class="container px-6 mx-auto mt-[5rem]" >
  <div class="container flex flex-col gap-2 px-4 mx-auto md:gap-1 pb-12">
    <h1 class="font-medium text-3xl text-center">Frequently Asked Questions</h1>
    <p class="max-w-[500px] font-normal text-center opacity-40 text-sm text-balance leading-6 mx-auto sm:w-full">
      Here are some of our FAQs. If you have any other questions you’d like 
      answered please feel free to email us.
    </p>
    <div class="w-1/2 max-w-[500px] sm:w-full mt-10 text-left mx-auto flex flex-col gap-8">
      {#each faq as item, i}
      <div class="question-block flex flex-row justify-between items-center">
      
        <h1 class="text-sm font-medium text-left text-veryDarkblue cursor-pointer hover:text-softBlue hover:font-medium select-none outline-none" on:click={showAnswer}>{item.question}</h1>
        <img src="https://raw.githubusercontent.com/35degrees/bookmark-landing-fem/refs/heads/main/src/lib/images/icon-arrow.svg" alt="caret" class="brightness-70 hover:brightness-140 cursor-pointer" class:scale-y-[-1]={isOpen && q === item.question} on:click={showAnswer}>
      </div>
      <div class="w-full text-sm py-0 -mt-6 text-left font-normal text-pretty opacity-55">
        {#if q === item.question && isOpen}
        <p in:fly={{x:-150, duration:220}} out:fly={{x:150, duration:220}}>{item.answer}</p>
        {/if}
      </div>
     
        {/each}
      
   


      
  
    </div>
  </div>
</section>

<style>

  /* .question-block::after {
    content: '';
    width: 490px;
    height: 5px;
    opacity: 1;
    background-color: purple;
    position: absolute;
    bottom: 0%;
    margin: auto;
  } */

</style>