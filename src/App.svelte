<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";

  // Admin Layout
  import Admin from "./layouts/Admin.svelte";
  // Auth Layout
  import Auth from "./layouts/Auth.svelte";
  import IndexOld from "./views/Index-old.svelte";

  // No Layout Pages
  import Index from "./views/Index.svelte";
  import Landing from "./views/Landing.svelte";
  import Profile from "./views/Profile.svelte";
  import Results from "./views/Results.svelte";

  export let url = "";
</script>

<Router {url}>
  <!-- admin layout -->
  <Route path="admin/*admin" component={Admin} />
  <!-- auth layout -->
  <Route path="auth/*auth" component={Auth} />
  <!-- no layout pages -->
  <Route path="landing" component={Landing} />
  <Route path="profile" component={Profile} />
  <Route path="index" component={IndexOld} />
  <Route path="results" component={Results} />
  <Route path="/" component={Index} />
</Router>
