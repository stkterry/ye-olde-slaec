

export const getChannels = () => (
  $.ajax({
    method: "GET",
    url: "/api/channels"
  })
);

export const getChannel = id => (
  $.ajax({
    method: "GET",
    url: `/api/channels/${id}`
  })
);

export const postChannel = channel => (
  $.ajax({
    method: "POST",
    url: "/api/channels",
    data: { channel: channel }
  })
);

export const patchChannel = channel => (
  $.ajax({
    method: "PATCH",
    url: `/api/channels/${channel.id}`,
    data: { channel: channel }
  })
);

export const deleteChannel = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/channels/${id}`
  })
);