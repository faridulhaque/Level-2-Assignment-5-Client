import { useState } from "react";
import GadgetFilter from "../components/mangeGadget/GadgetFilter";
import LongTable from "../components/mangeGadget/LongTable";
import { useGetAllGadgetsQuery } from "../services/otherApi/gadgetApi";

const ManageGadgetPage = () => {
  const [query, setQuery] = useState("");

  const { data, isLoading } = useGetAllGadgetsQuery(null, {
    skip: query !== "",
  });

  if (isLoading) {
    return;
  }

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2x my-4">Gadget Management</h2>
      <GadgetFilter setQuery={setQuery} query={query}></GadgetFilter>
      {query === "" && <LongTable data={data?.data}></LongTable>}
    </div>
  );
};

export default ManageGadgetPage;
