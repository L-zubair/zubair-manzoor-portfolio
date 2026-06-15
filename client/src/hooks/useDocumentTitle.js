import { useEffect } from "react";

export default function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = `${title} | Zubair Manzoor`;

    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) {
      meta.setAttribute("content", description);
    }
  }, [title, description]);
}
