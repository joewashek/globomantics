import { useCallback, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";

const useGetRequest = (url:string) => {
  
  const [loadingState,setLoadingState] = useState(loadingStatus.isLoading);

  const get = useCallback(async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setLoadingState(loadingStatus.loaded);
      return result;
    } catch (error) {
      setLoadingState(loadingStatus.hasErrored);      
    }
  }, [url]); // url is external dependency

  return {get,loadingState};
}

export default useGetRequest;