import { useMeQuery } from "../generated/graphql";
// import { useRouter } from "next/router";

import { useEffect } from "react";
import {useNavigate } from 'react-router-dom'
export const useIsAuth = () => {
  const navigate = useNavigate()
  const { data, loading } = useMeQuery();
  // const router = useRouter();
  useEffect(() => {
    if (!loading && !data?.me) {
      navigate("/login?next=" );
    }
  }, [loading, data, navigate]);
};
