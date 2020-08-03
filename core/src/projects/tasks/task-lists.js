import { get } from '../../data-loader';

export const getTasklist = () => {
  const tasklists = await get('task-lists', { projectId: 6 });
};
