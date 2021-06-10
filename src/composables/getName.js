import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";

const getName = (id) => {
  const name = ref(null);
  const error = ref(null);

  const loadName = async () => {
    try {
      let res = await projectFirestore
        .collection("names")
        .doc(id)
        .get();

      if (!res.exists) {
        throw Error("That does not exist");
      }

      name.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
    }
  };
  return { name, error, loadName };
};
export default getName;
