"use client";
import { useRouter } from "next/navigation";
const Youtube = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      Youtube page
      <div>
        <button onClick={() => handleBtn()}>Back Home</button>
      </div>
    </div>
  );
};
export default Youtube;
