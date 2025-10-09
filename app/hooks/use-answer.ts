import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/query-key";
import { useState } from "react";

interface FilterState {
  categoryId?: number;
}

const getAnswer = async (filterState: FilterState) => {
  console.log("ingresppppppppppp");
  //   if (hasFilter(filterState)) {
  //     return [];
  //   }
  console.log("filterState", filterState);

  // return await findAllQuestions(1);
};

export const useAnswer = () => {
  const [filter, setFilter] = useState<FilterState>({
    categoryId: undefined,
  });

  const {
    data: questions,
    isLoading: isLoadingQuestions,
    isError: isErrorQuestions,
  } = useQuery({
    queryKey: [QUERY_KEY.Answer, filter],
    queryFn: () => getAnswer(filter),
  });

  console.log("questions", questions);

  const onFilter = (categoryId: number) => {
    setFilter({
      ...filter,
      categoryId,
    });
  };

  return {
    questions,
    isErrorQuestions,
    isLoadingQuestions,
    onFilter,
  };
};
