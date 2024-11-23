import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/hoidanit.module.css";
import AppTable from "@/components/app.table";

export default function Home() {
  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href={"/facebook"}>
            <span className={y["red"]}>Facebook</span>
          </Link>
        </li>
        <li className={x["green"]} style={{ margin: "20px 0" }}>
          <Link href={"/youtube"}>
            <span className={y["red"]}>Youtube</span>
          </Link>
        </li>
        <li className={x["red"]}>
          <Link href={"/tiktok"}>
            <span className={y["red"]}>Tiktok</span>
          </Link>
        </li>
      </ul>
      <AppTable />
    </div>
  );
}
