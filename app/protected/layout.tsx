import Link from "next/link";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav className="mb-8">
        <div className="flex space-x-4 border-b border-gray-200 pb-4">
          <Link
            href="/protected"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
          >
            Protected Home
          </Link>
          <Link
            href="/protected/dashboard"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
          >
            Dashboard
          </Link>
          <Link
            href="/protected/roles"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
          >
            Team Roles
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );

  // return (
  //   <main className="min-h-screen flex flex-col items-center">
  //     <div className="flex-1 w-full flex flex-col gap-20 items-center">
  //       <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
  //         <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
  //           <div className="flex gap-5 items-center font-semibold">
  //             <Link href={"/"}>Next.js Supabase Starter</Link>
  //             <div className="flex items-center gap-2">
  //               <DeployButton />
  //             </div>
  //           </div>
  //           {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
  //         </div>
  //       </nav>
  //       <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
  //         {children}
  //       </div>

  //       <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
  //         <p>
  //           Powered by{" "}
  //           <a
  //             href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
  //             target="_blank"
  //             className="font-bold hover:underline"
  //             rel="noreferrer"
  //           >
  //             Supabase
  //           </a>
  //         </p>
  //         <ThemeSwitcher />
  //       </footer>
  //     </div>
  //   </main>
  // );
}
