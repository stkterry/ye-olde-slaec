

export const getMessages = channelId => (
  $.ajax({
    method: "GET",
    url: `/api/channels/${channelId}/messages`
  })
);

export const getMessage = (channelId, id) => (
  $.ajax({
    method: "GET",
    url: `/api/channels/${channelId}/messages/${id}`
  })
)

export const postMessage = (channelId, message) => (
  $.ajax({
    method: "POST",
    url: `/api/channels/${channelId}/messages`,
    data: { message: message }
  })
);

export const patchMessage = (channelId, message) => (
  $.ajax({
    method: "PATCH",
    url: `/api/channels/${channelId}/messages/${message.id}`
  })
);

export const deleteMessage = (channelId, id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/channels/${channelId}/messages/${id}`
  })
);