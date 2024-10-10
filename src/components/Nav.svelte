<script>
  let isOpen = false
 function toggleIsOpen() {
  isOpen = !isOpen
  console.log(isOpen);
 }


</script>

<nav class="relative container mx-auto p-6">
  <div class="flex items-center justify-between">
    <div class="pt-2">
      <img src="https://raw.githubusercontent.com/35degrees/bookmark-landing-fem/refs/heads/main/src/lib/images/logo-bookmark.svg" alt="logo">
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="hamburger-menu block md:hidden" class:open={isOpen} on:click={toggleIsOpen}>
      <span class="hamburger-menu-top"></span>
      <span class="hamburger-menu-middle"></span>
      <span class="hamburger-menu-bottom"></span>
    </div>


    
    <div class="hidden md:flex md:flex-row gap-6 justify-center items-center">
      <a href="#" class="text-sm uppercase font-light hover:text-softRed px-2 py-1 hover:border-softRed bg-transparent tracking-wide">Features</a>
      <a href="/" class="text-sm uppercase font-light hover:text-softRed px-2 py-1 hover:border-softRed bg-transparent tracking-wide">pricing</a>
      <a href="/" class="text-sm uppercase font-light hover:text-softRed px-2 py-1 hover:border-softRed bg-transparent tracking-wide">contact</a>
      <a href="/" class="text-sm border-2 border-transparent uppercase font-light hover:text-softRed px-6 py-2 bg-softRed tracking-wide text-white hover:bg-transparent rounded-lg hover:border-softRed ">login</a>
    </div>

    <div class="md:hidden">
      <div id="mobile-menu" class="absolute w-full bg-veryDarkGrey flex flex-col items-center justify-center py-8 mt-10 gap-5 font-bold text-white drop-shadow-md" class:openMenu={isOpen}>
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Contact</a>
        <a href="/" class="text-softRed border-2 py-2 rounded-lg px-4 border-softRed bg-transparent hover:bg-slate-100">Log In</a>
      </div>
    </div>
  </div>
</nav>

<style>
  .hamburger-menu {
    position: relative;
    top: 8px;
    cursor: pointer;
    right: 0%;
    /* border: 1px dotted blue; */
    width: 28px;
    height: 28px;
    transition: all 0.2s;
    outline: none;
    user-select: none;
    margin-left: 16rem;
  }
  .hamburger-menu-top,
  .hamburger-menu-middle,
  .hamburger-menu-bottom {
    position: absolute;
    width: 24px;
    height: 2px;
    background-color: var(--very-dark-blue);
    top: 0;
    left: 0%;
    transform: rotate(0);
    transition: all 0.32s;
  }

  .hamburger-menu-middle {
    transform: translateY(7px);
  }

  .hamburger-menu-bottom {
    transform: translateY(14px);
  }

  .open {
    transform: rotate(90deg);
    transform: translateY(0px);
  }
  .open .hamburger-menu-top {
    transform: rotate(45deg) translateY(6px) translate(6px);
  }
  .open .hamburger-menu-middle {
    display: none;
  }
  .open .hamburger-menu-bottom {
    transform: rotate(-45deg) translateY(6px) translate(-6px);
  }
  #mobile-menu {
    top: 50%;
    left: 0%;
    transition: transform 0.3s ease-in;
    transform: translateX(-150%);
    height: 100vh;
    z-index: 99;
    background-color: hsla(229, 31%, 21%, 0.878);
    justify-content: flex-start;

    & a {
      text-shadow: 1px 1px 6px -1px rgba(255, 255, 255, 0.2);
      filter: brightness(0.82);
      &:hover {
      filter: brightness(1.4);
    }
    }
 
    }

    #mobile-menu.openMenu {
      transform: translateX(0);
    }


</style>