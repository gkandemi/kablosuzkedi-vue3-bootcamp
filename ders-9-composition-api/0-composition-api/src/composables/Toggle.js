import { ref } from "vue";

export default function () {
  const show = ref(false);
  const toggleIt = () => {
    show.value = !show.value;
  };

  return { show, toggleIt };
}
