import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addOrUpload, getCart, removeCart } from "../apis/Auth_firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(["cart", uid || ""], () => getCart(uid), {
    enabled: !!uid,
  });

  const addCartMutation = useMutation(
    (product) => addOrUpload(uid, product),
    queryClient.invalidateQueries(["cart", uid])
  );

  const removeItem = useMutation((id) => removeCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", uid]);
    },
  });

  return { cartQuery, addCartMutation, removeItem };
}
