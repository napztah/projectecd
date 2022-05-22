import './App.css';
import {useState} from "react";
import db from "./firebase/FirebaseConfig";
import {addDoc, collection} from "firebase/firestore";
import {Button, Input, Stack} from "@mui/material";

function App() {
    const [customerName, setCustomerName] = useState("");
    const [customerPassword, setCustomerPassword] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "users"), {
                username: customerName,
                password: customerPassword,
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        setCustomerName("");
        setCustomerPassword("");
    };

    return (
        <Stack style={{alignItems: 'center', width: '100%', paddingTop: 200}} className="App">
            <h1>Rotary App</h1>
            <Stack style={{display: 'flex', direction: 'column', width: '30%', spacing: 5}}>
                <Input
                    sx={{pt: 2}}
                    type="text"
                    placeholder="Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
                <Input
                    sx={{pt: 2}}
                    type="text"
                    placeholder="Password"
                    value={customerPassword}
                    onChange={(e) => setCustomerPassword(e.target.value)}
                />
                <Button onClick={submit}>Submit</Button>
            </Stack>
        </Stack>

    );
}

export default App;
