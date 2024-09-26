'use client';

import { useEffect } from 'react';
import useGetParamsChannelId from '../../../../_hook/useGetParamsChannelId';
import { useMutationUpdateChannelActiveAt } from '../../../../_hook/useChatMutation';

/**
 * 이것은 컴포넌트라기보다 hook이라고 하는게 더 좋지 않을까요?
 */
const UpdateChannelReadAt = () => {
  const channelId = useGetParamsChannelId();

  const { mutate: updateChannelActiveAt } = useMutationUpdateChannelActiveAt();

  useEffect(() => {
    if (!channelId) return;

    updateChannelActiveAt(channelId);
  }, [channelId]);

  return null;
};

export default UpdateChannelReadAt;
