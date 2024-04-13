import { useEffect, useState } from "react";
import dbConnect from "../db/connection";
import User, { IUser } from "../models/User";
import { connect } from "mongoose";

const useUserLists = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        connect(`${process.env.MONGODB_URI}`).then(async () => {
            // const users: Array<IUser> = await new User();
            // console.log(users);
            const response: IUser[] = await new User().exec();
            console.log(response);
            setUsers(response);
          })
          
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return {
    users,
    isLoading,
    error,
  };
};

export default useUserLists;
