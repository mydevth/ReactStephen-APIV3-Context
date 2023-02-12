// สร้างและเรียกใช้ component นี้ เพื่อลดเขียน code ให้สั้นลงนิดหน่อย

import { useContext } from "react";
import BooksContext from "../context/books";

function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
