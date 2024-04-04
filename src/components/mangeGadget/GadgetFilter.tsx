import { useState } from "react";
import {
  useGetFilteredGadgetQuery,
  useGetGadgetFilterValuesQuery,
} from "../../services/otherApi/gadgetApi";
import FilterTable from "./FilterTable";

const GadgetFilter = ({ query, setQuery }: any) => {
  const [itemsForFilter, setItemsForFilter] = useState<any>({});

  const handleFilter = async () => {
    const queryParams = new URLSearchParams();
    Object.entries(itemsForFilter).map(([key, value]: any) =>
      queryParams.append(key, value)
    );

    const queryString = queryParams.toString();

    setQuery(`?${queryString}`);
  };

  const { data, isLoading } = useGetGadgetFilterValuesQuery(null);
  const { data: filteredItemData, isLoading: filtering } =
    useGetFilteredGadgetQuery(query);
  if (isLoading || filtering) {
    return <></>;
  }
  const filterValues: any = data?.data[0] || {};

  const handleClearFilter = () => {
    window.location.reload();
  };

  console.log(filteredItemData)

  return (
    <div className="collapse bg-base-200 my-10">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">Click to Filter</div>

      <div className="collapse-content">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-center">
          {Object?.entries(filterValues)?.map(
            ([key, values]: any) =>
              key !== "_id" && (
                <select
                  onChange={(e: any) =>
                    setItemsForFilter({
                      ...itemsForFilter,
                      [key]: e.target.value,
                    })
                  }
                  key={key}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Select a {key}
                  </option>
                  {values?.map((value: string | number) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              )
          )}
        </div>

        <div className="my-5 w-11/12 mx-auto">
          <button
            disabled={filtering}
            onClick={handleFilter}
            className="btn btn-primary mr-5"
          >
            Filter
          </button>
          <button onClick={handleClearFilter} className="btn btn-secondary">
            Clear
          </button>
        </div>
        {filteredItemData?.data?.length > 0 ? (
          <FilterTable data={filteredItemData?.data}></FilterTable>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default GadgetFilter;
