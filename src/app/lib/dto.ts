import "server-only";
import { getUser } from "@/app/lib/dal";
import User, { IUser } from "../models/User";
// import { User } from "next-auth";

function canSeeUsername(viewer: IUser) {
  return true;
}

function canSeePhoneNumber(viewer: IUser, team: string) {
  //   return viewer.isAdmin || team === viewer.team;
  return true;
}

export async function getProfileDTO(name: string) {
  //   const data = await db.query.users.findMany({
  //     where: eq(users.slug, slug),
  //     // Return specific columns here
  //   });
  //   const user = data[0];
  let user = await User.findOne({ name: name }).exec();
  const currentUser = await getUser();

  // Or return only what's specific to the query here
  return {
    name: canSeeUsername(currentUser) ? user.name : null,
    phonenumber: canSeePhoneNumber(currentUser, user.team)
      ? user.phonenumber
      : null,
  };
}
