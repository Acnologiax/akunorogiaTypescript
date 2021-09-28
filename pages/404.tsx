import { useRouter } from "next/router";
import Link from "next/link";
export default function Custom404() {
  const router = useRouter();
  setTimeout(function () {
    window.location.href = "/";
  }, 2000);
  return (
    <>
      <h1 className="flex justify-center items-center p-8 text-2xl sm:text-4xl ">
        404 - Page Not Found
      </h1>
      <br />
    </>
  );
}
