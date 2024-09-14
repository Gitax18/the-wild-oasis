import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const reactQueryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabin, id }) => createEditCabin(newCabin, id),
    onSuccess: () => {
      toast.success("Cabin updated successfully");
      reactQueryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (e) => toast.error(e.message),
  });

  return { editCabin, isEditing };
}
