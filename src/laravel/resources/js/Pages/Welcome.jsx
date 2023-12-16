import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    useEffect(() => {
        console.log("Welcome Page mounted");
    }, []);
    return (
           <div>
            <p>Hello World!</p>
           </div>
    );
}
