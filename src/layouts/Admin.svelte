<script>
  import { Router, Route } from "svelte-routing";

  // components for this layout
  import AdminNavbar from "../components/Navbars/AdminNavbar.svelte";
  import AdminSidebar from "../components/Sidebar/AdminSidebar.svelte";
  import Header from "../components/Headers/Header.svelte";
  import FooterAdmin from "../components/Footers/FooterAdmin.svelte";

  // pages for this layout
  import Dashboard from "../views/admin/Dashboard.svelte";
  import ResultTemplates from "../views/admin/ResultTemplates.svelte";

  export let location;
  export let admin = "";
</script>

<div>
  <AdminSidebar {location} />
  <div class="relative md:ml-64 bg-blueGray-100">
    <AdminNavbar />
    <Header />
    <div class="px-4 md:px-10 mx-auto w-full -m-24">
      <Router url="admin">
        <Route path="dashboard" component={Dashboard} />
        <Route path="result-templates" component={ResultTemplates} />
      </Router>
      <FooterAdmin />
    </div>
  </div>
</div>
