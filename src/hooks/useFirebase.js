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
import { useHistory, useLocation } from "react-router";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();


const useFirebase = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [isLoading,setIsLoading]=useState(true);
    //log in state
    const [login, setLogin] = useState(false);

    
    const [admin, setAdmin] = useState(false);

    const history=useHistory();
    

    const auth = new getAuth();
    const googleProvider = new GoogleAuthProvider();

    //  state change tracker 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsLoading(true);
            if (user) {
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
    }, [])

    // google sign in 
    const handleGoogleSignIN = e => {
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                
                saveUser(user.email,user.displayName,'PUT');
                
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
        // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //     setError('password must contain 2 uppercase');
        //     return;
        // }

        //log in or register operation
        login ? (processLogin(email,password)) : createNewUser(name,email, password);


    }


    // login function with email and password
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError(' ');
                // Signed in 
                const user = userCredential.user;
                setUser(user);

                setEmail('');
                setPassword('');
                setError('');
                window.alert('Hurrah!Log in successfull..');
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const createNewUser = (name,email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;

                setError('');

                const newUser = { email, displayName: name };
                setUser(newUser);
                
                verifyEmail();
                setUserName(name);
                saveUser(email,name,'POST');
                window.alert('Registration Complete.Now You Can LogIn!!');
                
            })
           
            .catch(error => {
                setError(error.message);
            })
    }

    // update profile 
    const setUserName = (name) => {
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
    //handle clear all error message when toogle
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

    // filtering admin 
    useEffect(() => {
        fetch(`https://floating-tor-66173.herokuapp.com/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // save user to data base 
    const saveUser=(email,displayName,method)=>{
        const user={email,displayName};
        fetch('https://floating-tor-66173.herokuapp.com/users',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()

    }

    



    return {
        user,
        admin,
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
        isLoading,
        logout

    };

}

export default useFirebase;