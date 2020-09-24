export { default as TheHeader } from './src/components/layout/TheHeader.vue';
export { default as TheLayout } from './src/components/layout/TheLayout.vue';
export { default as TheSidebar } from './src/components/layout/TheSidebar.vue';
export { default as TPageNavigationTabs } from './src/components/navigation/PageNavigationTabs.vue';

// Export components directly from the vuetify lib
export { VDataTable as VDataTable } from 'vuetify/lib';
export { VBtn as VBtn } from 'vuetify/lib';

import vuetify from './src/plugins/vuetify';

export const teamwork = {
  vuetify,
}
