

export const createSubscriber = (channelId, subscriber) => (
  $.ajax({
    method: "POST",
    url: `/api/channels/${channelId}/subscribers`,
    data: { subscriber: subscriber }
  })
);

export const deleteSubscriber = (channelId, subscriberId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/channels/${channelId}/subscribers/${subscriberId}`
  })
);

