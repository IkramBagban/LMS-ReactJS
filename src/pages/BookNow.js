import LoginPage from "./BookNowPages/Login";
import BookingPage from "./BookingPage/BookingPage";
import { useSelector } from "react-redux"; 

function BookNow() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const guestLogin = useSelector((state) => state.guest.loggedIn);

  return (
    <>
      {!loggedIn && !guestLogin && <LoginPage />}

      {loggedIn && <BookingPage />}

      {guestLogin && <BookingPage />}
    </>
  );
}

export default BookNow;
