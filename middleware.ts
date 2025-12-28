import { authMiddleware } from "@clerk/nextjs";
import { DEMO_STORE_ID } from "@/lib/constants";

export default authMiddleware({
  publicRoutes: ["/api/:path*", `/${DEMO_STORE_ID}`],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
