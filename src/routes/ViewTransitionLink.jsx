import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

const ViewTransitionLink = ({ to, children }) => {
  const navigate = useNavigate();
  const viewNavigate = (route) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => navigate(route));
      });
    } else {
      navigate(route);
    }
  };

  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        viewNavigate(to);
      }}
    >
      {children}
    </a>
  );
};

export default ViewTransitionLink;
