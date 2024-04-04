
import { useCreateGadgetMutation } from "../../services/otherApi/gadgetApi";
import {
  
  TGadgetFeatures,
  TGadgetOthers,
} from "../../types/addGadgetTypes";
import { toast } from "react-toastify";

const GadgetForm = () => {
  const [createGadget, { isLoading }] = useCreateGadgetMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let features: TGadgetFeatures = {};
    let others: TGadgetOthers = {};

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const releaseYear = Number(e.target.releaseYear.value);
    const category = e.target.category.value;
    const brand = e.target.brand.value;
    const os = e.target.os.value;
    const model = e.target.model.value;
    const connectivity = e.target.connectivity.value;
    const powerSource = e.target.powerSource.value;

    if (e.target.camera.value) {
      features.camera = e.target.camera.value;
    }
    if (e.target.storage.value) {
      features.storage = e.target.storage.value;
    }
    if (e.target.screenSize.value) {
      const screenSize = Number(e.target.screenSize.value);
      if (isNaN(screenSize)) {
        return toast.error("Invalid screen size. Number is expected");
      } else {
        features.screenSize = screenSize;
      }
    }

    if (e.target.weight.value) {
      others.weight = e.target.weight.value;
    }
    if (e.target.dimensions.value) {
      others.dimensions = e.target.dimensions.value;
    }

    if (quantity < 1) {
      return toast.error("Quantity must be greater than zero");
    }

    if (price < 1) {
      return toast.error("Price must be greater than zero");
    }

    const priData = {
      name,
      price,
      quantity,
      releaseYear,
      category,
      brand,
      os,
      model,
      connectivity,
      powerSource,
      features,
      others,
    };

    const finalData: any = {};

    Object.entries(priData).forEach(([key, value]: any) => {
      if (value) {
        finalData[key] = value;
      }
    });
    finalData.features = features;
    finalData.others = others;

    if (Object.keys(features).length === 0) {
      delete finalData.features;
    }
    if (Object.keys(others).length === 0) {
      delete finalData.others;
    }

    const result: any = await createGadget(finalData);

    if (result?.data?.success) {
      toast.success(result?.data?.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 bg-gray-800 lg:w-11/12 p-4 text-white rounded-md"
    >
      <h2 className="text-2xl font-semibold mb-4">Gadget Details</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md bg-gray-600 text-black"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="mt-1 p-2 w-full border rounded-md bg-gray-600 text-black"
            required
          />
        </div>

        {/* Quantity */}
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

        {/* Release Year */}
        <div className="mb-4">
          <label htmlFor="releaseYear" className="block text-sm font-medium">
            Release Year
          </label>
          <input
            type="number"
            id="releaseYear"
            name="releaseYear"
            className="mt-1 p-2 w-full border rounded-md bg-gray-600 text-black"
          />
        </div>

        {/* Brand */}
        <div className="mb-4">
          <label htmlFor="brand" className="block text-sm font-medium">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="mt-1 p-2 w-full border rounded-md bg-gray-600 text-black"
          />
        </div>
        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="mt-1 p-2 w-full border rounded-md bg-gray-600 text-black"
          />
        </div>

        {/* Model */}
        <div className="mb-4">
          <label htmlFor="model" className="block text-sm font-medium">
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            className="mt-1 p-2 w-full border rounded-md bg-gray-600 text-black"
          />
        </div>

        {/* OS */}
        <div className="mb-4">
          <label htmlFor="os" className="block text-sm font-medium">
            OS
          </label>
          <input
            type="text"
            id="os"
            name="os"
            className="mt-1 p-2 w-full border rounded-md bg-gray-600 text-black"
          />
        </div>

        {/* Connectivity */}
        <div className="mb-4">
          <label htmlFor="connectivity" className="block text-sm font-medium">
            Connectivity
          </label>
          <input
            type="text"
            id="connectivity"
            name="connectivity"
            className="mt-1 p-2 w-full border rounded-md bg-gray-600 text-black"
          />
        </div>

        {/* Power Source */}
        <div className="mb-4">
          <label htmlFor="powerSource" className="block text-sm font-medium">
            Power Source
          </label>
          <input
            type="text"
            id="powerSource"
            name="powerSource"
            className="mt-1 p-2 w-full border rounded-md bg-gray-600 text-black"
          />
        </div>
      </div>

      {/* Features */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Features</label>

        <div className="mb-4 lg:flex lg:flex-row lg:justify-between gap-4">
          <input
            type="text"
            id="camera"
            name="camera"
            placeholder="Camera"
            className="mt-3 p-2 w-full border rounded-md bg-gray-600 text-black"
          />
          <input
            type="text"
            id="storage"
            name="storage"
            placeholder="Storage"
            className="mt-3 p-2 w-full border rounded-md bg-gray-600 text-black"
          />
          <input
            type="text"
            id="screenSize"
            name="screenSize"
            placeholder="screenSize"
            className="mt-3 p-2 w-full border rounded-md bg-gray-600 text-black"
          />
        </div>
      </div>

      {/* Others */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Others</label>
        <div className="mb-4 lg:flex lg:flex-row lg:justify-between gap-4">
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="Weight"
            className="mt-3 p-2 w-full border rounded-md bg-gray-600 text-black"
          />

          <input
            type="text"
            id="dimensions"
            name="dimensions"
            placeholder="Dimensions"
            className="mt-3 p-2 w-full border rounded-md bg-gray-600 text-black"
          />
        </div>
      </div>

      <div>
        <button
          disabled={isLoading}
          type="submit"
          className=" text-white p-2 rounded-md btn btn-secondary mt-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default GadgetForm;
