<script>
  // make dynamic date to be added to footer
  let date = new Date().getFullYear();
</script>

<footer class="block py-4">
  <div class="container mx-auto px-4">
    <hr class="mb-4 border-b-1 border-blueGray-200" />
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-6/12 px-4">
        <div
          class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
        >
          Copyright © {date}
          <a
            href="https://lukasmatuska.cz/"
            target="_blank"
            class="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
          >
            Lukáš Matuška
          </a>
          &
          <a
            href="https://mbucek.cz/"
            target="_blank"
            class="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
          >
            Matěj Bucek
          </a>
        </div>
      </div>
      <div class="w-full md:w-6/12 px-4">
        <ul class="flex flex-wrap list-none md:justify-end justify-center">
          <li>
            <a
              href="https://www.facebook.com/groups/153340168045479"
              class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/vcblanenska/"
              class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="http://vc-blanenska.com/"
              class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
            >
              Webové stránky
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vvcb-cz"
              class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
