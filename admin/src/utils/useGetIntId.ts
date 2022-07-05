// import { useRouter } from "next/router";
import { useSearchParams  } from 'react-router-dom'
export const useGetIntId = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  // const router = useRouter();
  const stringMakeing:string  =JSON.stringify( searchParams.get('id'))
  const intId =
    typeof searchParams.get('id') === "string" ? parseInt(stringMakeing) : -1;

  return intId;
};
