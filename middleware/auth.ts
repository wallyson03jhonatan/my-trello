const userLoggedIn: boolean = false;

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/login' && !userLoggedIn) {
    return navigateTo('login');
  } 

  return 
});