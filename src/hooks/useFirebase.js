import {
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged,
    signInWithPopup,
    updateProfile,
    signOut
} from "@firebase/auth";
import {
    useEffect,
    useState
} from "react";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    //log in state
    const [login, setLogin] = useState(false);



    const auth = new getAuth();
    // google provider 
    const googleProvider = new GoogleAuthProvider();

    // google sign in 
    const handleGoogleSignIN = e => {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
            });
    }
    



    // submit button handler 
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Opps!password must be at least 6 character long...');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password must contain 2 uppercase');
        }

        //log in or register operation
        login ? (processLogin(email, password)) : createNewUser(email, password);


    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError(' ');
                // Signed in 
                const user = userCredential.user;
                setEmail('');
                setPassword('');
                setError('');
                window.alert('Hurrah!Log in successfull..');
                // ...
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;

                console.log(user);
                setError(' ');
                verifyEmail();
                setUserName();
                window.alert('Registration Complete.Now You Can LogIn!!')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // update profile 
    const setUserName = () => {
        updateProfile(auth.currentUser, {
                displayName: name

            })
            .then((result) => {

            })
    }


    // verify email 
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });

    }

    // log in toggle 
    const toggleLogIn = e => {
        setLogin(e.target.checked);
    }
    // name handler 
    const handleNameChange = e => {
        setName(e.target.value);
    }
    // email handler 
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    // password handler 
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    //handle clear all fiels when toogle
    const handleToggleChange = () => {

        setError('');

    }
    //logout 
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    //  state change tracker 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            }
        });
    }, [])



    return {
        user,
        name,
        email,
        password,
        error,
        login,
        signInWithEmailAndPassword,
        handleEmailChange,
        handleNameChange,
        handlePasswordChange,
        handleToggleChange,
        handleRegistration,
        handleGoogleSignIN,
        createNewUser,
        verifyEmail,
        toggleLogIn,
        logout

    };

}

export default useFirebase;