import moment from "moment";
import { useGetSalesQuery } from "../../services/otherApi/salesApi";


const SaleTable = ({saleParam}:any) => {

  const { data, isLoading } = useGetSalesQuery(saleParam);

  if (isLoading) return <></>;

  const sales = data?.data;
  return (
    <div className="overflow-x-auto ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Date</th>
            <th>Gadget</th>
            <th>Buyer</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {sales?.map((s: any) => (
            <tr key={s._id}>
              <th> {moment(s?.updatedAt).format("YYYY-MM-DD [at] hh:mm A")}</th>

              <td>{s?.productId?.name}</td>
              <td>{s?.buyerName}</td>
              <td>{s?.quantity}</td>
            </tr>
          ))}

          {/* row 2 */}
        </tbody>
      </table>
    </div>
  );
};

export default SaleTable;
