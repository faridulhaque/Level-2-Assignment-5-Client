import { useEffect } from "react";
import { TSaleModal, TSales } from "../../types/salesTypes";
import { toast } from "react-toastify";
import { useCreateSaleMutation } from "../../services/otherApi/salesApi";

const SaleModal = ({ saleModalData, setSaleModalData }: TSaleModal) => {
  const [addSale, { isLoading }] = useCreateSaleMutation();

  useEffect(() => {
    const closeModalOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSaleModalData({
          productId: "",
          quantityHistory: 0,
        });
      }
    };

    document.addEventListener("keydown", closeModalOnEscape);

    return () => {
      document.removeEventListener("keydown", closeModalOnEscape);
    };
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const buyerName = e.target.buyerName.value;
    const quantity = e.target.quantity.value;
    if (quantity < 1) {
      return toast.error("Please provide a valid quantity");
    }
    if (quantity > saleModalData?.quantityHistory) {
      return toast.error(`You don't have ${quantity} items to sell`);
    }
    const data: TSales = {
      buyerName,
      quantity,
      productId: saleModalData.productId,
      quantityHistory: saleModalData.quantityHistory,
    };
    const result: any = await addSale(data);
    if (result?.data?.success) {

      toast.success(result?.data?.message);
      e.target.reset()
      closeModal();
    }
  };

  const closeModal = () => {
    setSaleModalData({
      productId: "",
      quantityHistory: 0,
    });
    const element: any = document.getElementById("my_modal_5");
    element.close();
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add as sold!</h3>
        <div className="">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="buyerName" className="block text-sm font-medium">
                Buyer Name
              </label>
              <input
                type="text"
                id="buyerName"
                name="buyerName"
                className="mt-1 p-2 w-full border rounded-md bg-gray-600 text-black"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="mt-1 p-2 w-full border rounded-md bg-gray-600 text-black"
                required
              />
            </div>

            <button 
            disabled={isLoading}
            type="submit" className="btn btn-secondary">
              Submit
            </button>
            <button
              onClick={closeModal}
              type="button"
              className="btn btn-primary ml-5"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default SaleModal;
