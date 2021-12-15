<script>
	export let menuOpen;
</script>

<header>
  <nav class="navbar shadow-lg bg-neutral text-neutral-content">
    <div class="px-2 mx-2 navbar-start">
      <span class="text-lg font-bold">
              daisyUI
            </span>
    </div> 
    <div class="hidden px-2 mx-2 navbar-center lg:flex">
      <div class="flex items-stretch">
        <a class="btn btn-ghost btn-sm rounded-btn">
                Home
              </a> 
        <a class="btn btn-ghost btn-sm rounded-btn">
                Portfolio
              </a> 
        <a class="btn btn-ghost btn-sm rounded-btn">
                About
              </a> 
        <a class="btn btn-ghost btn-sm rounded-btn">
                Contact
              </a>
      </div>
    </div> 
    <div class="navbar-end">
      <button on:click={() => menuOpen = !menuOpen} class="btn btn-square btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
        </svg>
      </button>
    </div>
  </nav>
</header>


<nav
	class="fixed right-0 w-64 min-h-screen bg-base-200 transform lg:hidden {menuOpen
		? ''
		: 'translate-x-full'} transition duration-200"
>
      <div class="flex flex-col gap-2 items-stretch mt-8">
        <a class="btn btn-ghost btn-sm rounded-btn">
                Home
              </a> 
        <a class="btn btn-ghost btn-sm rounded-btn">
                Portfolio
              </a> 
        <a class="btn btn-ghost btn-sm rounded-btn">
                About
              </a> 
        <a class="btn btn-ghost btn-sm rounded-btn">
                Contact
              </a>
      </div>
</nav>
