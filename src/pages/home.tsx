import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/v1");
  }, [navigate]);

  return (
    <div>
      <h1>Product Engineer(Frontend) Test</h1>
    </div>
  );
}
