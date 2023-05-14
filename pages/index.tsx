import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";

interface LoginPageProps {
  session: Session | null;
}

const LoginPage: NextPage<LoginPageProps> = () => {

  const {data: session} = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session) {
      router.push("/home")
    }
  }, [session])

  return (
    <div className="min-h-[90vh] sml:min-h-[88vh] flex items-center justify-center">
      <Head>
        <title>Javiier-pzk-master | Login</title>
      </Head>
      <main className="flex flex-col gap-4 items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-titleFont text-lg text-textYellow font-semibold flex items-center tracking-wide"
        >
          Hello there!
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-titleFont text-4xl mdl:text-3xl font-semibold"
        >
          Please sign in to proceed
        </motion.h2>
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-auto h-14 border border-textYellow mt-6 rounded-md hover:bg-hoverColor duration-300 flex gap-6 items-center"
          onClick={() => signIn()}
        >
          <FcGoogle className="pl-4 text-5xl" />
          <p className="pr-4 font-titleFont text-textYellow tracking-wider">
            Sign in with Google
          </p>
        </motion.button>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<LoginPageProps> = async (
  context
) => {
  const session = await getSession(context);
  return {
    props: {
      session: session,
    },
  };
};

export default LoginPage;
