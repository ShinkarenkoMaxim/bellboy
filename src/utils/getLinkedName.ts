import { User } from "grammy/types";

export const getLinkedName = (user: User): string => {
  let name: string;

  if (typeof user.username !== "undefined") {
    name = "@" + user.username;
  } else if (typeof user.first_name !== "undefined") {
    if (typeof user.last_name !== "undefined") {
      name = `<a href="tg://user?id=${user.id}">${
        user.first_name + " " + user.last_name
      }</a>`;
    } else {
      name = `<a href="tg://user?id=${user.id}">${user.first_name}</a>`;
    }
  } else {
    name = `<a href="tg://user?id=${user.id}">Аноним</a>`;
  }

  return name;
};
