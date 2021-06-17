import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";

const getNames = () => {
  const names = ref([]);
  const error = ref(null);

  const loadNames = async () => {
    try {
      const res = await projectFirestore
        .collection("names")
        .orderBy("createdAt")
        .get();

      names.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
    }
  };
  return { names, error, loadNames };
};
export default getNames;
