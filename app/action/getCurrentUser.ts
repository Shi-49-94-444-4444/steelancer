import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    // You can add your own logic here to fetch the user from your database
    // using the email from the session

    return {
      email: session.user.email as string,
      username: session.user.name as string,
      role: session.user.role as string,
      // Add other user properties you want to include
    };
  } catch (error) {
    return null;
  }
}
