import { json, redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { requireAuth } from "~/lib/auth.server";
import {
  ArrowRight,
  Clock,
  FileText,
  FolderOpen,
  LayoutDashboard,
  Plus,
  Star,
} from "lucide-react";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Layout } from "~/components/layout";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabase, response } = await requireAuth(request);

  // Get recent documents
  const { data: recentDocuments } = await supabase
    .from("documents")
    .select("*")
    .order("updated_at", { ascending: false })
    .limit(5);

  // Get starred documents
  const { data: starredDocuments } = await supabase
    .from("documents")
    .select("*")
    .eq("is_starred", true)
    .limit(5);

  return json(
    { recentDocuments, starredDocuments },
    { headers: response.headers }
  );
};

export default function Index() {
  const { recentDocuments, starredDocuments } = useLoaderData<typeof loader>();

  const quickActions = [
    {
      name: "New Page",
      description: "Create a blank page",
      icon: FileText,
      href: "#",
    },
    {
      name: "New Folder",
      description: "Create a new folder",
      icon: FolderOpen,
      href: "#",
    },
    {
      name: "New Dashboard",
      description: "Create a dashboard",
      icon: LayoutDashboard,
      href: "#",
    },
  ];

  return (
    <Layout minimal>
      <div className="grid gap-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="mt-2 text-muted-foreground">
            Here's what's been happening in your workspace.
          </p>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickActions.map((action) => (
              <Button
                key={action.name}
                variant="outline"
                className="flex-col items-start h-auto gap-2 p-4 hover:bg-muted"
                asChild
              >
                <Link to={action.href}>
                  <div className="flex items-center w-full gap-2">
                    <action.icon className="w-5 h-5" />
                    <span className="font-medium">{action.name}</span>
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </div>
                  <p className="text-sm line-clamp-1 text-muted-foreground">
                    {action.description}
                  </p>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Recent Pages */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Recent Pages</h2>
              </div>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <ScrollArea className="h-[280px] rounded-lg border">
              <div className="p-4 space-y-4">
                {recentDocuments.map((doc) => (
                  <Link
                    key={doc.id}
                    to={`/pages/${doc.id}`}
                    className="block p-2 space-y-1 rounded-lg hover:bg-muted"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{doc.emoji}</span>
                      <span className="font-medium">{doc.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Updated {new Date(doc.updated_at).toLocaleDateString()}
                    </p>
                  </Link>
                ))}
                {recentDocuments.length === 0 && (
                  <div className="text-sm text-center text-muted-foreground">
                    No recent pages
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Starred Pages */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Starred Pages</h2>
              </div>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <ScrollArea className="h-[280px] rounded-lg border">
              <div className="p-4 space-y-4">
                {(starredDocuments || []).map((doc) => (
                  <Link
                    key={doc.id}
                    to={`/pages/${doc.id}`}
                    className="block p-2 space-y-1 rounded-lg hover:bg-muted"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{doc.emoji}</span>
                      <span className="font-medium">{doc.title}</span>
                    </div>
                  </Link>
                ))}
                {(starredDocuments || []).length === 0 && (
                  <div className="text-sm text-center text-muted-foreground">
                    No starred pages
                  </div>
                )}
                <Button
                  variant="outline"
                  className="justify-start w-full gap-2"
                  size="sm"
                >
                  <Plus className="w-4 h-4" />
                  Add to starred
                </Button>
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <Button variant="ghost" size="sm">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="border rounded-lg">
            <div className="p-4">
              <div className="space-y-4">
                {recentDocuments.slice(0, 2).map((doc, i) => (
                  <div key={doc.id}>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm">
                          You updated{" "}
                          <Link
                            to={`/pages/${doc.id}`}
                            className="font-medium underline-offset-4 hover:underline"
                          >
                            {doc.title}
                          </Link>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(doc.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    {i < recentDocuments.length - 1 && (
                      <Separator className="my-4" />
                    )}
                  </div>
                ))}
                {recentDocuments.length === 0 && (
                  <div className="text-sm text-center text-muted-foreground">
                    No recent activity
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
