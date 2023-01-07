


## [Get a document](https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document)
The following example shows how to retrieve the contents of a single document using `get()`:
```ts
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
```


## [Set a document](https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document)
To create or overwrite a single document, use the following language-specific `set()` methods:
```ts
import { doc, setDoc } from "firebase/firestore"; 

const cityRef = doc(db, 'cities', 'BJ');
setDoc(cityRef, { capital: true }, { merge: true });
```