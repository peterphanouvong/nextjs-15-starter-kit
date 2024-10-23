import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { ClientComponentUser } from "./ClientComponentUser";

export default async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <main className="md:max-w-7xl w-full mx-auto px-4">
      <Card className="rounded-2xl bg-slate-950 shadow-2xl text-white text-center">
        <div className="mx-auto max-w-[550px] p-10">
          <p className="text-2xl mb-2">Welcome, {user?.given_name}</p>
          <h1 className="text-4xl font-bold leading-normal">
            Today is an important day. Today you start.
          </h1>
        </div>
      </Card>

      <h2 className="text-xl font-medium mt-10 mb-8">Next steps for you</h2>

      <div className="grid md:grid-cols-4 gap-5 mt-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Token data access</CardTitle>
            <CardDescription>
              Get Kinde data from the server and on the client side.
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-auto">
            <Tabs defaultValue="server">
              <TabsList>
                <TabsTrigger value="server">Server component</TabsTrigger>
                <TabsTrigger value="client">Client component</TabsTrigger>
              </TabsList>
              <TabsContent value="server">
                <div className="border border-slate-200 rounded-lg p-4 mb-4 overflow-x-scroll min-w-0 max-w-xs md:max-w-none">
                  <pre className="text-sm text-slate-700 whitespace-pre-wrap">
                    {JSON.stringify(user, null, 2)}
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="client">
                <ClientComponentUser />
              </TabsContent>
            </Tabs>
            <Link href="https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#kinde-auth-data---server">
              <Button variant="secondary">View docs</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Protecting routes</CardTitle>
            <CardDescription>
              Authenticate users and protect your routes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#protecting-routes">
              <Button variant="secondary">View docs</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Management API</CardTitle>
            <CardDescription>Access the Kinde Management API.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#kinde-management-api">
              <Button variant="secondary">View docs</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Organizations</CardTitle>
            <CardDescription>
              Create and log into organizations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#organizations">
              <Button variant="secondary">View docs</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
