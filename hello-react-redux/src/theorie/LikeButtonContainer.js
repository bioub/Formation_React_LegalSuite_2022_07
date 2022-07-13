import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/actions";
import { countSelector } from "../store/selectors";
import { LikeButtonControlled } from "./LikeButton";

function LikeButtonContainer() {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);

  const handleIncrement = () => {
    dispatch(increment());
  }

  return <LikeButtonControlled count={count} onIncrement={handleIncrement} />
}

export default LikeButtonContainer;
