import { useQuery } from '@tanstack/react-query';
import { getUsersById } from '../../rest/users';

export function useGetUsersById(id?: string) {
  return useQuery(['users', id], async () => await getUsersById({ id: id ?? '' }), {
    enabled: !!id,
  });
}
