import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <div>
        <p>Signed in as {session.user.name}</p>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign out</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>
    </div>
  );
}
