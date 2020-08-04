<template>
  <the-layout>
    <template v-slot:the-sidebar>
      <v-treeview :items="items"></v-treeview>
    </template>
  </the-layout>
</template>

<script>
import TheLayout from './components/layout/TheLayout';

export default {
  name: 'FrontendComponents',
  components: { TheLayout },
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
