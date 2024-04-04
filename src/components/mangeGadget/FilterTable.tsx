import { toast } from "react-toastify";
import {
  useDeleteGadgetMutation,
  useDeleteManyGadgetMutation,
} from "../../services/otherApi/gadgetApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TSaleModalData } from "../../types/salesTypes";
import SaleModal from "./SaleModal";

const FilterTable = ({ data }: any) => {
  const [saleModalData, setSaleModalData] = useState<TSaleModalData>({
    productId: "",
    quantityHistory: 0,
  });

  const [delIds, setDelIds] = useState<string[]>([]);

  const navigate = useNavigate();
  const [deleteGadget, { isLoading }] = useDeleteGadgetMutation();
  const [deleteManyGadget, { isLoading: deletingMany }] =
    useDeleteManyGadgetMutation();

  const handleDelete = async (id: string) => {
    const res: any = await deleteGadget(id);
    if (res.data?.success) {
      toast.success(res.data.message);
    }
  };

  const handleSelectManyGadget = async (id: string) => {
    if (delIds.includes(id)) {
      setDelIds(delIds.filter((d) => d !== id));
    } else {
      setDelIds([...delIds, id]);
    }
  };

  const handleDeleteManyGadget = async () => {
    const result: any = await deleteManyGadget(delIds);
    if (result?.data?.success) {
      toast.success(result?.data?.message);
      setDelIds([]);
    }
  };

  const handleModal = async (productId: string, quantityHistory: number) => {
    setSaleModalData({
      productId,
      quantityHistory,
    });
    const element: any = document.getElementById("my_modal_5");
    element.showModal();
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs pb-10">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Release year</th>
            <th>Category</th>
            <th>Brand</th>
            <th>OS</th>
            <th>Model</th>
            <th>Power Source</th>
            <th>Connectivity</th>
            <th>Features</th>
            <th>Others</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d: any) => (
            <tr key={d.id}>
              <td>
                <input
                  onClick={() => handleSelectManyGadget(d._id)}
                  type="checkbox"
                  className="checkbox"
                  checked={delIds.includes(d?._id)}
                />
              </td>
              <td>{d?.name}</td>
              <td>{d?.price}</td>
              <td>{d?.quantity}</td>
              <td>{d?.releaseYear}</td>
              <td>{d?.category}</td>
              <td>{d?.brand}</td>
              <td>{d?.os}</td>
              <td>{d?.model}</td>
              <td>{d?.powerSource}</td>
              <td>{d?.connectivity}</td>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Camera</th>
                      <th>Storage</th>
                      <th>Screen Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{d?.features?.camera}</td>
                      <td>{d?.features?.storage}</td>
                      <td>{d?.features?.screenSize}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Weight</th>
                      <th>Dimensions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{d?.others?.weight}</td>
                      <td>{d?.others?.dimensions}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} role="button" className="btn m-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="bg-white dropdown-content z-[1] menu p-2 shadow rounded-box w-52"
                  >
                    <li
                      onClick={() => navigate(`/update/${d._id}`)}
                      className="mb-2 text-black flex items-center justify-center border-b-2 py-2 cursor-pointer"
                    >
                      Edit
                    </li>
                    <li
                      onClick={() => navigate(`/duplicate/${d._id}`)}
                      className="mb-2 text-green-500 flex items-center justify-center border-b-2 py-2 cursor-pointer"
                    >
                      Duplicate
                    </li>
                    <li
                      onClick={() => handleModal(d?._id, d?.quantity)}
                      className="mb-2 text-blue-500 flex items-center justify-center border-b-2 py-2 cursor-pointer"
                    >
                      Sale
                    </li>
                    {!isLoading ? (
                      <li
                        onClick={() => handleDelete(d?._id)}
                        className="mb-2 text-red-500 flex items-center justify-center border-b-2 py-2 cursor-pointer"
                      >
                        Delete
                      </li>
                    ) : (
                      <></>
                    )}
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data?.length > 0 ? (
        <button
          onClick={() => handleDeleteManyGadget()}
          disabled={delIds.length < 1 || deletingMany}
          className="btn btn-danger bg-red-500 mt-4"
        >
          {" "}
          Delete Selected
        </button>
      ) : (
        <></>
      )}
      <SaleModal
        saleModalData={saleModalData}
        setSaleModalData={setSaleModalData}
      ></SaleModal>
    </div>
  );
};

export default FilterTable;
