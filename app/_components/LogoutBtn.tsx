import styles from '@/app/_styles/headingActions.module.css';
import logout from '../_lib/apiFunctions/logout';
import { useMutation } from '@tanstack/react-query';
import { resetUserToken } from '../_lib/userTokenSlice';
import { useDispatch } from 'react-redux';

export default function LogoutBtn({token, setShowAccountPlate}:{
    token: string| null,
    setShowAccountPlate: React.Dispatch<React.SetStateAction<boolean>>}) {

    const dispatch = useDispatch()
    const {mutate} = useMutation({
        mutationFn: logout,
        onSuccess: () => {
            document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            dispatch(resetUserToken());
            setShowAccountPlate(false);
        }
    })
  return (
    <li className={styles.listItem}>
        <button
        className={styles.text}
        onClick={() => mutate(token)}
        >Logout</button>
    </li>
  )
}
