import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[530px] text-center">
              <div className="mb-8">
                <Image
                  src={"/images/404-error.png"}
                  alt="404"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <h3 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                We are either working on this page or it doesn&apos;t exist 
              </h3>

              <Link
                href="/"
                className="rounded-md bg-primary px-8 py-3 text-base font-bold text-white shadow-signUp duration-300 hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
