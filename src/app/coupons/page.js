// src/app/coupons/page.js

import React from "react";
import RelatedStores from "../../components/coupons/RelatedStores";
import AllCouponsPage from "../../components/coupons/ALlCouponsPage";
export default function CouponsPage() {
  return (
    <div>
        <AllCouponsPage/>
      <RelatedStores/>
    </div>
  );
}
