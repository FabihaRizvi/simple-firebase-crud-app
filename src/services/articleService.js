import {db} from "../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

import { collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    limit,
    Timestamp,
} from "firebase/firestore";

export async function createArticle({title, body}){
    const data = {
        title,
        body,
        date: Timestamp.now(),
    };
    const docRef = await addDoc(collection(db, "articles"),data);
    return {id : docRef.id, ...data};
}
export async function fetchArticles(){
    const snapshot = await getDocs(
        query(collection(db, "articles"),orderBy("date", "desc"), limit(20))
    );
    return snapshot.docs.map((doc)=>({
        id : doc.id,
        ...doc.data(),
    }));
}
export async function deleteArticle(id) {
  const articleRef = doc(db, "articles", id);
  await deleteDoc(articleRef);
}
