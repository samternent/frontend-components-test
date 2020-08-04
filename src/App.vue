<template>
  <the-layout>
    <the-sidebar>
      <v-treeview :items="items"></v-treeview>
    </the-sidebar>
    fdsfdsfds
  </the-layout>
</template>

<script>
import TheLayout from './components/layout/TheLayout';
import TheSidebar from './components/layout/TheSidebar';

export default {
  name: 'FrontendComponents',
  components: { TheLayout, TheSidebar },
  data: () => ({
      items: [
        {
          name: 'Components',
          children: [
            {
              name: 'Layout',
              children: [
                { name: 'TheHeader' },
                { name: 'TheLayout' },
                { name: 'TheSidebar' },
                { name: 'Modals' },
              ],
            },
            {
              name: 'Form',
              children: [
                { name: 'ProgressBar' },
                { name: 'PrioritySelect' },
                { name: 'Search' },
              ],
            },
            {
              name: 'User',
              children: [
                { name: 'EditUserDetails' },
                { name: 'EditAccountDetails' },
                { name: 'UserAvatarWithDropdown' },
              ],
            },
            {
              name: 'Projects',
              children: [
                { name: 'TaskItem' },
                { name: 'ProjectChart' },
              ],
            },
          ]
        },
      ],
    })
};
</script>
