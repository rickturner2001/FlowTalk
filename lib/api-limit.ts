import { auth } from "@clerk/nextjs";
import prismaDb from "./prismadb";
import { MAX_FREE_COUNT } from "@/constants";

export const increaseAPILimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prismaDb.userApiLimit.findUnique({
    where: {
      userId: userId,
    },
  });
  if (userApiLimit) {
    await prismaDb.userApiLimit.update({
      where: {
        userId: userId,
      },
      data: {
        count: userApiLimit.count + 1,
      },
    });
  } else {
    await prismaDb.userApiLimit.create({
      data: {
        userId: userId,
        count: 1,
      },
    });
  }
};

export const checkAPILimit = async () => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }

  const userApiLimit = await prismaDb.userApiLimit.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNT) {
    return true;
  }
  return false;
};

export const getAPILimitCount = async () => {
  const { userId } = auth();
  if (!userId) {
    return 0;
  }

  const userAPILimit = await prismaDb.userApiLimit.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!userAPILimit) {
    return 0;
  }

  return userAPILimit.count;
};
