import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const reactQueryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("new cabin successfully created");
      reactQueryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (e) => toast.error(e.message),
  });

  return { createCabin, isCreating };
}
