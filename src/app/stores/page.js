// src/app/store/page.js

import React from "react";
import DiscoverStores from "@/components/stores/DiscoverStores";
import StoreCard from "@/components/stores/StoreCard";
const StorePage = () => {
  return (
    <main >
        <DiscoverStores />
        <StoreCard />

    </main>
  );
};

export default StorePage;
