const User = {
  template: "<div>Liked Palettes</div>",
};

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: "/liked-palettes", component: User },
  ],
});
