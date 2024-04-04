import SaleFilter from "../components/manageSale/SaleFilter";
import SaleTable from "../components/manageSale/SaleTable";
import { useState } from "react";
import { TSaleParam } from "../types/salesTypes";

const SalesPage = () => {
  const [saleParam, setSaleParam] = useState<TSaleParam>("1");

  return (
    <div className="mx-auto w-11/12">
      <SaleFilter setSaleParam={setSaleParam}></SaleFilter>
      <SaleTable saleParam={saleParam}></SaleTable>
    </div>
  );
};

export default SalesPage;
