import { useRouter } from "next/router";
export default function Custom404() {
  const router = useRouter();
  setTimeout(function () {
    router.pathname = "/";
  }, 2000);
  return (
    <>
      <h1 className="flex justify-center items-center p-8 text-2xl sm:text-4xl ">
        404 - Page Not Found
      </h1>
      <br />
      <h1 className="flex justify-center items-center p-8 text-lg sm:text-2xl ">
        Web page redirects after 2 seconds...
      </h1>
    </>
  );
}
