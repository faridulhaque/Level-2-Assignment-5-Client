import { useLocation, useParams } from "react-router-dom";
import GadgetFormTwo from "../components/singleGadget/GadgetFormTwo";
import { useGetOneGadgetQuery } from "../services/otherApi/gadgetApi";

const SingleGadgetPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const {pathname} = useLocation()
  const { data, isLoading } = useGetOneGadgetQuery(id as string);


  if(isLoading) {
    return <></>
  }
                    
  const item = data?.data;
  const duplicate = pathname?.includes("duplicate") ? true : false

  return (
    <div>
      <GadgetFormTwo
      item={item}
      duplicate={duplicate}
      id={id}
      ></GadgetFormTwo>
    </div>
  );
};

export default SingleGadgetPage;
