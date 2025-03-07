import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import React from "react";
import StatCard from "../components/common/StatCard";

import CategoryDistributionChart from "../components/CategoryDistributionChart";
import SalesChannelChart from "../components/SalesChannelChart";
import SalesOverViewChart from "../components/SalesOverViewChart";
export default function OverView() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      {/* <Header title={"Overview"} /> */}
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name={"Total Sales"}
            icon={Zap}
            value="$145,325"
            color="#6366f1"
          />
          <StatCard
            name={"New Users"}
            icon={Users}
            value="1,237"
            color="#6366f1"
          />
          <StatCard
            name={"Total Product"}
            icon={ShoppingBag}
            value="577"
            color="#6366f1"
          />
          <StatCard
            name={"Conversion Rate"}
            icon={BarChart2}
            value="12.5%"
            color="#6366f1"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverViewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
}
