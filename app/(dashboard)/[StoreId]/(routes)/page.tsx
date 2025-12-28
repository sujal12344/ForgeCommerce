import SampleDataModal from "@/components/quick-adds/sample-data";
import getGraphdata from "@/components/overview-actions/get-graphdata";
import getProducts from "@/components/overview-actions/get-products";
import getRevenue from "@/components/overview-actions/get-revenue";
import getSales from "@/components/overview-actions/get-sales";
import getUserinfo from "@/components/overview-actions/get-userinfo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import OverviewGraph from "@/components/ui/overview-graph";
import Sales from "@/components/ui/recent-sales";
import { Separator } from "@/components/ui/separator";
import { formatter } from "@/lib/utils";
import {
  CreditCard,
  DollarSign,
  Shirt,
  ExternalLink,
  ShoppingCart,
} from "lucide-react";
import React from "react";
import { dataExists } from "@/components/sample-actions/data-exists";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DEMO_STORE_ID, DEMO_STORE_URL } from "@/lib/constants";

const Dashboard = async ({ params }: { params: { StoreId: string } }) => {
  const sales = await getSales(params.StoreId);
  const AvailProducts = await getProducts(params.StoreId);
  const Totalrevenue = await getRevenue(params.StoreId);
  const GraphData = await getGraphdata(params.StoreId);
  const SalesData = await getUserinfo(params.StoreId);
  const dataExist = await dataExists(params.StoreId);
  return (
    <div className="px-4 py-2 md:px-6 lg:px-8 w-full h-full">
      <div className="flex flex-row justify-between items-center">
        <Heading title="Dashboard" description="Overview of your store" />

        <div className="flex space-x-4 items-center">
          {dataExist ? <></> : <SampleDataModal />}

          {params.StoreId === DEMO_STORE_ID && (
            <Link href={DEMO_STORE_URL} target="_blank">
              <Button className="bg-gradient-to-r transition-all duration-300 from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105 hover:shadow-lg text-white flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                <span className="hidden sm:inline">View</span> Store
                <ExternalLink className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          )}
        </div>
      </div>
      <Separator />
      <div className="grid sm:grid-cols-3 w-full gap-6 mt-2 ">
        <div className="group">
          <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-l-green-500 dark:border-l-green-400">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {Totalrevenue !== null
                  ? formatter.format(Totalrevenue)
                  : "$0.00"}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                From paid orders
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="group">
          <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-l-blue-500 dark:border-l-blue-400">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                +{sales}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Completed orders
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="group">
          <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-l-purple-500 dark:border-l-purple-400">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-1">
                Total products
                <span className="hidden md:inline">(in stock)</span>
              </CardTitle>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shirt className="w-5 h-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {AvailProducts}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Available items
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 gap-6 md:mt-12 mt-5">
        <div className="lg:col-span-4 transition-all duration-300 hover:scale-[1.01]">
          <OverviewGraph data={GraphData} />
        </div>
        <div className="md:col-span-2 hidden lg:block transition-all duration-300 hover:scale-[1.01]">
          <Sales data={SalesData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
