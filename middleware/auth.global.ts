const userLoggedIn: boolean = true;

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/login' && !userLoggedIn) {
    return navigateTo('login');
  } 
  
  if (( to.path === '/login' || to.path === '/subscribe') && userLoggedIn) {    
    return navigateTo('/');
  }

  return; 
});

