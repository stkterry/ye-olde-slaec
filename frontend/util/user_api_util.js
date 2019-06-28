

export const getUsers = () => (
  $.ajax({
    method: "GET",
    url: '/api/users'
  })
);

export const getUser = userId => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`
  })
);

export const patchUser = user => (
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`
  })
);

