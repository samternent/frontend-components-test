import vuetify from './src/plugins/vuetify';

export const TheHeader = () =>
  import('./src/components/layout/TheHeader.vue');

export const TheLayout = () =>
  import('./src/components/layout/TheLayout.vue');

export const PageNavigationTabs = () =>
  import('./src/components/navigation/PageNavigationTabs.vue');

export const teamwork = {
  vuetify,
}
