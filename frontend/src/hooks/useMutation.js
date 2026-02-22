import { useState } from "react";

const useMutation = (apiFunc) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (variables) => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setError(null);
    try {
      const result = await apiFunc(variables);
      setData(result);
      setIsSuccess(true);
      return result;
    } catch (err) {
      setIsError(true);
      setError(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, data, isLoading, isSuccess, isError, error };
};

export default useMutation;
