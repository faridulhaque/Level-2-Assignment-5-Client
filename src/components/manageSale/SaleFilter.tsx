import { TSaleParam, TSaleParamStateF } from "../../types/salesTypes";

const SaleFilter = ({ setSaleParam }: Partial<TSaleParamStateF>) => {
  return (
    <select
      onChange={(e: any) =>
        setSaleParam && setSaleParam(e.target.value as TSaleParam)
      }
      className="select select-bordered max-w-xs w-11/12 mx-auto"
    >
      <option value="1">Daily</option>
      <option value="2">Weekly</option>
      <option value="3">Monthly</option>
      <option value="4">Yearly</option>
    </select>
  );
};

export default SaleFilter;
