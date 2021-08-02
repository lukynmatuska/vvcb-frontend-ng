<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";

  // Admin Layout
  import Admin from "./layouts/Admin.svelte";
  // Auth Layout
  import AuthLayout from "./layouts/Auth.svelte";
  import IndexOld from "./views/Index-old.svelte";

  // No Layout Pages
  import Index from "./views/Index.svelte";
  import Landing from "./views/Landing.svelte";
  import Profile from "./views/Profile.svelte";
  import Results from "./views/Results.svelte";
  import Monitors from "./views/monitors/Monitors.svelte";

  import {authStore} from "./components/Auth/Stores";
  import {Auth} from "./components/Auth/Auth.service";

  let auth = new Auth({
				realm: "vvcb",
				"auth-server-url": "https://auth.vvcb.cz/auth",
				"ssl-required": "external",
				resource: "frontend",
				clientId: "frontend",
				"public-client": true,
				"confidential-port": 0,
			});


  authStore.set(auth);

  //let headers = new Headers();
  //headers.append("Authorization", `Bearer ${localStorage.getItem("access_token")}`);
  //fetch("https://api.vvcb.cz/protected", {
  //  method: "GET",
  //  headers: headers
  //}).then(
  //  (res) => {
  //    res.json().then(
  //      (data) => {
  //        console.log(data);
  //      }
  //    );
  //  }
  //);

  export let url = "";
  export let name;
</script>

<Router {url}>
  <!-- admin layout -->
  <Route path="admin/*admin" component={Admin} />
  <!-- auth layout -->
  <Route path="auth/*auth" component={AuthLayout} />
  <!-- no layout pages -->
  <Route path="landing" component={Landing} />
  <Route path="profile" component={Profile} />
  <Route path="index" component={IndexOld} />
  <Route path="results" component={Results} />
  <Route path="monitors" component={Monitors} />
  <Route path="/" component={Index} />
</Router>
