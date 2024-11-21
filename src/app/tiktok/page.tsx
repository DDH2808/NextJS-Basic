"use client";
import { useRouter } from "next/navigation";
const Tiktok = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      Tiktok page
      <div>
        <button onClick={() => handleBtn()}>Back Home</button>
      </div>
    </div>
  );
};
export default Tiktok;
